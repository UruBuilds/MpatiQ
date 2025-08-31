import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TrustPreview = () => {
  // Adding Base State Logic

  const [showMore, setShowMore] = useState(false);
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-white" id="trust-preview">
      <div className="max-w-5xl mx-auto">
        {/* within the div, I have a h2 */}

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trust Preview
        </h2>
        {/* Core p tag */}
        <p className="text-lg text-gray-700 mb-8">
          A glimpse into the kinds of trust MpatiQ can reflect and reveal.
          {/* <span className="italic text-gray-500"> Yours awaits.</span> */}
         
        </p>
        <p className="text-gray-500 italic text-sm text-center mt-1 mb-10">
          Yours awaits.
        </p>

        {/* Our Cards or visual elements will go here. */}
        {/* We now build our first preview block, this will be our visual storytelling unit that reflects a sample trust signal or transformation. */}
        <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
            Hands of Honor
            {/* Adding in a span class to show verified metatags */}
            <span className="text-xs text-white bg-gray-700 px-2 py-0.5 rounded-full">
              {' '}
              5yr Track{' '}
            </span>
          </h3>

          {/*  */}
          <p className="text-gray-700 text-base mb-2">
            Ms. J, A Lyft driver in Macomb, IL. has completed over 21,000 rides
            since 2020 till now with perfect punctuality.
          </p>
          <p className="text-sm text-gray-500">
            MpatiQ recognizes <em>Service Diligence</em>,{' '}
            <em>Consistency Over Time.</em>
          </p>
        </div>
        {/* Block 2 */}
        {/* Aminah */}
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
            families, covered coworkers' emergencies without being asked, and
            never missed a single handoff in 3,200 shifts.
          </p>

          <p className="text-sm text-gray-500">
            MpatiQ recognizes <em>Emotional Reliability</em>,{' '}
            <em>Presence in Vulnerable Roles</em>,{' '}
            <em>Consistency Over Time</em>.
          </p>
        </div>

        {/* Block 3 */}
        {/* Carlos */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6 shadow-md">
          <h3 className=" text-xl font-semibold mb-2 text-gray-900 flex items-center gap-2">
            Witnessed Growth
            <span className="text-xs px-2 bg-gray-700 text-white py-0.5 rounded-full">
              Dignity
            </span>
          </h3>
          <p className="mb-2 text-base text-gray-700">
            After two account suspensions for missed deliveries, Carlos
            returned. Over the next 18 months, he rebuilt trust-delivering 1,400
            orders with verified on-time records.
          </p>
          <p className="text-sm text-gray-500">
            MpatiQ recognizes <em>Redemptive Growth</em>,{' '}
            <em>Service Diligence,</em>
            <em>Consistency Over Time</em>.{' '}
          </p>
        </div>

        {/* Scholar's Flame */}
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
        {/* Okay, right after here we add JSX that allows to 'Show More.' We're using hooks to alter state */}
        {/* Toggle Button */}
        <div className="flex justify-center mt-4">
          <button
            type="button"
            aria-expanded={showMore}
            onClick={() => setShowMore(!showMore)}
            className="cursor-pointer text-center py-4 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {/* Replacing my static test with conditional span */}
            <span>
              {showMore
                ? 'MpatiQ reveals fewer stories'
                : 'MpatiQ recognizes more stories of trust'}
            </span>
            {/* Right under the span I will add our visual cue that will rotate with the state */}
            <motion.span
              animate={{ rotate: showMore ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        </div>

        {/* Opening up the Show More on Click range */}
        {/* I'll wrap this in a Framer Motion Container */}
        <AnimatePresence>
          {/*  <div className="mt-8 space-y-6"> WE GIVE THESE DUTIES COMP. To A Motion.div*/}
          {showMore && (
            <motion.div
              key="trust-section"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 space-y-6 overflow-hidden"
            >
              {/* Blocks 5-8 */}
              {/* Creative Steward */}
              <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Creative Steward
                  </h3>
                  <span className="text-xs text-white bg-indigo-600 px-2 py-0.5 rounded-full -translate-y-0.5">
                    Collective-led
                  </span>
                  {/* Span2~ Badge 2 */}
                  <span className="text-xs text-white bg-gray-800 px-2 py-0.5 rounded-full -translate-y-0.5">
                    Community
                  </span>
                </div>
                <p className="text-gray-700 text-base mb-2">
                  In East London, a creative collective has over the years
                  become a sanctuary of expression-hosting free Thursday
                  gatherings, sharing members poems and pieces, and growing a
                  new creative canon.
                </p>
                <p className="text-sm text-gray-500">
                  MpatiQ recognizes <em>Creative Stewardship</em>,{' '}
                  <em>Community Integrity</em> and{' '}
                  <em>Presence in Vulnerable Roles</em>.
                </p>
              </div>
              {/* Block 6 */}
              {/* Builder's Ledger */}

              <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Builder's Ledger
                  </h3>
                  <span className="text-xs text-white bg-blue-700 px-2 py-0.5 rounded-full -translate-y-0.5">
                    Builder
                  </span>
                  {/* Span2~ Badge 2 */}
                  <span className="text-xs text-white bg-gray-800 px-2 py-0.5 rounded-full -translate-y-0.5">
                    Steward
                  </span>
                </div>
                <p className="text-gray-700 text-base mb-2">
                  A Ghanaian founder based in Kumasi has created a tool that
                  helps rural farmers access real-time weather alerts and
                  coordinate shared transport for harvests - all optimized for
                  low-bandwidth areas. The system now supports over 40 villages.
                </p>
                <p className="text-sm text-gray-500">
                  MpatiQ recognizes <em>Service Diligence</em>,{' '}
                  <em>Community Integrity</em>.
                </p>
              </div>
              {/* Block 7 */}
              {/* Mentor's Path */}
              <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mentor's Path
                  </h3>
                  <span className="text-xs text-white bg-red-700 px-2 py-0.5 rounded-full -translate-y-0.5">
                    Legacy
                  </span>
                  {/* Span2~ Badge 2 */}
                  <span className="text-xs text-white bg-gray-800 px-2 py-0.5 rounded-full -translate-y-0.5">
                    Community
                  </span>
                </div>
                <p className="text-gray-700 text-base mb-2">
                  In the Crenshaw area of South LA, a clothing store rooted in
                  legacy mentors youth and provides work for formerly
                  incarcerated community members-offering whole paths with
                  dignity.
                </p>
                <p className="text-sm text-gray-500">
                  MpatiQ recognizes <em>Community Integrity</em>,{' '}
                  <em>Redemptive Growth</em>.
                </p>
              </div>
              {/* Soul Anchor */}
              <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Soul Anchor
                  </h3>
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
                  After losing her daughter, one woman began anonymously leaving
                  flowers for new mothers at the same hospital. She has done
                  this quietly for 9 years.
                </p>
                {/* Domain recognition */}
                <p className="text-sm text-gray-500">
                  MpatiQ recognizes <em>Presence in Vulnerable Roles</em>,{' '}
                  <em>Emotional Reliability</em>, <em>Consistency Over Time</em>
                  .
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TrustPreview;
