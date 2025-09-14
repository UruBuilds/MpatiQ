//  We will now lay out our core sections(6) at this moment with empty tags/placeholders

import React from 'react';
import Navbar from '../components/Navbar';
import TrustPreview from '../components/TrustPreview';
import { motion } from 'framer-motion'; //importing motion from framer-motion
import WaitlistForm from '../components/WaitlistForm';

export default function Landing() {
  // export the Landing component as the default export from this page
  // the component is to return the behavior detailed here.
  // Every component must also return a single parent element,i.e a <main> or <div

  // Observe that I have introduced a div after return to wrap the pages contents. That div is intended to apply a general background over the entire landing page. However section bgc's are overpowering it. which is fine now that i know. I probably will stick to using the section bgc's and changing their color straight from there if i need to.
  // ____________________________________________________________________________

  return (
    <div className="bg-indigo-800 min-h-screen">
      {/* Place our NavBar here, just inside the top level div/central container before even the next~ in this case: main */}
      <Navbar />
      <main className="min-h-screen flex flex-col">
        {/* 1. Hero- Opening Breath */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center text-center px-6 bg-white"
        >
          {/* We will replace the classic divs that were here with framer-motion's */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 2.6,
                },
              },
            }}
            className="max-w-3xl space-y-6"
          >
            {/* Going into the p tags now, where this is the containers design, we now go into the words that holds the soul */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1.4 }}
              className="text-3xl text-gray-800 font-medium italic"
            >
              {/* YOU ARE NOT A STATISTIC! */}
              You are not a statistic.
            </motion.p>
            {/* 2nd motion p */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-semibold text-gray-900 leading-relaxed"
            >
              The integrity you gave into the fields you approached—
            </motion.p>
            {/* 3rd motion.p */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-semibold text-gray-900 leading-relaxed"
            >
              when the lights were on and off—
            </motion.p>
            {/* 3rd motion p */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-4xl text-gray-900 font-semibold"
            >
              {/* WE HONOR! */}
              we honor.
            </motion.p>
            {/* 4th motion p */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-semibold text-gray-900 leading-relaxed"
            >
              All of your context.
            </motion.p>
            {/* 4th motion.p */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-3xl text-gray-700 font-normal leading-relaxed"
            >
              Step into the light with your truth.
            </motion.p>
          </motion.div>

          {/* Hero content will go here */}
        </section>

        {/*FURTHER  */}

        {/* 2. About MpatiQ - The Meaning */}
        <section
          id="about"
          className="py-20 px-6 bg-white flex flex-col items-center justify-center"
        >
          <div className="max-w-3xl space-y-6 text-center">
            {/* Now we build the framer motion element  */}
            {/* Our first core about words */}

            {/* Arc 1: Recognition + Duty */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              We believe in honor. In context. In the flawed, striving human who
              carries integrity even in imperfection.
            </motion.p>

            {/* Our second core "about" words */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              Come honestly, and we will hold your trust with care.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              But remember—your presence shapes more than your own path.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              You have a duty to those who will look to you, believe in you,
              rely on your word.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              That duty is sacred.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.5 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              Carry it as such.
            </motion.p>
          </div>

          {/* End of Arc 1 */}

          {/* Start of Arc 2*/}
          <div className="max-w-3xl space-y-6 text-center mt-16">
            {/* Arc 2: The World's Misrecognition: The Pain that birth MpatiQ */}
            {/* 1. The world’s blindness */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              The world throws away resumes. It ranks, it scores, it filters—but
              it rarely sees.
            </motion.p>

            {/* 2. The power of presence */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              Yet that same soul, when encountered face to face, can change
              everything—by presence alone.
            </motion.p>

            {/* 3. Why MpatiQ exists */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.9 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              MpatiQ was built to reveal what metrics can’t touch:
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              Your essence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.5 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              Your trustworthiness in specific domains.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.8 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              The behavior you model over time.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 2.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              The stories data alone can’t carry.
            </motion.p>

            {/* 4. Redemption without whitewashing */}
            {/* I transition into this element with a stronger delay giving the new arc, then stabilize it to 0.3 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 2.6 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              We honor redemption, too.
            </motion.p>
            {/* More */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 2.9 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              The ones who change. Who grow.
            </motion.p>

            {/* 5. Boundaries and the mirror */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 3.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              We will not curate your story for you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 3.5 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              We will not let this become a popularity game.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 3.8 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              We will give you the mirror.
            </motion.p>
          </div>
        </section>

        {/* <!-- 3. The Quiet Truth – Even If Unseen --> */}
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

        {/* <!-- 4. Final Arc – What We Want You To Walk Away With --> */}
        <section
          id="final-blessing"
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
              We will see you. Especially if you’ve felt unseen.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              We won’t guarantee anything—but we will give you a fairer chance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              Businesses, too—we offer you purer signals.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              And for those who seek to deceive, we will not whitewash your
              fraudulence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.9 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              We are not here to be gamed.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              But for those striving, flawed, honest—we will reflect your
              humanity.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              We will stand with your becoming.
            </motion.p>
          </div>
        </section>

        {/* 3. Trust Preview  - A Glimpse */}
        {/* <section id="trust-preview" className="py-20"> */}
        {/* Trust Preview Content will go here */}
        {/* </section> */}
        <TrustPreview />

        {/* 4.Call to Action - The Invitation */}
        <WaitlistForm/>

        {/* 5. Field Notes & Soul- The Archive */}
        <section id="field-notes" className="py-20">
          {/* Resources / Soul-aligned writings will go here */}
        </section>

        {/* 6. Footer- The Quiet Close */}
        <footer className="py-10">{/* Footer content will go here */}</footer>
      </main>
    </div>
  );
}
