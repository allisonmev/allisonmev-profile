import React from 'react';
import styles from './DownloadResumeButton.module.css'

const ReadMoreButton: React.FC = () => {
  return (
    <div className="flex justify-center">
      <a href="https://www.linkedin.com/in/allison-villapando/details/recommendations/" className={`${styles.btn} px-0 py-4 pl-4 pr-4`}>
        Read More Here!
      </a>
    </div>
  );
};

export default ReadMoreButton;