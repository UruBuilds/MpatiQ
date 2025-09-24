import { motion } from 'framer-motion';

const BREATH = 5; // total spacing (animation duration + pause)

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.8, // pause before first step
      staggerChildren: BREATH,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 3 }, // arrival takes ~3s
  },
};

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

      {/* Steps sequence */}
      <motion.div
        className="mt-12 space-y-12 max-w-2xl mx-auto text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* STEP 1 */}
        <motion.div variants={stepVariants} className="space-y-3">
          <h3 className="text-xl font-semibold text-indigo-700">
            🔹 Step 1 — Begin Your Mirror
          </h3>
          <p className="leading-relaxed text-gray-600">
            Reflect your roles, and the trust you’ve carried.
          </p>
        </motion.div>

        {/* STEP 2 */}
        <motion.div variants={stepVariants} className="space-y-3">
          <h3 className="text-xl text-indigo-700 font-semibold">
            🔹 Step 2 — Activate Passports
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Choose the Trust Passports that fit who you are today, each tied to
            domains of integrity.
          </p>
        </motion.div>

        {/* STEP 3 */}
        <motion.div variants={stepVariants} className="space-y-3">
          <h3 className="text-xl text-indigo-700 font-semibold">
            🔹 Step 3 — Your Profile Emerges
          </h3>
          <p className="text-gray-600 leading-relaxed">
            See your Trust Mirror — a living page that holds signals, honors
            growth, and evolves with you.
          </p>
        </motion.div>

        {/* STEP 4 */}
        <motion.div variants={stepVariants} className="space-y-3">
          <h3 className="text-xl text-indigo-700 font-semibold ">
            🔹 Step 4 — Connection Through Trust
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Offer your trust. So others find you, and you them.
          </p>
        </motion.div>

        {/* CLOSING COUPLET */}
        <motion.div
          variants={stepVariants}
          className="mt-16 space-y-6 text-center"
        >
          <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-8 shadow-sm">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Your Trust Mirror opens doors — to work, to kinship, to circles
              that honor who you are.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              What grows from your trust is yours: opportunity, connection,
              clarity.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
