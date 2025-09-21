import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How <span className="text-indigo-600">MpatiQ</span> Works
        </h2>
        <p className="mt-4 text-gray-600 italic">
          Each step is a reflection, each reflection a step
        </p>
      </div>

      {/* STEP 1: BEGIN YOUR MIRROR */}
      <div className="mt-12 space-y-12 max-w-2xl mx-auto text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-xl font-semibold text-indigo-700">
            🔹 Step 1 — Begin Your Mirror
          </h3>
          <p className="leading-relaxed text-gray-600">
            Reflect your roles, and the trust you’ve carried.
          </p>
        </motion.div>

        {/* STEP 2: ACTIVATE PASSPORTS */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 4.6 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-xl text-indigo-700 font-semibold">
            🔹 Step 2 — Activate Passports
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Choose the Trust Passports that fit who you are today, each tied to
            domains of integrity.
          </p>
        </motion.div>

        {/* STEP 3: YOUR PROFILE EMERGES */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 9.2 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-xl text-indigo-700 font-semibold">
            🔹 Step 3 — Your Profile Emerges
          </h3>
          <p className="text-gray-600 leading-relaxed">
            See your Trust Mirror — a living page that holds signals, honors
            growth, and evolves with you.
          </p>
        </motion.div>

        {/* STEP 4: CONNECTION THROUGH TRUST */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 13.8 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-xl text-indigo-700 font-semibold">
            🔹 Step 4 — Connection Through Trust
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Offer your trust — so others find you, and you them.
          </p>
        </motion.div>

        {/* CLOSING COUPLET */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 14 }}
          viewport={{ once: true }}
          className="mt-16 space-y-6 text-center"
        >
          <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-8 shadow-sm">
            <p className="text-lg md:text-xl text-gray-800 leading relaxed">
              Your Trust Mirror can open doors - to work, to kinship, to the
              circles that honor who you are.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading relaxed">
              What grows from your trust is yours - invitations, opportunities,
              or simply clarity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
