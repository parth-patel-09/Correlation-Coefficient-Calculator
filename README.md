# Correlation Coefficient Calculator

A simple web application to calculate **Pearson's sample correlation coefficient (r)** using the standard mathematical formula.

## Features

- Calculate correlation coefficient (r).
- Accept decimal and negative values.
- Display all required sums: Σxy, Σx, Σy, Σx², and Σy².
- Input validation and error handling.
- Display results up to 10 decimal places.
- Simple and responsive user interface.

## Technologies Used

- HTML
- CSS
- JavaScript

## Formula

\[
r=\frac{n\sum xy-(\sum x)(\sum y)}
{\sqrt{[n\sum x^2-(\sum x)^2][n\sum y^2-(\sum y)^2]}}
\]

## How to Run

1. Clone this repository.
2. Open the project folder in VS Code.
3. Open `index.html` in your browser or use Live Server.
4. Enter the number of observations and the corresponding X and Y values.
5. Click **Calculate r** to view the results.

## Note

This project is intended for educational purposes. It uses JavaScript for calculations and does not require external libraries.
