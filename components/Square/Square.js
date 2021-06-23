import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Square.module.scss';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.8,
  },
};

export const Square = ({ value, ...props }) => {
  // const [value, setValue] = useState(value);

  return (
    <motion.button
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      className={styles.square}
      {...props}
    >
      {value}
    </motion.button>
  );
};
