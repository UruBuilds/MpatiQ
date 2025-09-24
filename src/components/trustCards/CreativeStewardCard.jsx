// Creative Steward

// Importing the Badge component that has the universal Badge mapping

import Badge from '../Badge';

export default function CreativeStewardCard() {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Creative Steward
        </h3>

        {/* Badge Component = Structural */}

        <Badge category="structural" variant="primary">
          Collective-Led
        </Badge>

        {/* Badge Component 2 = Structural */}

        <Badge category="structural" variant="secondary">
          Community
        </Badge>
      </div>
      <p className="text-gray-700 text-base mb-2">
        In East London, a creative collective has built a sanctuary of
        expression — hosting Thursday gatherings, sharing poems, and growing a
        new creative canon.
      </p>
      <p className="text-sm text-gray-500">
        MpatiQ recognizes <em>Creative Stewardship</em>,{' '}
        <em>Community Integrity</em> and <em>Presence in Vulnerable Roles</em>.
      </p>
    </div>
  );
}
