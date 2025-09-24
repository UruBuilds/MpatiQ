// Scholar's Flame Card

// Importing the Badge component that has the universal Badge mapping

import Badge from '../Badge';

export default function ScholarsFlameCard() {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
      {/* Scoped Div */}
      <div className="flex flex-wrap items-baseline gap-2 mb-2">
        <h3 className=" text-xl text-gray-900 font-semibold mb-2">
          Scholar's Flame{' '}
        </h3>

        {/* Badge Component = Structural */}

        <Badge category="structural" variant="primary">
          Self-Made
        </Badge>

        {/* Badge Component 2 = Structural */}

        <Badge category="structural" variant="secondary">
          Inventor
        </Badge>

        <p className="text-gray-700 text-base mb-2">
          Zed has logged over 5,000 hours self-studying electrical engineering
          and building propulsion inventions — making his first export in
          August, and still moving forward.{' '}
        </p>
        <p className="text-sm text-gray-500">
          MpatiQ recognizes <em>Learning/Teaching Honor</em>,{' '}
          <em>Consistency Over Time</em>.
        </p>
      </div>
    </div>
  );
}
