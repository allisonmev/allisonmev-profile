'use client';
import React, { useEffect, useRef, useState } from 'react';
import siteMetadata from '@/siteMetaData';
import Skills from '@/pages/skills';
import About from '@/pages/about';
import Experience from './experience';
import Recommendations from './recommendations';
import More from './more';
import TypingText from '@/components/TypingText';
import { RoughNotation } from 'react-rough-notation';
import styles from './index.module.css';


const IndexPage: () => React.ReactElement = (): React.ReactElement => {
  // Should I delete?
  const [isClient, setIsClient] = useState(false); // This will help with rendering the site and help hydrating the site

  useEffect(() => {
    setIsClient(true); // Should I delete?
    window.scrollTo(0, 0);
  }, []);

  const aboutRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const reccRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <main className={styles.mainContainer}>
        {/* Landing Page */}
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center">
              Hi there!
              <br />
              My name is{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">
                <TypingText text="Allison Mae" />
              </span>
            </h1>
          </div>
          <div>
          <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300 ml-10">
            🚀{siteMetadata.description}🚀
          </h2>
          <div className={styles.textContainer}>
            <h3 className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
              Scroll down to explore to learn more about <br />
            </h3>
            <h3 className="text-lg text-black ml-1 text-center">
              <RoughNotation
                animate="true"
                type="highlight"
                color="#BE2ED6"
                show
                animationDelay={1000}
                animationDuration={2500}
                className="text-slate-200"
              >
                <br />me and my career!&nbsp;
              </RoughNotation>
            </h3>
          </div>
        </div>
      </div>
      </main>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={expRef}>
        <Experience />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={reccRef}>
        <Recommendations />
      </div>
      <div ref={moreRef}>
        <More />
      </div>
    </div>
  );
};

export default IndexPage;
