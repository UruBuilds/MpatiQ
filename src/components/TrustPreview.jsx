import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';

// Trust Component Card Imports
import HandsOfHonorCard from './trustCards/HandsOfHonorCard';
import CareAndCustodyCard from './trustCards/CareAndCustodyCard';
import WitnessedGrowthCard from './trustCards/WitnessedGrowthCard';
import ScholarsFlameCard from './trustCards/ScholarsFlameCard';
import CreativeStewardCard from './trustCards/CreativeStewardCard';
import BuildersLedgerCard from './trustCards/BuildersLedgerCard';
import MentorsPathCard from './trustCards/MentorsPathCard';
import SoulAnchorCard from './trustCards/SoulAnchorCard';

const TrustPreview = () => {
  // Adding Base State Logic

  const [showMore, setShowMore] = useState(false);
  return (
    <section
      className="w-full pt-24 pb-16 px-6 md:px-16 bg-white"
      id="trust-preview"
    >
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

        {/* Block 1~ Hands of Honor Card (Ms.J) */}
        <HandsOfHonorCard />

        {/* Block 2~ Care and Custody Card (Aminah) */}
        <CareAndCustodyCard />

        {/* Block 3~ Witnessed Growth Card (Carlos) */}

        <WitnessedGrowthCard />

        {/* Block 4~ Scholar's Flame (Zed) */}

        {/* Scholar's Flame */}
        <ScholarsFlameCard />

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
              transition={{
                height: { duration: 0.5 },
                opacity: { delay: 0.2, duration: 0.7 },
              }}
              className="mt-8 space-y-6 overflow-hidden"
            >
              {/* Blocks 5-8 */}
              {/* Creative Steward Card~ (East London example) */}
              <CreativeStewardCard />

              {/* Block 6 */}
              {/* Builder's Ledger */}
              <BuildersLedgerCard />

              {/* Block 7 */}
              {/* Mentor's Path */}
              <MentorsPathCard />

              {/* Soul Anchor */}
              <SoulAnchorCard />
            </motion.div>
          )}
        </AnimatePresence>

        {/* The 'Animate Presence' held everything on the Show more sequence~from button on-click actions to the hidden cards */}
        {/* __________________________________________________________________ */}

        {/* Divider: Start of the Trust Matrix Section */}
        {/* Divider: Start of the Trust Matrix Section */}
        {/* Divider: Start of the Trust Matrix Section */}

        <div className="mt-16" id="trust-matrix">
          {/* TRUST MATRIX */}
          {/* TRUST MATRIX */}

          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Trust Domains & Passports
          </h2>
          <p className="text-center text-sm text-gray-600 max-w-xl mx-auto">
            Each Trust Passport draws strength from the core Domains we
            recognize. Through them, MpatiQ structures dignity, reliability, and
            honor into living digital representations.
          </p>
          {/* Experiment incoming */}
          {/* Two-Column Grid */}
          <div className="mt-10 max-w-5xl mx-auto">
            {/* Two-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Domains */}
              {/* Left Column: Domains */}
              {/* Left Column: Domains */}

              {/* I'm experimenting with a wrap to visually segment TD from TP */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm relative overflow-hidden">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Trust Domains
                  </h3>
                  {/* Shimmer line */}
                  <div className=" md:flex justify-center mt-1">
                    <div className="w-[100%] h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse" />
                  </div>
                  {/* Icon and Domain lists */}
                  <div className="mt-4 space-y-4 text-left max-w-md mx-auto divide-y divide-gray-100">
                    {/* Domain 1 ~ Service Diligence */}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 text-indigo-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          Service Diligence
                        </p>
                        <p className="text-sm text-gray-600">
                          Reliability in service roles, task completion, and
                          timeliness.
                        </p>
                      </div>
                    </div>
                    {/* Domain Item 2 */}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 text-indigo-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          Community Integrity
                        </p>
                        <p className="text-sm text-gray-600">
                          Ethical presence and accountability in shared
                          community spaces.
                        </p>
                      </div>
                    </div>
                    {/* Domain 3 ~ Emotional Reliability  */}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-indigo-600 flex-shrink-0 w-5 h-5 mt-1" />
                      {/* The Div to house my two <p>'s */}
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          Emotional Reliability
                        </p>
                        <p className="text-sm text-gray-600">
                          Discernment, calm, and presence in vulnerable moments.
                        </p>
                      </div>
                    </div>
                    {/* Domain 4 ~ Consistency Over Time */}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 text-indigo-600 flex-shrink-0" />
                      {/* Div holding my p's */}
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          Consistency Over Time
                        </p>
                        <p className="text-sm text-gray-600">
                          Trust built through long-term reliability and
                          presence.
                        </p>
                      </div>
                    </div>

                    {/* Domain 5 ~ Learning/Teaching Honor */}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 text-indigo-600 flex-shrink-0" />
                      {/* Div holding my p's */}
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          Learning/Teaching Honor
                        </p>
                        <p className="text-sm text-gray-600">
                          Integrity and care in how one learns or teaches
                          knowledge.
                        </p>
                      </div>
                    </div>

                    {/* Domain 6 ~ Presence In Vulnerable Roles */}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 text-indigo-600 flex-shrink-0" />
                      {/* Div holding my p's */}
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          Presence in Vulnerable Roles
                        </p>
                        <p className="text-sm text-gray-600">
                          Steadiness and care in moments or roles of
                          vulnerability.
                        </p>
                      </div>
                    </div>
                    {/* Domain 7 ~ Redemptive Growth */}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 text-indigo-600 flex-shrink-0" />
                      {/* Div holding my p's */}
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          Redemptive Growth
                        </p>
                        <p className="text-sm text-gray-600">
                          Transformation after harm or failure, earning trust
                          through change.
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-0">
                      <img
                        src="/MpatiQ_Emblem.svg"
                        alt="MpatiQ Emblem"
                        className="h-36 w-36 opacity-5 grayscale"
                      />
                    </div>
                    {/* Testing bottom footer still within core div holding all domains but outside the domain items' divs */}

                    <div className="mt-6 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />

                    {/* Domain List End space-y */}
                  </div>
                </div>
              </div>

              {/* Right Column: Passports */}
              {/* I'm experimenting with a wrap to visually segment TD from TP */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Trust Passports
                  </h3>
                  {/* Same shimmer alignment handled by the left side already */}
                  {/* Shimmer line only visible on desktop */}
                  <div className=" md:flex justify-center mt-1">
                    <div className="w-[100%] h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse" />
                  </div>
                  <div className="mt-4 space-y-4 text-left max-w-md mx-auto">
                    {/* Passport items here */}
                    {/* Passport 1 ~ Hands of Honor */}
                    <div className="rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
                      <p className="text-sm font-semibold text-gray-800">
                        Hands of Honor
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Upholding trust through skilled, diligent, and faithful
                        service.
                      </p>
                    </div>
                    {/* Passport 2~ Care and Custody */}
                    <div className="rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
                      <p className="text-sm font-semibold text-gray-800">
                        Care and Custody
                      </p>
                      {/* Descriptor */}
                      <p className="text-sm text-gray-600 mt-1">
                        Trust earned through compassion, vigilance, and
                        consistent care.
                      </p>
                    </div>
                    {/* Passport 3~ Witnessed Growth */}
                    <div className="rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
                      <p className="text-sm font-semibold text-gray-800">
                        Witnessed Growth
                      </p>
                      {/* Descriptor */}
                      <p className="text-sm text-gray-600 mt-1">
                        Trust earned through transformation, witnessed by
                        others.
                      </p>
                    </div>
                    {/* Passport 4 ~ Scholar's Flame */}

                    <div className="rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
                      <p className="text-sm font-semibold text-gray-800">
                        Scholar's Flame
                      </p>
                      {/* Descriptor */}
                      <p className="text-sm text-gray-600 mt-1">
                        Trust forged in unseen rigor, depth, and self-driven
                        fire of learning.
                      </p>
                    </div>

                    {/* ______________ */}
                    {/* Passport 5 ~  Creative Steward*/}

                    <div className="rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
                      <p className="text-sm font-semibold text-gray-800">
                        Creative Steward
                      </p>
                      {/* Descriptor */}
                      <p className="text-sm text-gray-600 mt-1">
                        Trust earned by stewarding expression and shaping
                        meaning.
                      </p>
                    </div>

                    {/* Passport 6 ~ Builder's Ledger */}

                    <div className="rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
                      <p className="text-sm font-semibold text-gray-800">
                        Builder's Ledger
                      </p>
                      {/* Descriptor */}
                      <p className="text-sm text-gray-600 mt-1">
                        Trust shaped through consistent creation that endures
                        across time.
                      </p>
                    </div>

                    {/* Passport 7 ~ Mentor's Path */}

                    <div className="rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
                      <p className="text-sm font-semibold text-gray-800">
                        Mentor's Path
                      </p>
                      {/* Descriptor */}
                      <p className="text-sm text-gray-600 mt-1">
                        Trust built through guidance and principled sharing of
                        insight.
                      </p>
                    </div>
                    {/* Passport 8 ~  Soul Anchor */}

                    <div className="rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
                      <p className="text-sm font-semibold text-gray-800">
                        Soul Anchor
                      </p>
                      {/* Descriptor */}
                      <p className="text-sm text-gray-600 mt-1">
                        Quiet trust built through presence in grief, transition,
                        and recovery.
                      </p>
                    </div>
                    {/* End of Passport List */}
                  </div>
                </div>
              </div>
              {/* Above this, the div right aboe ends the separator treatment giving the trust passports */}
            </div>
          </div>

          {/* End of div that holds this Trust Domains & Passport Section */}
        </div>
      </div>
    </section>
  );
};

export default TrustPreview;
