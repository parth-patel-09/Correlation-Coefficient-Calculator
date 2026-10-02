
const form = document.getElementById("correlationForm");
const results = document.getElementById("results");
const error = document.getElementById("error");

function parseValues(text) {
    const parts = text.trim().split(/[\s,]+/);

    if (!text.trim()) {
        return [];
    }

    return parts.map(Number);
}

function formatNumber(value) {
    return Number(value.toPrecision(12)).toString();
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    error.textContent = "";
    results.hidden = true;

    const n = Number(document.getElementById("count").value);
    const x = parseValues(document.getElementById("xValues").value);
    const y = parseValues(document.getElementById("yValues").value);

    // Validate the number of observations.
    if (!Number.isInteger(n) || n < 2) {
        error.textContent =
            "Enter a whole number of observations (at least 2).";
        return;
    }

    // Validate the number of X and Y values.
    if (x.length !== n || y.length !== n) {
        error.textContent =
            `You entered ${x.length} X values and ${y.length} Y values. ` +
            `Please enter exactly ${n} values for each.`;
        return;
    }

    // Validate that all values are finite numbers.
    if (![...x, ...y].every(Number.isFinite)) {
        error.textContent =
            "Please enter only valid numbers. Do not use letters or symbols.";
        return;
    }

    // Calculate the required sums.
    const sumX = x.reduce((total, value) => total + value, 0);
    const sumY = y.reduce((total, value) => total + value, 0);

    const sumXY = x.reduce(
        (total, value, i) => total + value * y[i], 0
    );

    const sumX2 = x.reduce(
        (total, value) => total + value ** 2, 0
    );

    const sumY2 = y.reduce(
        (total, value) => total + value ** 2, 0
    );

    // Apply the specified Pearson correlation formula.
    const numerator = n * sumXY - sumX * sumY;

    const termX = n * sumX2 - sumX ** 2;
    const termY = n * sumY2 - sumY ** 2;

    // Guard against constant data and floating-point round-off.
    const scaleX = Math.max(
        Math.abs(n * sumX2), Math.abs(sumX ** 2)
    );

    const scaleY = Math.max(
        Math.abs(n * sumY2), Math.abs(sumY ** 2)
    );

    const tolerance = 1e-12;

    if (
        termX <= tolerance * scaleX ||
        termY <= tolerance * scaleY
    ) {
        error.textContent =
            "Correlation is undefined when X or Y has no variation, " +
            "or the variation is too small for reliable calculation.";
        return;
    }

    const denominator = Math.sqrt(termX * termY);

    let r = numerator / denominator;

    if (!Number.isFinite(r)) {
        error.textContent =
            "The values are too large to calculate reliably.";
        return;
    }

    // Correct tiny floating-point deviations beyond [-1, 1].
    if (r > 1 && r < 1 + 1e-12) r = 1;
    if (r < -1 && r > -1 - 1e-12) r = -1;

    if (r < -1 || r > 1) {
        error.textContent =
            "Numerical precision issue. Please check your input values.";
        return;
    }

    // Display the correlation coefficient and interpretation.
    document.getElementById("rValue").textContent = r.toFixed(10);

    let interpretation;

    if (Math.abs(r) < 1e-12) {
        interpretation = "No linear correlation (r is approximately 0).";
    } else if (r === 1) {
        interpretation = "Perfect positive correlation.";
    } else if (r === -1) {
        interpretation = "Perfect negative correlation.";
    } else if (r > 0) {
        interpretation = "Positive linear correlation.";
    } else {
        interpretation = "Negative linear correlation.";
    }

    document.getElementById("interpretation").textContent =
        interpretation;

    // Display all five required sums.
    document.getElementById("sumXY").textContent = formatNumber(sumXY);
    document.getElementById("sumX").textContent = formatNumber(sumX);
    document.getElementById("sumY").textContent = formatNumber(sumY);
    document.getElementById("sumX2").textContent = formatNumber(sumX2);
    document.getElementById("sumY2").textContent = formatNumber(sumY2);

    // Display the substituted formula.
    document.getElementById("substitution").textContent =
        `r = (${n} × ${formatNumber(sumXY)} − ` +
        `(${formatNumber(sumX)} × ${formatNumber(sumY)})) / ` +
        `√([${n} × ${formatNumber(sumX2)} − ` +
        `${formatNumber(sumX)}²] × ` +
        `[${n} × ${formatNumber(sumY2)} − ` +
        `${formatNumber(sumY)}²]) = ${r.toFixed(10)}`;

    results.hidden = false;
    results.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Clear old results and error messages when the form is reset.
form.addEventListener("reset", function () {
    error.textContent = "";
    results.hidden = true;
});
