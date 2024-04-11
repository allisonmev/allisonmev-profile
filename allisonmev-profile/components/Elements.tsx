import React from 'react';
import styles from './Elements.module.css';
import Image from 'next/image';

interface ElementProps {
  title: string;
  titleIcon: string;
  content: string;
}

export const Element: React.FC<ElementProps> = ({title, titleIcon, content}) => {
  const lines = content.split('\n');  
  return (
    <div className={styles.elementContainer}>
      <div className={styles.elementHeader}>
        <Image 
          src={titleIcon}
          alt={title}
          width={40}
          height={40}
        />
        <h3 className={styles.elementTitle}>{title}</h3>
      </div>
      <div className={styles.elementContent}>
        {lines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
      </div>
    </div>
  )
};