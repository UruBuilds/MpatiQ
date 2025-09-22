// Care and Custody Card
// Aminah

// Importing the Badge component that has the universal Badge mapping

import Badge from "../Badge";

export default function CareAndCustodyCard() {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="text-xl font-semibold text-gray-900">
          Care and Custody
        </h3>
        {/* Badge Component; category= time */}
        <Badge category="structural" variant="primary">
          Peer Endorsed
        </Badge>

        <Badge category="structural" variant="secondary">
          Community Endorsed
        </Badge>
      </div>

      <p className="text-gray-700 text-base mb-2">
        Over the last 9 years in Atlanta, Aminah has worked night shifts in
        pediatric oncology. She's stayed past shifts to sit with grieving
        families, covered coworkers' emergencies without being asked, and never
        missed a single handoff in 3,200 shifts.
      </p>

      <p className="text-sm text-gray-500">
        MpatiQ recognizes <em>Emotional Reliability</em>,{' '}
        <em>Presence in Vulnerable Roles</em>, <em>Consistency Over Time</em>.
      </p>
    </div>
  );
}
