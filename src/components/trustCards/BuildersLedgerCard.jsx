// Importing the Badge component that has the universal Badge mapping

import Badge from "../Badge";
export default function BuildersLedgerCard() {
    return (
      <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Builder's Ledger
          </h3>
          {/* Badge 1 Component */}
          <Badge category= "structural" variant="primary" >
            Builder
          </Badge>

          {/* Badge Component~ Steward */}
          <Badge category= "structural" variant="secondary">
            Steward
          </Badge>
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
