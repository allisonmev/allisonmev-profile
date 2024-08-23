//  Experience.tsx
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
    title: 'Associate Software Engineer',
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
  // This will help with rendering the site and help hydrating the site
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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
    };
  }, []);

  return (
    <div className={styles.expSection}>
      {' '}
      {/* Use the CSS Module class */}
      <div ref={annotationRef}>
        <ScrollElement id="expSection" name="expSection">
          <div>
            {/*Experience Content*/}
            <h1 className="font-semibold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center">
              Experience
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
                my timeline of my professional career&nbsp;
              </RoughNotation>
            </h3>
          </div>
          <div className={styles.expCompanyContainer}>
            <div className={styles.companyText}>Zwift</div>
            <div className={styles.cardsContainer}>
              <div className="grid grid-cols-1 gap-4 overflow-auto">
                {/*Expandable Card Main Container*/}
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
