"use client";

import Image from "next/image";

import Link from "next/link";
import { Calculator, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-start px-4 sm:px-6 lg:px-8">
        
       {/* Logo */}
<Link
  href="/"
  className="flex items-center gap-4 transition-opacity hover:opacity-90"
>
  <img
    src="/logo.png"
    alt="MYLOANPREVIEW Logo"
    className="w-14 h-14 object-contain"
  />

  <div>
    <div className="text-3xl font-extrabold tracking-tight text-slate-950">
      MYLOANPREVIEW
    </div>
  </div>
</Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-4 md:flex ml-0">

<Link
  href="/"
  className="font-bold text-blue-700 hover:text-blue-800 ml-82 mr-8"
>
  Home
</Link>

          <Link
            href="/auto-loan-calculator"
            className="text-sm font-bold text-blue-700 transition hover:text-blue-800"
          >
            Auto Loans
          </Link>

          <Link
            href="/personal-loan-calculator"
            className="text-sm font-bold text-blue-700 transition hover:text-blue-800"
          >
            Personal Loans
          </Link>

          <Link
            href="/mortgage-calculator"
            className="text-sm font-bold text-blue-700 transition hover:text-blue-800"
          >
            Mortgages
          </Link>

          <Link
            href="/credit-score-loan-estimate"
            className="text-sm font-bold text-blue-700 transition hover:text-blue-800"
          >
            Credit Estimate
          </Link>
        </nav>
       
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
          </div>
        </div>
      )}
    </header>
  );
}