//  Skills.tsx
import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import * as Scroll from 'react-scroll';
import styles from './skills.module.css';
import { RoughNotation } from 'react-rough-notation';
import { Element } from '@/components/Elements';

const { Element: ScrollElement } = Scroll;

const skills = [
  {
    title: 'Languages',
    titleIcon: "/images/programming.png",
    content:
      'Primary Languages I mainly use is JavaScript, Java, and Kotlin. ' +
      'Other languages I have used in the past is Python, '+
      'C++, and SQL. Currently, I am learning Typescript!'
  },
  {
    title: 'Tech and Frameworks',
    titleIcon: "/images/framework.png",
    content:
      'Backend Frameworks I have experience in is in Quarkus; Testing Frameworks I work with is with ' +
      'JUnit, Cucumber, Mockito and WireMock. Other Technologies I am familiar with is Kafka, Microservices, ' +
      'Redis, and PostgreSQL. Currently, I am ' +
      'learning React, Next.js, Framer, and Tailwind CSS'
  },
  {
    title: 'Dev Tools',
    titleIcon: "/images/tools.png",
    content:
      'I have used the VSC and IntelliJ for IDEs and used Git for VCS. ' +
      'For containers, I have utilized Docker and Kubernentes. For monitoring and debugging, I ' +
      'I have used Datadog, SonarQube, and Postman.'
  },
  {
    title: 'Other',
    titleIcon: "/images/misc.png",
    content:
      'Other skills I have developed professionally is leadership skills that helped me mentor ' +
      'kids when I was a code coach at theCoderSchool. In addition, I had the opportunity to teach ' +
      'QA Testers and QA Analysts, Automation engineering! I am also able to build out comprehensive ' +
      'test plans and organize volunteering events!'
  },
]

const Skills: NextPage = () => {
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
    <div className={styles.skillsSection}>
      {' '}
      {/* Use the CSS Module class */}
      <div ref={annotationRef}>
        <ScrollElement id="skillsSection" name="skillsSection">
          {/* Your skills section content */}
          <h1 className={`font-semibold leading-5 tracking-tight ${isDarkMode ? 'dark-mode-text' : 'text-gray-900'} sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center`}>
            Skills
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
              breakdown of skills I have gained&nbsp;
            </RoughNotation>
          </h3>
          <div className={styles.skillsContainer}>
                {/*Expandable Card Main Container*/}
                {skills.map((skills, index) => (
                  <Element
                    key={index}
                    title={skills.title}
                    titleIcon={skills.titleIcon}
                    content={skills.content}
                  />
                ))}
          </div>
        </ScrollElement>
      </div>
    </div>
  );
};

export default Skills;
