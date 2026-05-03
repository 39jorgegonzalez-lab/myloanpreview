"use client";

import { useMemo, useState } from "react";

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(Number.isFinite(value) ? value : 0);
}

function formatDate(monthsFromNow) {
  const date = new Date();
  date.setMonth(date.getMonth() + monthsFromNow);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long"
  });
}

function calculateLoan({ amount, rate, years, extraPayment }) {
  const principal = Number(amount);
  const annualRate = Number(rate);
  const months = Number(years) * 12;
  const extra = Number(extraPayment);

  if (principal <= 0 || months <= 0 || annualRate < 0) {
    return null;
  }

  const monthlyRate = annualRate / 100 / 12;

  let monthlyPayment;

  if (monthlyRate === 0) {
    monthlyPayment = principal / months;
  } else {
    monthlyPayment =
      principal *
      (monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
  }

  let balance = principal;
  let totalInterest = 0;
  let totalPrincipal = 0;
  let schedule = [];
  let month = 0;

  while (balance > 0.01 && month < 1000) {
    month += 1;

    const interestPayment = balance * monthlyRate;
    let principalPayment = monthlyPayment - interestPayment + extra;

    if (principalPayment > balance) {
      principalPayment = balance;
    }

    const actualPayment = principalPayment + interestPayment;

    balance -= principalPayment;
    totalInterest += interestPayment;
    totalPrincipal += principalPayment;

    schedule.push({
      month,
      payment: actualPayment,
      principal: principalPayment,
      interest: interestPayment,
      balance: Math.max(balance, 0)
    });
  }

  return {
    monthlyPayment,
    totalInterest,
    totalPaid: totalPrincipal + totalInterest,
    payoffMonths: schedule.length,
    payoffDate: formatDate(schedule.length),
    schedule
  };
}

export default function Home() {
  const [amount, setAmount] = useState(25000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(5);
  const [extraPayment, setExtraPayment] = useState(0);

  const result = useMemo(() => {
    return calculateLoan({ amount, rate, years, extraPayment });
  }, [amount, rate, years, extraPayment]);

  const principalPercent = result
    ? (Number(amount) / result.totalPaid) * 100
    : 0;

  const interestPercent = result
    ? (result.totalInterest / result.totalPaid) * 100
    : 0;

  return (
    <main className="page">
    <nav className="card" style={{ marginBottom: "24px" }}>
  <strong>MyLoanPreview Tools</strong>
  <div style={{ marginTop: "12px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
    <a href="/" style={{ fontWeight: "700" }}>Loan Calculator</a>
    <a href="/auto-loan-calculator" style={{ fontWeight: "700" }}>Auto Loan Calculator</a>
  </div>
</nav>
      <section className="hero">
        <h1>Loan Calculator</h1>
        <p>
          Preview your monthly payment, total interest, payoff date, and full
          amortization schedule before you commit to a loan.
        </p>
      </section>

      <section className="calculator-grid">
        <div className="card">
          <h2>Enter Loan Details</h2>

          <div className="form-group">
            <label>Loan Amount</label>
            <input
              type="number"
              value={amount}
              min="0"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Annual Interest Rate (%)</label>
            <input
              type="number"
              value={rate}
              min="0"
              step="0.01"
              onChange={(e) => setRate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Loan Term</label>
            <select value={years} onChange={(e) => setYears(e.target.value)}>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
              <option value="5">5 years</option>
              <option value="6">6 years</option>
              <option value="7">7 years</option>
              <option value="10">10 years</option>
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="30">30 years</option>
            </select>
          </div>

          <div className="form-group">
            <label>Extra Monthly Payment</label>
            <input
              type="number"
              value={extraPayment}
              min="0"
              onChange={(e) => setExtraPayment(e.target.value)}
            />
          </div>
        </div>

        <div className="card">
          <h2>Your Loan Preview</h2>

          {result && (
            <>
              <div className="results">
                <div className="result-box highlight">
                  <span>Monthly Payment</span>
                  <strong>{formatMoney(result.monthlyPayment)}</strong>
                </div>

                <div className="result-box">
                  <span>Total Interest</span>
                  <strong>{formatMoney(result.totalInterest)}</strong>
                </div>

                <div className="result-box">
                  <span>Total Paid</span>
                  <strong>{formatMoney(result.totalPaid)}</strong>
                </div>

                <div className="result-box">
                  <span>Payoff Date</span>
                  <strong>{result.payoffDate}</strong>
                </div>
              </div>

              <div className="bar-wrap">
                <div className="bar-label">
                  <span>Loan Cost Breakdown</span>
                  <span>{formatMoney(result.totalPaid)}</span>
                </div>

                <div className="bar">
                  <div
                    className="principal-bar"
                    style={{ width: `${principalPercent}%` }}
                  />
                  <div
                    className="interest-bar"
                    style={{ width: `${interestPercent}%` }}
                  />
                </div>

                <div className="legend">
                  <span className="principal">Principal</span>
                  <span className="interest">Interest</span>
                </div>
              </div>

              <div className="cta">
                <p>
                  This preview gives you a clearer idea of what the loan may
                  cost before applying.
                </p>
                <button type="button">Compare Loan Options</button>
              </div>
            </>
          )}
        </div>
      </section>

      {result && (
        <section className="card table-card">
          <h2>Amortization Schedule</h2>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Payment</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Remaining Balance</th>
              </tr>
            </thead>
            <tbody>
              {result.schedule.slice(0, 360).map((row) => (
                <tr key={row.month}>
                  <td>{row.month}</td>
                  <td>{formatMoney(row.payment)}</td>
                  <td>{formatMoney(row.principal)}</td>
                  <td>{formatMoney(row.interest)}</td>
                  <td>{formatMoney(row.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      <p className="footer-note">
        This calculator is for educational estimates only. Actual loan terms,
        interest rates, fees, and payments may vary by lender.
      </p>
    </main>
  );
}
