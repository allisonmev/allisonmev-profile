import React from 'react';
import styles from './DownloadResumeButton.module.css';

const DownloadResumeButton: React.FC = () => {
  return (
    <div className="flex justify-center">
      <a href="/SWE_Resume.pdf" download className={`${styles.btn} px-0 py-4 pl-4 pr-4`}>
        Download My Resume!
      </a>
    </div>
  );
};

export default DownloadResumeButton;