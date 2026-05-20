"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex justify-center items-center gap-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              className="h-8 w-auto"
              width={112}
              height={27}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <div className="flex flex-row gap-1 justify-center items-center">
              <Link href="#" className="text-sm text-white hover:text-white/70">
                Services
              </Link>
              <Image
                src="/icons/arrow-down.svg"
                alt="arrow"
                className="w-3 h-2"
                width={12}
                height={8}
              />
            </div>

            <div className="flex flex-row gap-1 justify-center items-center">
              <Link href="#" className="text-sm text-white hover:text-white/70">
                Solutions
              </Link>
              <Image
                src="/icons/arrow-down.svg"
                alt="arrow"
                className="w-3 h-2"
                width={12}
                height={8}
              />
            </div>

            <div className="flex flex-row gap-1 justify-center items-center">
              <Link href="#" className="text-sm text-white hover:text-white/70">
                About
              </Link>
              <Image
                src="/icons/arrow-down.svg"
                alt="arrow"
                className="w-3 h-2"
                width={12}
                height={8}
              />
            </div>

            <div className="flex flex-row gap-1 justify-center items-center">
              <Link href="#" className="text-sm text-white hover:text-white/70">
                Help & Guides
              </Link>
              <Image
                src="/icons/arrow-down.svg"
                alt="arrow"
                className="w-3 h-2"
                width={12}
                height={8}
              />
            </div>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            className="px-4 py-2 rounded-md text-white text-sm border hover:bg-white hover:text-primary"
          >
            Track Your Parcel
          </Link>
          <Link
            href="#"
            className="text-sm border px-4 py-2 rounded-md bg-white text-primary hover:bg-transparent hover:border border-white hover:text-white"
          >
            Sign In
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <nav className="flex flex-col gap-3">
            <Link href="#" className="text-base text-gray-700">
              Services
            </Link>
            <Link href="#" className="text-base text-gray-700">
              Solutions
            </Link>
            <Link href="#" className="text-base text-gray-700">
              About
            </Link>
            <Link href="#" className="text-base text-gray-700">
              Help & Guides
            </Link>
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="#"
                style={{ backgroundColor: "var(--primary-color)" }}
                className="px-4 py-2 rounded-full text-white text-sm text-center"
              >
                Track Your Parcel
              </Link>
              <Link
                href="#"
                className="text-sm border px-4 py-2 rounded text-center"
              >
                Sign In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
