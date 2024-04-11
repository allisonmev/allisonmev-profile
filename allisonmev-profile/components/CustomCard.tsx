import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CustomCardProps {
  imageSrc: string;
  description: string;
  link: string;
  width: number;
  height: number;
}

const CustomCard: React.FC<CustomCardProps> = ({ imageSrc, description, link, width, height }) => (
  <Link href={link} passHref>
    <div className="shape" style={{ width: `${width}px`, height: `${height}px` }}>
      <Image 
        src={imageSrc}
        alt={description}
        width={width}
        height={height}
      />
      <p style={{ whiteSpace: 'pre-wrap' }}>{description}</p> 
    </div>
  </Link>
);

export default CustomCard;