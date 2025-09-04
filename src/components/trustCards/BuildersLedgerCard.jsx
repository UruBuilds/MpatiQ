export default function BuildersLedgerCard() {
    return (
      <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Builder's Ledger
          </h3>
          <span className="text-xs text-white bg-blue-700 px-2 py-0.5 rounded-full -translate-y-0.5">
            Builder
          </span>
          {/* Span2~ Badge 2 */}
          <span className="text-xs text-white bg-gray-800 px-2 py-0.5 rounded-full -translate-y-0.5">
            Steward
          </span>
        </div>
        <p className="text-gray-700 text-base mb-2">
          A Ghanaian founder based in Kumasi has created a tool that helps rural
          farmers access real-time weather alerts and coordinate shared
          transport for harvests - all optimized for low-bandwidth areas. The
          system now supports over 40 villages.
        </p>
        <p className="text-sm text-gray-500">
          MpatiQ recognizes <em>Service Diligence</em>,{' '}
          <em>Community Integrity</em>.
        </p>
      </div>
    );
}
