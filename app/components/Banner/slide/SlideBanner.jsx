import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Slide = ({ slide }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Image src={slide.image} alt={slide.alt} quality={100} />
    </motion.div>
  </AnimatePresence>
);

export default Slide;
