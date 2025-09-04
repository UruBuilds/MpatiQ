// Care and Custody Card
// Aminah
export default function CareAndCustodyCard() {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="text-xl font-semibold text-gray-900">
          Care and Custody
        </h3>
        {/* Tags */}
        <span className="text-xs text-white bg-gray-700 px-2 py-0.5 rounded-full">
          Peer Endorsed
        </span>
        <span className="text-xs text-white bg-gray-700 px-2 py-0.5 rounded-full">
          Community Endorsed
        </span>
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
