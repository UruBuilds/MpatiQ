// src/styles/badgeColors.js

// This file defines the badge color system for MpatiQ
// Categories: Structural, Emotive, Time

export const badgeColors = {
    // structural
  structural: {
    primary: 'bg-blue-600 text-white',
    secondary: 'border border-blue-600 text-blue-600 bg-transparent',
  },
  // emotive
  emotive: {
    primary: 'bg-purple-600 text-white',
    secondary: 'border border-purple-600 text-purple-600 bg-transparent',
  },
//   time
time:{
    primary: 'bg-gray-700 text-white',
    secondary: 'border border-gray-700 text-gray-700 bg-transparent'
}
};

// with this my design tokens are now complete. they will serve as our singular bible and source of truth for badge colors.