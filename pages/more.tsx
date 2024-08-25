//  Experience.tsx
'use client'
import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as Scroll from 'react-scroll';
import styles from './more.module.css';
import { RoughNotation } from 'react-rough-notation';
import Icon from '@/components/Icon';
import { RevealWrapper } from 'next-reveal';


const { Element: ScrollElement } = Scroll;

const hobbiesOne = [
  {
    imageSrc: '/images/snowboarding.png',
    altText: 'snowboarding',
    size: 100,
    text: 'Snowboarding'
  },
  {
    imageSrc: '/images/bw_plant.png',
    altText: 'planting',
    size: 100,
    text: 'Planting'
  },
  {
    imageSrc: '/images/coffee.png',
    altText: 'drinking coffee',
    size: 100,
    text: 'Drinking Coffee'
  },
  {
    imageSrc: '/images/cooking.png',
    altText: 'cooking',
    size: 100,
    text: 'Cooking'
  },
  {
    imageSrc: '/images/samoyed.png',
    altText: 'hanging with my dog',
    size: 100,
    text: 'Hanging with my Dog'
  }
]

const hobbiesTwo = [
  {
    imageSrc: '/images/lego.png',
    altText: 'building legos',
    size: 100,
    text: 'Building Legos'
  },
  {
    imageSrc: '/images/music.png',
    altText: 'listening to music',
    size: 100,
    text: 'Listening to Music'
  },
  {
    imageSrc: '/images/travel.png',
    altText: 'traveling',
    size: 100,
    text: 'Traveling'
  },
  {
    imageSrc: '/images/weights.png',
    altText: 'working out',
    size: 100,
    text: 'Working Out'
  },
  {
    imageSrc: '/images/hiking.png',
    altText: 'hiking',
    size: 100,
    text: 'Hiking'
  }
]

const More: NextPage = () => {
  const annotationRef = useRef(null);
  const [showAnnotation, setShowAnnotation] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect dark mode preference
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQueryList.matches); // Set initial state based on user's preference
    
    const handleChange = () => setIsDarkMode(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', handleChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowAnnotation(true); // Trigger the annotation to show
            observer.disconnect(); // Disconnect the observer after the animation is triggered
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.65, // Adjust the threshold as needed
      }
    );

    if (annotationRef.current) {
      observer.observe(annotationRef.current);
    }

    return () => {
      observer.disconnect();
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, []);


  return (
    <div className={styles.moreSection}>
      {' '}
      {/* Use the CSS Module class */}
      <div ref={annotationRef}>
        <ScrollElement id="moreSection" name="moreSection">
          <div>
            {/*Experience Content*/}
            <h1 className={`font-semibold leading-5 tracking-tight ${isDarkMode ? 'dark-mode-text' : 'text-gray-900'} sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center`}>
              More About Me
            </h1>
            <h3 className="text-lg text-gray-600 dark:text-gray-300 ml-1 text-center">
              <RoughNotation
                animate="true"
                type="bracket"
                show={showAnnotation} // Control the visibility based on the state
                color="#BE2ED6"
                animationDelay={1000}
                animationDuration={2500}
                className="text-black"
                brackets={['left', 'right']}
              >
                <br />
                what I like to do outside of my professional career!&nbsp;
              </RoughNotation>
              </h3>
            </div>
          <div className={styles.container}>
            <div className={styles.row}>
              {hobbiesOne.map((hobbiesOne, index) => (
                <Icon
                    key={index}
                    imageSrc={hobbiesOne.imageSrc}
                    altText={hobbiesOne.altText}
                    size={hobbiesOne.size}
                    text={hobbiesOne.text}
                  />
                ))}
              </div>
          <div className={styles.row}>
            {hobbiesTwo.map((hobbiesTwo, index) => (
                <Icon
                    key={index}
                    imageSrc={hobbiesTwo.imageSrc}
                    altText={hobbiesTwo.altText}
                    size={hobbiesTwo.size}
                    text={hobbiesTwo.text}
                  />
                ))}
            </div>
          </div>
          <div>
          <h2 className={`font-normal leading-3 tracking-normal ${isDarkMode ? 'dark-mode-text' : 'text-gray-900'} sm:leading-5 md:text-3xl md:leading-8 text-center`}>
              Quotes I Live By
            </h2>
            <RevealWrapper>
              <div className={styles.moreQuoteContainer}>
                <div>
                    <span className={styles.largeBoldQuote}>&quot;</span>
                </div>
                <div>
                  <p className={styles.quoteText}>Sometimes the best way to solve your own problems is to help someone else</p>
                </div>
                <div className={styles.rightAlign}>
                    <span className={styles.largeBoldQuote}>&quot;</span>
                </div>
                <div className={styles.rightAlign}>
                  <p>- Uncle Iroh, 
                    <span className={styles.italicText}> Avatar the Last Airbender</span>
                  </p>
                </div>
              </div>
            </RevealWrapper>
            <RevealWrapper>
              <div className={styles.moreQuoteContainer}>
                <div>
                    <span className={styles.largeBoldQuote}>&quot;</span>
                </div>
                <div>
                  <p className={styles.quoteText}>We&apos;re almost there, but nowhere near it. All that matters is that we&apos;re going.</p>
                </div>
                <div className={styles.rightAlign}>
                    <span className={styles.largeBoldQuote}>&quot;</span>
                </div>
                <div className={styles.rightAlign}>
                  <p>- Lorelai Gilmore, 
                    <span className={styles.italicText}> Gilmore Girls</span>
                  </p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </ScrollElement>
      </div>
    </div>
  );
};

export default More;
