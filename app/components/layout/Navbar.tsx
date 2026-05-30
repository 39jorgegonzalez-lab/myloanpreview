"use client";

import Link from "next/link";
import { Calculator, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
            <Calculator className="h-5 w-5" />
          </div>

          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight text-slate-950">
              MYLOANPREVIEW
            </div>

            <div className="hidden text-xs text-slate-500 sm:block">
              Educational Loan Estimate Tools
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/auto-loan-calculator"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Auto Loans
          </Link>

          <Link
            href="/personal-loan-calculator"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Personal Loans
          </Link>

          <Link
            href="/mortgage-calculator"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Mortgages
          </Link>

          <Link
            href="/credit-score-loan-estimate"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            Credit Estimate
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
          >
            About
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:block">
          <Link
            href="/auto-loan-calculator"
            className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Estimate Payments
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-5">
            <Link
              href="/auto-loan-calculator"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Auto Loans
            </Link>

            <Link
              href="/personal-loan-calculator"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Personal Loans
            </Link>

            <Link
              href="/mortgage-calculator"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Mortgages
            </Link>

            <Link
              href="/credit-score-loan-estimate"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Credit Estimate
            </Link>

            <Link
              href="/about"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              About
            </Link>

            <div className="pt-3">
              <Link
                href="/auto-loan-calculator"
                className="flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Estimate Payments
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}