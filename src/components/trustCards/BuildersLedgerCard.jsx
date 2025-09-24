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
          <Badge category="structural" variant="primary">
            Builder
          </Badge>

          {/* Badge Component~ Steward */}
          <Badge category="structural" variant="secondary">
            Steward
          </Badge>
        </div>
        <p className="text-gray-700 text-base mb-2">
          A tool delivering weather alerts and coordinating harvest transport
          for farmers — built by a founder in Iowa, optimized for rural
          networks, now serves over 40 communities.
        </p>
        <p className="text-sm text-gray-500">
          MpatiQ recognizes <em>Service Diligence</em>,{' '}
          <em>Community Integrity</em>.
        </p>
      </div>
    );
}
