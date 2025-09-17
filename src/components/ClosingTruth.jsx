//     {/* <!-- 5. Final Arc – What We Want You To Walk Away With --> */}

// This will follow the CTA~ Its a benediction. We will not let a CTA be the last experience of a customer on our site.

import { motion } from 'framer-motion';

export default function ClosingTruth() {
  return (
    <section
      id="closing-truth"
      className="py-20 px-6 bg-white flex justify-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            // BIGGER STAGGER = more silence between each line
            transition: { staggerChildren: 3.6, delayChildren: 0.8 },
          },
        }}
        viewport={{ once: true }}
        className="max-w-3xl space-y-10 text-center"
      >
        {/* Line 1 */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 3.0, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-800 leading-loose tracking-wide"
        >
          Light that guides.
        </motion.p>

        {/* Line 2 */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 2.8, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-800 leading-loose tracking-wide"
        >
          Truth that holds.
        </motion.p>

        {/* Line 3 */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 2.6, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-800 leading-loose tracking-wide"
        >
          Integrity, unshaken.
        </motion.p>

        {/* BOLDER FONTED CLOSING LINES */}

        {/* Line 4 */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 3.0, ease: 'easeOut' }}
          className="mt-14 text-lg md:text-xl text-gray-900 font-semibold leading-relaxed tracking-wide"
        >
          With you in this moment.
        </motion.p>

        {/* Line 5 */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 3.2, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-900 font-semibold leading-relaxed tracking-wide"
        >
          With you in what’s next.
        </motion.p>
      </motion.div>
    </section>
  );
}
