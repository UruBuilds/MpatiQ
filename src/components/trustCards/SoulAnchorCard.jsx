// Soul Anchor Card

// Importing the Badge component that has the universal Badge mapping
import Badge from '../Badge';

export default function SoulAnchorCard() {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="text-xl font-semibold text-gray-900">Soul Anchor</h3>
        {/* Tags */}
        {/* Badge Component 1 ~ Emotive  */}
        <Badge category="emotive" variant="primary">
          Devotion
        </Badge>

        {/* Badge Component 2 ~ Emotive */}

        <Badge category="emotive" variant="secondary">
          Grief Transformed
        </Badge>
      </div>
      {/* Core P tag for Soul Anchor */}
      <p className="text-gray-700 text-base mb-2">
        After losing her daughter, Adaora began leaving flowers for new mothers
        at the hospital — and has kept this vigil quietly for 9 years.
      </p>
      {/* Domain recognition */}
      <p className="text-sm text-gray-500">
        MpatiQ recognizes <em>Presence in Vulnerable Roles</em>,{' '}
        <em>Emotional Reliability</em>, <em>Consistency Over Time</em>.
      </p>
    </div>
  );
}
