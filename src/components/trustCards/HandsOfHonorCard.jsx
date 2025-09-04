// src/components/trust/HandsOfHonorCard.jsx

export default function HandsOfHonorCard() {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
        Hands of Honor
        {/* Adding in a span class to show verified metatags */}
        <span className="text-xs text-white bg-gray-700 px-2 py-0.5 rounded-full">
          {' '}
          5yr Track{' '}
        </span>
      </h3>

      {/*  */}
      <p className="text-gray-700 text-base mb-2">
        Ms. J, A Lyft driver in Macomb, IL. has completed over 21,000 rides
        since 2020 till now with perfect punctuality.
      </p>
      <p className="text-sm text-gray-500">
        MpatiQ recognizes <em>Service Diligence</em>,{' '}
        <em>Consistency Over Time.</em>
      </p>
    </div>
  );
}
