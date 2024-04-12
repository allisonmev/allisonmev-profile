import React from 'react';
import styles from './Icon.module.css'
import Image from 'next/image';

interface IconProps {
 imageSrc: string;
 altText: string;
 size: number;
 text: string;
}

const Icon: React.FC<IconProps> = ({ imageSrc, altText, size, text }) => (
  <div>
    <div className={styles.circularIcon} style={{ width: `${size}px`, height: `${size}px`, margin: '20px' }}>
      <div style={{ border: '2px solid #000', borderRadius: '50%', padding: '10px' }}>
      <Image 
        src={imageSrc}
        alt={altText}
        width={size}
        height={size}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      </div>
    </div>
    <div>
      <h3 className={styles.iconText}>{text}</h3> 
    </div>
  </div>
);

export default Icon;
