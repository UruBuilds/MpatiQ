// Witnessed Growth Card

// Importing the Badge component that has the universal Badge mapping

import Badge from '../Badge';

export default function WitnessedGrowthCard() {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 mb-6 shadow-md">
      <h3 className=" text-xl font-semibold mb-2 text-gray-900 flex items-center gap-2">
        Witnessed Growth
        {/* Badge: Emotive */}
        <Badge category="emotive" variant="primary">
          Dignity
        </Badge>
      </h3>
      <p className="mb-2 text-base text-gray-700">
        Carlos returned and rebuilt trust: 1,400 on-time deliveries over 18
        months, after two suspensions for missed orders.
      </p>
      <p className="text-sm text-gray-500">
        MpatiQ recognizes <em>Redemptive Growth</em>,{' '}
        <em>Service Diligence,</em>
        <em>Consistency Over Time</em>.{' '}
      </p>
    </div>
  );
}
