import React from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  text: string; 
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
  const chars = text.split('');

  return (
    <div>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: index * 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TypingText;
