import React from 'react';

// We now build our Navbar component.

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed top-0 w-full z-[9999]">
      {/* Keepin the contents of the navbar centered, responsive, and clean across sizes, we now open up the divs that will enable that. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Next div is the Outer Container & begins to hold the elements, it will have a flex on it */}

        <div className="flex justify-between items-center h-16">
          {/* MpatiQ's Logo or other brand insignia */}
          <div className="flex-shrink-0">
            {/* Placing MpatiQ's lOGO or other brand insignia here */}

            {/* Another div that will hold both an image and a span */}
            <div className="flex items-center space-x-2">
              <img
                src="/MpatiQ_Emblem.svg"
                alt="MpatiQ Logo"
                className="h-8 w-8"
              />
              <span className="text-xl text-indigo-700 font-semibold tracking-tight">
                MpatiQ
              </span>
            </div>
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
      </div>
    </nav>
  );
}
