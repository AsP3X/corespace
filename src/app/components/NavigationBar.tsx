"use client";

import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-16 w-full items-center bg-white">
      <span className="ml-6 text-2xl font-bold text-black">CoreSpace</span>
      <div className="flex flex-grow items-center justify-center">
        <Link className="mr-4 text-lg font-bold text-black" href="/">
          Home
        </Link>
        <Link className="mr-4 text-lg font-bold text-black" href="/about">
          About
        </Link>
        <Link className="mr-4 text-lg font-bold text-black" href="/contact">
          Contact
        </Link>
      </div>
      <div className="mr-6">
        <button className="flex items-center text-lg font-bold text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      </div>
      <div className="mr-6 ml-auto">
        <button className="mr-4 text-lg font-bold text-black">Login</button>
        <button className="rounded-md bg-black px-4 py-2 text-lg font-bold text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
}
