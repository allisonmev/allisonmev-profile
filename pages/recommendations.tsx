//  Experience.tsx
'use client'
import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as Scroll from 'react-scroll';
import styles from './recommendations.module.css';
import { RoughNotation } from 'react-rough-notation';
import Image from 'next/image';
import Link from 'next/link';
import ReadMoreButton from '@/components/ReadMoreButton';
import { RevealWrapper } from 'next-reveal'; // Import RevealWrapper


const { Element: ScrollElement } = Scroll;

const Recommendations: NextPage = () => {
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
    <div className={styles.reccSection}>
      {' '}
      {/* Use the CSS Module class */}
      <div ref={annotationRef}>
        <ScrollElement id="reccSection" name="reccSection">
          <div>
            {/*Experience Content*/}
            <h1 className={`font-semibold leading-5 tracking-tight ${isDarkMode ? 'dark-mode-text' : 'text-gray-900'} sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center`}>
              Recommendations
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
                see what people are saying about me!&nbsp;
              </RoughNotation>
            </h3>
          </div>
          <div className={styles.container}>
            <div className={styles.row}>
              <RevealWrapper>
                <Link href="https://www.linkedin.com/in/allison-villapando/details/recommendations/?detailScreenTabIndex=0" passHref>
                  <div className={styles.card}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        src='/images/sm_pfp.jpg'
                        alt="Sandra Review"
                        width={50}
                        height={50}
                      />
                      <h3>Senior Software Engineer</h3>
                      </div>
                    <p>
                      I had the pleasure of working with Allison on the Architecture and SRE team at Zwift, and it was truly a great experience.<br /><br /> 
                      From the moment she joined the team, Allison demonstrated initiative and adaptability, transitioning seamlessly from QA Engineer to Software 
                      Engineer. She wasted no time in making significant contributions. Allison&apos;s ability to work autonomously and tackle challenges head-on was 
                      impressive. She brought a fresh perspective to our discussions, consistently asking insightful questions and offering valuable insights that 
                      leveled-up the team.<br /><br />During her time with us, I had the privilege of mentoring Allison for several months. It was evident that she possesses
                      excellent problem-solving skills and a remarkable capacity for rapid learning. It was very rewarding to witness her growth and development 
                      firsthand, and I am certain she will continue on this trajectory in any company that is lucky enough to have her.
                    </p>
                  </div>
                </Link>
              </RevealWrapper>
              <RevealWrapper>
                <Link href="https://www.linkedin.com/in/allison-villapando/details/recommendations/?detailScreenTabIndex=0" passHref>
                  <div className={styles.card}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        src='/images/bc_pfp.jpg'
                        alt="Brian Review"
                        width={50}
                        height={50}
                      />
                      <h3>Senior QA Engineer</h3>
                    </div>
                    <p>
                      Rockstar, superstar, MVP, key player -- there are many words I can use to describe what I observed from Allison as one of her senior QAs in our internal tools 
                      team at Zwift. Prior to transitioning over to our infrastructure team as an engineer, Allison started as a junior QA and I had the pleasure to have a front row
                      seat to her rise in QA from Analyst to Automation Engineer.<br /><br />With Allison, you will be getting an individual who is not afraid to rise to a challenge
                      and isn&apos;t afraid of receiving or giving critical feedback. As an analyst, she has a good foundation of testing principals that extends towards documentation 
                      work and test authoring. And as an engineer, she has the curiosity, drive, and ambition to tackle problems head on. She will also find creative solutions, will
                      do everything in her power to make sure she supports and lifts her peers to meet a goal, and will work towards her ambitious goals.<br /><br />So what will you be 
                      getting with Allison as a potential candidate for your organization? Regardless of if she seeks a future role in QA, Engineering, or Product, you will get a 
                      technical and talented individual who has experienced two sides of the SDLC in her young career with strong insight into the entire end to end process from conception,
                      story write ups, development, testing, bug triage, releases, and post-mortems from two very perspectives -- to me that&apos;s a very impactful point of view.
                    </p>
                  </div>
                </Link>
              </RevealWrapper>  
              <RevealWrapper>
                <Link href="https://www.linkedin.com/in/allison-villapando/details/recommendations/?detailScreenTabIndex=0" passHref>
                  <div className={styles.card}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        src='/images/io_pfp.jpg'
                        alt="Iago Review"
                        width={50}
                        height={50}
                      />
                      <h3>Staff Platform Software Engineer</h3>
                    </div>
                    <p>
                    I&apos;ve mentored Allison from QA to Software Engineer and she&apos;s managed to exceed expectations on her QA role while being mentored and 
                    learning what she needed for the new position. Since then, she&apos;s exceeded expectations as a Software Engineer and managed to have a great impact in 
                    one of the most senior and fundamental teams at Zwift.<br /><br />I&apos;d hire her again in a heartbeat and truly hope we can work together again.<br /><br />
                    Thank you again for all of your contributions Allison!
                    </p>
                  </div>
                </Link>
              </RevealWrapper>
            </div>
          </div>
          <div>
            <ReadMoreButton />
          </div>
        </ScrollElement>
      </div>
    </div>
  );
};

export default Recommendations;
