// src/components/Footer.jsx
// Building the footer out

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
      {/* Entry div to mask all */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left side: Logo + text */}
        <div className="flex items-center space-x-2">
          <img src="/MpatiQ_Emblem.svg" alt="MpatiQ Logo" className="h-6 w-6" />
          <span className="text-sm text-gray-600">
            © 2025 MpatiQ, Inc.
            </span>
          
          
        </div>

        {/* Right side will come next */}
        <div className="flex items-center">
            {/* Placeholder for navlinks or our social icons  */}
            <a
             href="#get-started"
             className="text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg px-2.5 py-1 hover:bg-indigo-50 transition"
             
             >
                Join the Waitlist
            </a>

        </div>
      </div>
    </footer>
  );
}
