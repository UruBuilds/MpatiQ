//     {/* <!-- 5. Final Arc – What We Want You To Walk Away With --> */}

// This will follow the CTA~ Its a benediction. We will not let a CTA be the last experience of a customer on our site.

import { motion } from 'framer-motion';

export default function ClosingTruth() {
  return (
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
          But for those striving, flawed, honest—we will reflect your humanity.
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
  );
}
