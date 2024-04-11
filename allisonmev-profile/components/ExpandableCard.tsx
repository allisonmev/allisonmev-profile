// components/ExpandableCard.tsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './ExpandableCard.module.css'

interface ExpandableCardProps {
  title: string;
  date: string;
  content: string;
}

export const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  date,
  content,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (): void => {
    setIsExpanded(!isExpanded);
  };

  return (
      <button
        onClick={toggleExpand}
        className='bg-white shadow-md rounded-md p-5 w-full max-w-full focus:outline-none'
        >
        <div className="flex justify-between items-center">
          {/* title */}
          <div className="flex items-center">
            <h2 className="text-xl font-bold mr-2">{title}</h2>
            <h3 className="text-m font-thin">{date}</h3>
          </div>
          <div className={styles.contentContainer}>{isExpanded ? '-' : '+'}</div>
        </div>
        <div className={styles.contentContainer}>
            {isExpanded ? content : null}
        </div>
      </button>
  );
};
