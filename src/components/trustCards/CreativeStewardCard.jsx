// Creative Steward

export default function CreativeStewardCard() {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Creative Steward
        </h3>
        <span className="text-xs text-white bg-indigo-600 px-2 py-0.5 rounded-full -translate-y-0.5">
          Collective-led
        </span>
        {/* Span2~ Badge 2 */}
        <span className="text-xs text-white bg-gray-800 px-2 py-0.5 rounded-full -translate-y-0.5">
          Community
        </span>
      </div>
      <p className="text-gray-700 text-base mb-2">
        In East London, a creative collective has over the years become a
        sanctuary of expression-hosting free Thursday gatherings, sharing
        members poems and pieces, and growing a new creative canon.
      </p>
      <p className="text-sm text-gray-500">
        MpatiQ recognizes <em>Creative Stewardship</em>,{' '}
        <em>Community Integrity</em> and <em>Presence in Vulnerable Roles</em>.
      </p>
    </div>
  );
}
