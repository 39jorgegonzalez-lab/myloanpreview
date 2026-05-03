"use client";

import { useMemo, useState } from "react";

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(Number.isFinite(value) ? value : 0);
}

function calculateAutoLoan({
  vehiclePrice,
  downPayment,
  tradeIn,
  salesTax,
  interestRate,
  termMonths
}) {
  const price = Number(vehiclePrice);
  const down = Number(downPayment);
  const trade = Number(tradeIn);
  const taxRate = Number(salesTax) / 100;
  const annualRate = Number(interestRate) / 100;
  const months = Number(termMonths);

  const taxableAmount = Math.max(price - trade, 0);
  const tax = taxableAmount * taxRate;
  const loanAmount = Math.max(price + tax - down - trade, 0);
  const monthlyRate = annualRate / 12;

  let monthlyPayment = 0;

  if (loanAmount > 0 && months > 0) {
    if (monthlyRate === 0) {
      monthlyPayment = loanAmount / months;
    } else {
      monthlyPayment =
        loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }
  }

  const totalPaid = monthlyPayment * months;
  const totalInterest = totalPaid - loanAmount;

  return {
    tax,
    loanAmount,
    monthlyPayment,
    totalInterest,
    totalPaid
  };
}

export default function AutoLoanCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(30000);
  const [downPayment, setDownPayment] = useState(3000);
  const [tradeIn, setTradeIn] = useState(0);
  const [salesTax, setSalesTax] = useState(7);
  const [interestRate, setInterestRate] = useState(7.5);
  const [termMonths, setTermMonths] = useState(60);

  const result = useMemo(() => {
    return calculateAutoLoan({
      vehiclePrice,
      downPayment,
      tradeIn,
      salesTax,
      interestRate,
      termMonths
    });
  }, [vehiclePrice, downPayment, tradeIn, salesTax, interestRate, termMonths]);

  return (
    <main className="page">
      <section className="hero">
        <h1>Auto Loan Calculator</h1>
        <p>
          Estimate your car payment, total interest, sales tax, and total loan
          cost before financing a vehicle.
        </p>
      </section>

      <section className="calculator-grid">
        <div className="card">
          <h2>Enter Vehicle Details</h2>

          <div className="form-group">
            <label>Vehicle Price</label>
            <input
              type="number"
              value={vehiclePrice}
              onChange={(e) => setVehiclePrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Down Payment</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Trade-In Value</label>
            <input
              type="number"
              value={tradeIn}
              onChange={(e) => setTradeIn(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Sales Tax (%)</label>
            <input
              type="number"
              step="0.01"
              value={salesTax}
              onChange={(e) => setSalesTax(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Interest Rate (%)</label>
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Loan Term</label>
            <select
              value={termMonths}
              onChange={(e) => setTermMonths(e.target.value)}
            >
              <option value="24">24 months</option>
              <option value="36">36 months</option>
              <option value="48">48 months</option>
              <option value="60">60 months</option>
              <option value="72">72 months</option>
              <option value="84">84 months</option>
            </select>
          </div>
        </div>

        <div className="card">
          <h2>Your Auto Loan Preview</h2>

          <div className="results">
            <div className="result-box highlight">
              <span>Monthly Payment</span>
              <strong>{money(result.monthlyPayment)}</strong>
            </div>

            <div className="result-box">
              <span>Loan Amount</span>
              <strong>{money(result.loanAmount)}</strong>
            </div>

            <div className="result-box">
              <span>Estimated Sales Tax</span>
              <strong>{money(result.tax)}</strong>
            </div>

            <div className="result-box">
              <span>Total Interest</span>
              <strong>{money(result.totalInterest)}</strong>
            </div>

            <div className="result-box">
              <span>Total Paid</span>
              <strong>{money(result.totalPaid)}</strong>
            </div>
          </div>

          <div className="cta">
            <p>
              Use this estimate before visiting a dealership or applying for car
              financing.
            </p>
            <button type="button">Compare Auto Loan Options</button>
          </div>
        </div>
      </section>

      <p className="footer-note">
        This calculator provides educational estimates only. Actual auto loan
        payments may vary based on lender fees, credit profile, taxes, and
        vehicle-specific costs.
      </p>
    </main>
  );
}
