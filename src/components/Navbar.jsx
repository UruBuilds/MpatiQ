import { div } from 'framer-motion/client';
import React, { useState } from 'react';

// We now build our Navbar component.

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm fixed top-0 w-full z-[9999]">
      {/* Keepin the contents of the navbar centered, responsive, and clean across sizes, we now open up the divs that will enable that. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Next div is the Outer Container & begins to hold the elements, it will have a flex on it */}

        <div className="flex justify-between items-center h-16">
          {/* MpatiQ's Logo or other brand insignia */}
          <div className="flex-shrink-0">
            {/* Placing MpatiQ's lOGO or other brand insignia here */}

            {/* An anchor tag that will hold both an image (MpatiQ's log) and a span with our name */}
            <a href="#top" className="flex items-center space-x-2">
              <img
                src="/MpatiQ_Emblem.svg"
                alt="MpatiQ Logo"
                className="h-8 w-8"
              />
              <span className="text-xl text-indigo-700 font-semibold tracking-tight">
                MpatiQ
              </span>
            </a>
          </div>

          {/* Sitting beside the logo we introduce our hamburger bar and make it appearable only on md:hidden */}

          {/* MOBILE MENU BUTTON (HAMBURGER) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {/* MpatiQ's Hamburger Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links {perhaps for later} */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* I'm curious how the `hidden`'s functionality works here. */}
            {/* Links will go here */}
            <a
              href="#trust-preview"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 px-4 transition"
            >
              Trust in Motion
            </a>
            {/* Trust Matrix nav link */}
            <a
              href="#trust-matrix"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 px-4 transition"
            >
              Trust Matrix
            </a>

            {/* Anchor tag for How it works */}
            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 px-4 transition"
            >
              How It Works
            </a>

            {/* CTA Button */}
            <a
              href="#get-started"
              className="ml-6 inline-block text-sm font-semibold bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-500 transition shadow-md"
            >
              Join the Waitlist
            </a>

            {/* Nav links end with closing div below. */}
          </div>
        </div>
        {/* DIRECTLY BELOW THE CLOSING </DIV> OF OUR MAIN FLEX ROW (flex justify-between items-center h-16), but still within <nav> we add our conditional logic for when the IsOpen state is activated */}
        {/*_______________  */}
        {/* ADD CONDITIONAL WRAPPER */}
        {isOpen && (
          <div className="md:hidden w-full bg-white shadow-lg border-t px-4 pt-2 pb-3 space-y-2">
            {/* Mobile links will go here */}

            {/* _______ */}

            {/* TRUST IN MOTION: MOBILE */}
            <a
              href="#trust-preview"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              Trust in Motion
            </a>

            {/* TRUST MATRIX: MOBILE */}
            <a
              href="#trust-matrix"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              Trust Matrix
            </a>

            {/* HOW IT WORKS: MOBILE */}
            <a
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              How It Works
            </a>

            {/* CTA: MOBILE */}
            <a
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-3 text-sm font-semibold bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-500 transition shadow-md"
            >
              Join the Waitlist
            </a>
          </div>
        )}

        {/* _________________ */}
      </div>
    </nav>
  );
}
