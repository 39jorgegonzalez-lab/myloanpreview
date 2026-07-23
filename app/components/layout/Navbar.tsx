"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigationLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Calculators",
    href: "/#calculators",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  function closeMobileMenu(): void {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-20 items-center justify-between gap-4 py-3">
          {/* LOGO */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex min-w-0 items-center gap-3"
            aria-label="MYLOANPREVIEW home"
          >
            <Image
              src="/logo.png"
              alt=""
              width={80}
              height={80}
              priority
              className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
            />

            <span className="truncate text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
              MY LOAN PREVIEW
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-2 lg:flex"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/learning-center"
              className="ml-2 rounded-xl border-2 border-blue-700 bg-blue-700 px-5 py-3 font-bold text-white shadow-sm transition hover:border-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Learning Center
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setMobileOpen((current) => !current)
            }
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 lg:hidden"
          >
            {mobileOpen ? (
              <X
                className="h-6 w-6"
                aria-hidden="true"
              />
            ) : (
              <Menu
                className="h-6 w-6"
                aria-hidden="true"
              />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}

        {mobileOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-slate-200 pb-5 pt-4 lg:hidden"
          >
            <div className="grid gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-3 font-semibold text-slate-800 transition hover:bg-slate-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/learning-center"
                onClick={closeMobileMenu}
                className="mt-2 rounded-xl border-2 border-blue-700 bg-blue-700 px-4 py-3 text-center font-bold text-white shadow-sm transition hover:border-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Visit the Learning Center
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}