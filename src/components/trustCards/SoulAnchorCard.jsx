// Soul Anchor Card

export default function SoulAnchorCard() {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="text-xl font-semibold text-gray-900">Soul Anchor</h3>
        {/* Tags */}
        <span className=" text-xs rounded-full bg-purple-700 py-0.5 px-2 text-white">
          Devotion
        </span>
        <span className=" text-xs rounded-full bg-gray-800 py-0.5 px-2 text-white">
          Grief Transformed
        </span>
      </div>
      {/* Core P tag for Soul Anchor */}
      <p className="text-gray-700 text-base mb-2">
        After losing her daughter, one woman began anonymously leaving flowers
        for new mothers at the same hospital. She has done this quietly for 9
        years.
      </p>
      {/* Domain recognition */}
      <p className="text-sm text-gray-500">
        MpatiQ recognizes <em>Presence in Vulnerable Roles</em>,{' '}
        <em>Emotional Reliability</em>, <em>Consistency Over Time</em>.
      </p>
    </div>
  );
}
