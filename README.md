# Correlation-Coefficient-Calculator

A simple, responsive web application to calculate **Pearson's Sample Correlation Coefficient (r)** using HTML, CSS, and JavaScript.

The calculator accepts X and Y data values, calculates the required statistical sums, and determines the correlation coefficient using the standard mathematical formula.

## Features

- Calculate Pearson's sample correlation coefficient (\(r\)).
- Accept integer, decimal, and negative values.
- Enter multiple X and Y values separated by spaces, commas, or new lines.
- Automatically calculate the required sums:
  - Sum of products (\(\sum xy\))
  - Sum of X values (\(\sum x\))
  - Sum of Y values (\(\sum y\))
  - Sum of squared X values (\(\sum x^2\))
  - Sum of squared Y values (\(\sum y^2\))
- Display the correlation coefficient up to 10 decimal places.
- Validate the number of observations and input values.
- Handle undefined correlation when either variable has no variation.
- Display the formula and its substitution with calculated values.
- Responsive and user-friendly interface.
- No external libraries or frameworks required.

## Mathematical Formula

The calculator uses the following formula:

\[
r=\frac{n\sum xy-(\sum x)(\sum y)}
{\sqrt{[n\sum x^2-(\sum x)^2][n\sum y^2-(\sum y)^2]}}
\]

Where:

- \(r\) = Pearson's sample correlation coefficient
- \(n\) = Number of observations
- \(\sum xy\) = Sum of the products of corresponding X and Y values
- \(\sum x\) = Sum of all X values
- \(\sum y\) = Sum of all Y values
- \(\sum x^2\) = Sum of the squared X values
- \(\sum y^2\) = Sum of the squared Y values

### Interpretation of the Correlation Coefficient

| Value of r | Interpretation |
|---|---|
| \(r = +1\) | Perfect positive correlation |
| \(0 < r < +1\) | Positive correlation |
| \(r = 0\) | No linear correlation |
| \(-1 < r < 0\) | Negative correlation |
| \(r = -1\) | Perfect negative correlation |

## Technologies Used

- **HTML5** — Website structure and input fields.
- **CSS3** — Styling, layout, and responsive design.
- **JavaScript** — Input validation, mathematical calculations, and dynamic result display.

## Project Structure

```text
correlation-calculator/
│
├── index.html    # Main webpage
├── style.css     # Styling and responsive layout
├── script.js     # Calculation logic and validation
└── README.md     # Project documentation
```

## How to Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/correlation-calculator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd correlation-calculator
   ```

3. Open `index.html` in your browser.

   Alternatively, open the project in Visual Studio Code and run `index.html` using the Live Server extension.

No additional dependencies or installations are required.

## Example

### Input

**Number of observations:** `5`

**X values:**
```text
1.5, 2.5, 3.5, 4.5, 5.5
```

**Y values:**
```text
2.2, 3.8, 4.1, 5.7, 6.3
```

### Output

The calculator displays the following sums:

| Quantity | Value |
|---|---:|
| \(\sum xy\) | 82.65 |
| \(\sum x\) | 17.5 |
| \(\sum y\) | 22.1 |
| \(\sum x^2\) | 81.25 |
| \(\sum y^2\) | 109.47 |
| **Correlation coefficient (r)** | **0.9761171160** |

The result indicates a strong positive linear correlation between X and Y.

## Input Validation

The application checks that:

- The number of observations is an integer greater than or equal to 2.
- The number of X and Y values matches the specified number of observations.
- All entered values are valid finite numbers.
- The correlation coefficient is defined and can be calculated reliably.

## Limitations

- The calculator uses JavaScript floating-point arithmetic, so very large or numerically sensitive datasets may produce precision limitations.
- The displayed result is rounded to 10 decimal places.
- Correlation measures linear association and does not establish causation.

## Future Improvements

- Add a scatter plot to visualize the relationship between X and Y.
- Display a best-fit regression line.
- Add an option to export calculation results as CSV.
- Support importing data from CSV files.

## License

This project is open source and available for educational and personal use. You may modify it to suit your requirements.
