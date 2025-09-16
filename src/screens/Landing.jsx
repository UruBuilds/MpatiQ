//  We will now lay out our core sections(6) at this moment with empty tags/placeholders

import React from 'react';
import Navbar from '../components/Navbar';
import TrustPreview from '../components/TrustPreview';
import { easeOut, motion } from 'framer-motion'; //importing motion from framer-motion
import WaitlistForm from '../components/WaitlistForm';
import AboutSection from '../components/AboutSection';
import ClosingTruth from '../components/ClosingTruth';

export default function Landing() {
  // export the Landing component as the default export from this page
  // the component is to return the behavior detailed here.
  // Every component must also return a single parent element,i.e a <main> or <div

  // Observe that I have introduced a div after return to wrap the pages contents. That div is intended to apply a general background over the entire landing page. However section bgc's are overpowering it. which is fine now that i know. I probably will stick to using the section bgc's and changing their color straight from there if i need to.
  // ____________________________________________________________________________

  // Pseudocode for the new order of our landing page~ September 14th 2025
  // New order (Hero --> Trust Preview --> About --> To CTA --> Blessing --> Footer).

  // Example:
  // 1. Hero
  // 2. Trust Preview
  // 3. About
  // 4. CTA
  // 5. Closing Truth (Blessing)
  // 6. Footer

  return (
    <div className="bg-white min-h-screen">
      {/* Place our NavBar here, just inside the top level div/central container before even the next~ in this case: main */}
      <Navbar />
      <main className="min-h-screen flex flex-col">
        {/* ===== HERO ===== */}
        {/* 1. Hero- Opening Breath */}
        <section
          id="hero"
          aria-label='MpatiQ hero section'
          className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-gray-100 via-gray-100 to-gray-400"
        >
          {/* We will replace the classic divs that were here with framer-motion's */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 3.0, // Allowing each sentence fullly land, before the next enters in ~ A cadence similar to spoken word.
                  delayChildren: 0.5, // A slight delay before the first element comes in.
                },
              },
            }}
            className="max-w-3xl space-y-6"
          >
            {/* Going into the body of the hero section now */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 2.0, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-bold text-gray-900"
            >
              Trust, made visible.
            </motion.h1>

            {/* SUB-HEADLINE */}

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 2.0, ease: 'easeOut' }}
              className="text-xl md:text-2xl text-gray-700 leading-loose max-w-2xl mx-auto"
            >
              MpatiQ offers a fairer way to show and find trust — for those who
              carry integrity even when unseen. We honor what you’ve done and
              who you are becoming.
            </motion.p>

            {/* A SOUL ECHO */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 2.0, ease: 'easeOut', delay: 8 }}
              className="mt-16 text-base md:text-lg italic text-gray-400"
            >
              A mirror of your presence in the world.
            </motion.p>
          </motion.div>
        </section>
        {/* Divider between hero and next section */}
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-60"></div>

        {/* ===== TRUST PREVIEW ===== */}
        {/* 2. Trust Preview  - A Glimpse */}
        {/* Animated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          <TrustPreview />
        </motion.div>


        {/* ______________________________________________________________ */}
        {/* ______________________________________________________________ */}
        {/* ===== ABOUT ===== */}
        {/* 3. About MpatiQ - The Meaning */}
        <AboutSection />

        {/* <!-- 4. The Quiet Truth – Even If Unseen --> */}
        {/* MIGHT REPLACE THIS COMPLETELY WITH `HOW IT WORKS` */}

        <section
          id="quiet-truth"
          className="py-20 px-6 bg-white flex justify-center"
        >
          <div className="max-w-3xl space-y-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              We want light.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              Light that guides rather than blinds.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              Truth, layered. Integrity, protected.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              No utopia that hides rot.
            </motion.p>
          </div>
        </section>

        {/* ===== CTA ===== */}
        {/* 4. Call to Action - The Invitation To Our Waitlist */}
        <WaitlistForm />

        {/* ===== FINAL BLESSING ===== */}
        {/* 5. Final Arc – What We Want You To Walk Away With  */}
        <ClosingTruth />

        {/* ===== FIELD NOTES & SOUL ===== */}
        {/* 6. Field Notes & Soul- The Archive ......[Later]=> DECIDE ORDER THEN  */}
        <section id="field-notes" className="py-20">
          {/* Resources / Soul-aligned writings will go here */}
        </section>
        {/*  */}

        {/* ===== FOOTER ===== */}
        {/* 7. Footer- The Quiet Close */}
        <footer className="py-10">{/* Footer content will go here */}</footer>
      </main>
    </div>
  );
}
