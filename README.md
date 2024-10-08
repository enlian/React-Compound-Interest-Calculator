# React Compound Interest Calculator

This project is a simple compound interest calculator built using React. It allows users to calculate their potential earnings over time based on the initial principal, interest rate, compounding frequency, and investment duration.

## Introduction

This compound interest calculator helps users estimate how much their investment could grow over time using compound interest. It is built with React and designed to be simple and easy to use.

## Features

- Calculates compound interest based on:
  - Initial investment (principal)
  - Annual interest rate
  - Number of times interest is compounded per year
  - Investment duration in years
- Real-time updates as input values change
- Simple and user-friendly interface

## Technology Stack

- **Frontend**: React
- **Styling**: (Add your styling tools, e.g., CSS, Sass, etc.)
- **State Management**: React Hooks

抱歉，下面是从“2. Install dependencies”开始的`.md`文件的完整Markdown代码，便于你一次性复制：

```md
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-compound-calculator.git
   cd react-compound-calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

4. For production build:

   To create a production build, run:

   ```bash
   npm run build
   ```

   This will create an optimized build in the `build/` directory, ready for deployment.

## Usage

1. Open your browser and go to `http://localhost:3000` after starting the development server.
2. Input the following data:
   - **Principal**: The initial amount you plan to invest.
   - **Annual Interest Rate**: The interest rate of your investment in percentage.
   - **Compounding Frequency**: Choose how often the interest compounds (e.g., annually, quarterly, monthly).
   - **Investment Duration**: The number of years you plan to invest.
3. The calculator will automatically compute the total balance and interest earned over the specified period.

## Formula

The compound interest is calculated using the following formula:

\[
A = P \left(1 + \frac{r}{n}\right)^{nt}
\]

Where:

- `A` = the future value of the investment/loan, including interest
- `P` = the principal investment amount (the initial deposit or loan amount)
- `r` = the annual interest rate (decimal)
- `n` = the number of times that interest is compounded per year
- `t` = the number of years the money is invested or borrowed for

## Example

For example, if you invest $1000 at an annual interest rate of 5%, compounded monthly, for 10 years, the formula would be:

\[
A = 1000 \left(1 + \frac{0.05}{12}\right)^{12 \times 10}
\]

This would give a total balance of approximately $1647.01 after 10 years.

## Contributing

Contributions are welcome! Feel free to open issues, submit pull requests, or suggest new features.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
```
