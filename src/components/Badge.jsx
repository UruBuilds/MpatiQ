import React from 'react';
import { badgeColors } from '../styles/badgeColors';

// We designed our token map to allow our component here assign and map colors automatically.

export default function Badge({ category, variant = 'primary', children }) {
  const classes = badgeColors[category]?.[variant] || '';
  return (
    <span className={`px-3 py-1 text-sm rounded-full font-medium ${classes}`}>
      {children}
    </span>
  );
}
