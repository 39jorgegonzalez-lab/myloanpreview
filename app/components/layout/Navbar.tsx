"use client";

import Image from "next/image";

import Link from "next/link";
import { Calculator, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">

          {/* LOGO */}

          <a
  href="/"
  className="flex items-center gap-3"
>
  <img
    src="/logo.png"
    alt="MYLOANPREVIEW Logo"
    className="w-22 h-22 object-contain"
  />

  <span className="text-black text-3xl font-bold tracking-tight">
    MY LOAN PREVIEW
  </span>
</a>

          {/* NAVIGATION */}

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-m font-semibold">

            <a href="/" className="text-blue-700 hover:underline">
              Home
            </a>

            <a
              href="/auto-loan-calculator"
              className="text-blue-700 hover:underline"
            >
              Auto Loan Calculator
            </a>

            <a
              href="/personal-loan-calculator"
              className="text-blue-700 hover:underline"
            >
              Personal Loan Calculator
            </a>

            <a
              href="/mortgage-calculator"
              className="text-blue-700 hover:underline"
            >
              Mortgage Calculator
            </a>

            <a
              href="/about"
              className="text-blue-700 hover:underline"
            >
              About
            </a>

          </nav>


          {/* CTA BUTTON */}

         </div>

      </header>
  );
}