'use client'
import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as Scroll from 'react-scroll';
import styles from './experience.module.css';
import { RoughNotation } from 'react-rough-notation';
import { ExpandableCard } from '@/components/ExpandableCard';
import DownloadResumeButton from '@/components/DownloadResumeButton';

const { Element: ScrollElement } = Scroll;

const experiences = [
  {
    title: 'Software Engineer',
    date: 'Dec 2022 - Apr 2024',
    description:
      'Implemented REST APIs for backend systems, develop and deployed microservices, ' +
      'and migrated monolithic codebase to microservice architecture to enhance scalability and performance. ' +
      'Additionally, refactored legacy endpoints, led releases, coordinated with cross-functional teams, and maintained ' +
      '85%+ test coverage across all code.',
  },
  {
    title: 'QA Automation Engineer',
    date: 'Apr 2022 - Dec 2022',
    description: 'Led the development and implementation of automation test suite' + 
    ', enhanced end to end data driven automated testing process, successfully established and optimized ' +
    'Jenkins pipeline for automated testing, mentored QA analysts and QA testers.',
  },
  {
    title: 'Software Engineer in Test',
    date: 'Oct 2021 - Apr 2022',
    description: 'Built and enhanced data-driven automated tests, collaborated with ' +
    'cross-functional teams to plan test scopes for both mobile and web applications, ' +
    'and identified bugs and defects to enhance application stability.',
  },
  {
    title: 'Associate QA Analyst',
    date: 'Apr 2021 - Oct 2021',
    description: 'Specialized in network and API testing for mobile and web ' +
    'applications, identifying and validating issues. Collaborated closely with ' +
    'web, game, and mobile developers to stabilize applications.',
  },
  {
    title: 'QA Game Tester',
    date: 'Feb 2020 - Apr 2021',
    description: 'Conducted manual functional, non-functional, and ad-hoc tests ' +
    'for games, developing test plans and cases for regression testing. Collaborated ' +
    'with other QA testers to ensure comprehensive end-to-end testing.',
  },
];

const Experience: NextPage = () => {
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
            setShowAnnotation(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.65,
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
    <div className={styles.expSection}>
      {' '}
      <div ref={annotationRef}>
        <ScrollElement id="expSection" name="expSection">
          <div>
            <h1 className={`font-semibold leading-5 tracking-tight ${isDarkMode ? 'dark-mode-text' : 'text-gray-900'} sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center`}>
              Experience
            </h1>
            <h3 className="text-lg text-gray-600 dark:text-gray-300 ml-1 text-center">
              <RoughNotation
                animate="true"
                type="bracket"
                show={showAnnotation}
                color="#BE2ED6"
                animationDelay={1000}
                animationDuration={2500}
                className="text-black"
                brackets={['left', 'right']}
              >
                <br />
                my timeline of my professional career&nbsp;
              </RoughNotation>
            </h3>
          </div>
          <div className={styles.expCompanyContainer}>
            <div className={styles.companyText}>Zwift</div>
            <div className={styles.cardsContainer}>
              <div className="grid grid-cols-1 gap-4 overflow-auto">
                {experiences.map((experience, index) => (
                  <ExpandableCard
                    key={index}
                    title={`${experience.title}`}
                    date={`(${experience.date})`}
                    content={`${experience.description}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <DownloadResumeButton />
          </div>
        </ScrollElement>
      </div>
    </div>
  );
};

export default Experience;
