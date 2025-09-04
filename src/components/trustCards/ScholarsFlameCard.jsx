// Scholar's Flame Card

export default function ScholarsFlameCard() {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
      {/* Scoped Div */}
      <div className="flex flex-wrap items-baseline gap-2 mb-2">
        <h3 className=" text-xl text-gray-900 font-semibold mb-2">
          Scholar's Flame{' '}
        </h3>
        <span className="text-xs text-white bg-gray-700 px-2 py-0.5 rounded-full -translate-y-[1px]">
          Self-Made
        </span>
        <span className="text-xs text-white bg-gray-700 px-2 py-0.5 rounded-full -translate-y-[1px]">
          Inventor
        </span>
        <p className="text-gray-700 text-base mb-2">
          In a quiet corner of Ebonyi State, Zed has spent over 5,000 logged
          hours self-studying electrical engineering and applying it into
          propulsion inventions. He made his first export in August and
          continues forward.{' '}
        </p>
        <p className="text-sm text-gray-500">
          MpatiQ recognizes <em>Learning/Teaching Honor</em>,{' '}
          <em>Consistency Over Time</em>.
        </p>
      </div>
    </div>
  );
}
