'use client'

//  About.tsx
import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as Scroll from 'react-scroll';
import styles from './about.module.css';
import { RoughNotation } from 'react-rough-notation';
import Image from 'next/image';

const { Element: ScrollElement } = Scroll;

const About: NextPage = () => {
  const annotationRef = useRef(null);
  const [showAnnotation, setShowAnnotation] = useState(false);
  // This will help with rendering the site and help hydrating the site
  const [isClient, setIsClient] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    setIsClient(true);

    // Detect dark mode preference
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(mediaQueryList.matches);
    mediaQueryList.addListener(handleChange);

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
      mediaQueryList.removeListener(handleChange); 
    };
  }, []);

  return (
    <div className={styles.aboutSection}>
      {' '}
      {/* Use the CSS Module class */}
      <div ref={annotationRef}>
        <ScrollElement id="aboutSection" name="aboutSection">
          {/* Your about section content */}
          <div className={styles.aboutContainer}>
            <div className={styles.aboutProfileImage}>
              <Image
                src="/images/profile.png"
                alt="Profile Picture"
                width={300}
                height={300}
              />
            </div>
            <div className={styles.aboutTextContainer}>
              <h1 className={`font-semibold leading-5 tracking-tight ${isDarkMode ? 'dark-mode-text' : 'text-gray-900'} sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center`}>
                About
              </h1>
              <h3 className="text-lg text-black ml-1 text-center">
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
                  a snapshot of who i am&nbsp;
                </RoughNotation>
              </h3>
            </div>
          </div>
          <div>
            <section className={styles.aboutTextInfo}>
              <span>
                My name is <strong>Allison Mae</strong>! I graduated with a{' '}
                <strong>BS in Computer Science</strong>. I am a problem-solver
                and a results-driven
                <strong> Software Engineer with a background in QA</strong>,
                known for my dedication to excellence and ability to adapt and
                thrive in dynamic environments.
                <br />
                <br />
                My experience in QA and Automation Engineering has provided me
                with a solid foundation in Software Engineering. This experience
                has honed my ability to approach every feature with{' '}
                <span className={styles.italicize}>
                  thoroughness and creativity
                </span>
                . I analyze every edge case and craft innovative solutions.
                <br />
                <br /> As I transitioned into the role of a Software Engineer, I
                leveraged my experience to think critically during code
                development. I implemented thorough testing procedures to ensure{' '}
                <span className={styles.italicize}>
                  stability and comprehensive coverage{' '}
                </span>
                of edge cases. Additionally, my communication skills to
                effectively collaborate within cross-functional teams.
                <br />
                <br />
                In addition to my professional pursuits, I mentored young
                children to learn Python coding and guided QA Testers/Analysts
                on their journey to become Automation Engineers. Learning from
                others has been one of the most rewarding aspects of my career.
                I am grateful for the invaluable mentorship I have received,
                which has played a pivotal role in shaping me into the Software
                Engineer I am today.
                <br />
                <br /> With this, naturally, Software Engineering helps feed my
                curiosity, and my passion for{' '}
                <span className={styles.italicize}>
                  continual learning and working{' '}
                </span>
                in teams!
              </span>
              <span>
                <br />
                <Image
                  src="/images/me_logo.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
              </span>
            </section>
          </div>
        </ScrollElement>
      </div>
    </div>
  );
};

export default About;
