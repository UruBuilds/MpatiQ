//  {/* 2. About MpatiQ - The Meaning */}
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white flex flex-col items-center justify-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.6 },
          },
        }}
        viewport={{ once: true }}
        className="max-w-3xl space-y-8 text-center"
      >
        {/* Now we build the framer motion element  */}
        {/* Our first core 'About' words */}

        {/* ARC 1: WHY THE WORLD FAILS TO SEE TRUST */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.6, ease: 'easeOut', delay: 0.4 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed"
        >
          Our world ranks and scores - yet integrity carried quietly is often
          unseen.
        </motion.p>

        {/* Our second core "About" words */}
        {/* ARC 2- WHY MPATIQ EXISTS */}

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed"
        >
          MpatiQ is a mirror: showing the integrity you've carried, the growth
          you've lived, and the trust you can find in others as they find in
          you.
        </motion.p>
      </motion.div>
    </section>
  );
}
