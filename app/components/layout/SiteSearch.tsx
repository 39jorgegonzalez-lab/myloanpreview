"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import { searchSite } from "../../lib/siteSearch";

type SiteSearchProps = {
  open: boolean;
  onClose: () => void;
};

const MAX_RESULTS = 8;
const SEARCH_RESULTS_ID = "site-search-results";

export default function SiteSearch({
  open,
  onClose,
}: SiteSearchProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<
    Array<HTMLAnchorElement | null>
  >([]);

  const results = useMemo(
    () => searchSite(query, MAX_RESULTS),
    [query],
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    setQuery("");
    setActiveIndex(0);

    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(
      () => {
        inputRef.current?.focus();
      },
    );

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (results.length === 0) {
      setActiveIndex(0);
      return;
    }

    if (activeIndex >= results.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, results.length]);

  function handleInputKeyDown(
    event: KeyboardEvent<HTMLInputElement>,
  ): void {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (results.length > 0) {
        setActiveIndex(
          (current) => (current + 1) % results.length,
        );
      }

      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (results.length > 0) {
        setActiveIndex(
          (current) =>
            (current - 1 + results.length) %
            results.length,
        );
      }

      return;
    }

    if (event.key === "Enter" && results.length > 0) {
      event.preventDefault();
      resultRefs.current[activeIndex]?.click();
    }
  }

  function handleDialogKeyDown(
    event: KeyboardEvent<HTMLDivElement>,
  ): void {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements =
      dialogRef.current?.querySelectorAll<HTMLElement>(
        [
          "a[href]",
          "button:not([disabled])",
          "input:not([disabled])",
          '[tabindex]:not([tabindex="-1"])',
        ].join(","),
      );

    if (!focusableElements?.length) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement =
      focusableElements[focusableElements.length - 1];

    if (
      event.shiftKey &&
      document.activeElement === firstElement
    ) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (
      !event.shiftKey &&
      document.activeElement === lastElement
    ) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  if (!open) {
    return null;
  }

  const activeResult = results[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-950/70 px-4 py-6 sm:items-center"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-search-title"
        aria-describedby="site-search-description"
        onKeyDown={handleDialogKeyDown}
        className="flex max-h-[calc(100vh-3rem)] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border-2 border-slate-300 bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-5 sm:px-7">
          <div>
            <h2
              id="site-search-title"
              className="text-2xl font-bold text-slate-950"
            >
              Search MYLOANPREVIEW
            </h2>

            <p
              id="site-search-description"
              className="mt-1 text-sm leading-6 text-slate-600"
            >
              Find calculators, loan guides, FAQs, and
              important site information.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <X
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="border-b border-slate-200 px-5 py-5 sm:px-7">
          <label
            htmlFor="site-search-input"
            className="mb-2 block font-bold text-slate-900"
          >
            Search calculators and guides
          </label>

          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
              aria-hidden="true"
            />

            <input
              ref={inputRef}
              id="site-search-input"
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={handleInputKeyDown}
              placeholder="Try “car payment,” “APR,” or “credit score”"
              autoComplete="off"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded="true"
              aria-controls={SEARCH_RESULTS_ID}
              aria-activedescendant={
                activeResult
                  ? `site-search-result-${activeResult.id}`
                  : undefined
              }
              className="h-14 w-full rounded-xl border-2 border-slate-300 bg-white py-3 pl-12 pr-14 text-base text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-blue-700 focus:ring-2 focus:ring-blue-200"
            />

            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveIndex(0);
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <X
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            )}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-7">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-bold text-slate-950">
              {query.trim()
                ? "Search results"
                : "Popular tools and guides"}
            </h3>

            <p
              aria-live="polite"
              className="text-sm font-semibold text-slate-600"
            >
              {results.length}{" "}
              {results.length === 1
                ? "result"
                : "results"}
            </p>
          </div>

          {results.length === 0 ? (
            <div
              role="status"
              className="rounded-2xl border-2 border-slate-300 bg-slate-50 p-7 text-center"
            >
              <p className="text-lg font-bold text-slate-950">
                No results found
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                Try a broader term such as loan payment,
                APR, mortgage, car, credit score, or
                affordability.
              </p>
            </div>
          ) : (
            <ul
              id={SEARCH_RESULTS_ID}
              role="listbox"
              aria-label="Site search results"
              className="space-y-3"
            >
              {results.map((result, index) => {
                const isActive =
                  index === activeIndex;

                return (
                  <li key={result.id}>
                    <Link
                      ref={(element) => {
                        resultRefs.current[index] =
                          element;
                      }}
                      id={`site-search-result-${result.id}`}
                      href={result.href}
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() =>
                        setActiveIndex(index)
                      }
                      onFocus={() =>
                        setActiveIndex(index)
                      }
                      onClick={onClose}
                      className={`block rounded-2xl border-2 p-4 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                        isActive
                          ? "border-blue-700 bg-blue-50 shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h4 className="font-bold text-slate-950">
                          {result.title}
                        </h4>

                        <span className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700">
                          {result.category}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {result.description}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 sm:px-7">
          <p>
            <span className="font-bold">
              Keyboard:
            </span>{" "}
            ↑ and ↓ navigate results, Enter opens a
            result, and Escape closes search.
          </p>
        </div>
      </div>
    </div>
  );
}