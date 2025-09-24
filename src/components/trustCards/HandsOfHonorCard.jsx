// src/components/trust/HandsOfHonorCard.jsx

// Importing the Badge component that has the universal Badge mapping

import Badge from '../Badge';

export default function HandsOfHonorCard() {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
        Hands of Honor
        {/* Badge Component: category ~ time */}
        <Badge category="time" variant="primary">
          {' '}
          5yr Track{' '}
        </Badge>
      </h3>

      {/*  */}
      <p className="text-gray-700 text-base mb-2">
        Ms. J, a Lyft driver, has completed over 21,000 rides — earning a
        reputation for punctuality since 2020.
      </p>
      <p className="text-sm text-gray-500">
        MpatiQ recognizes <em>Service Diligence</em>,{' '}
        <em>Consistency Over Time.</em>
      </p>
    </div>
  );
}
