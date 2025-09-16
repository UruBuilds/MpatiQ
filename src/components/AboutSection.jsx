//  {/* 2. About MpatiQ - The Meaning */}
import { motion } from 'framer-motion';


export default function AboutSection() {
  return (
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
          You have a duty to those who will look to you, believe in you, rely on
          your word.
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
          The world throws away resumes. It ranks, it scores, it filters—but it
          rarely sees.
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
  );
}
