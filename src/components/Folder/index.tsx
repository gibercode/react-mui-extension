import React, { useState } from 'react';
import './styles.module.scss';

interface FolderProps {
  borderColor?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  tooltipContent?: React.ReactNode;
}

const Folder: React.FC<FolderProps> = ({
  borderColor = '#40B73B',
  backgroundColor = '#EAFFE8',
  children,
  tooltipContent,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className='_folderContainer'>
      <svg width='100%' height='100%' viewBox='0 0 107 51' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M106 47V17.5C106 15.8431 104.657 14.5 103 14.5H95.3702C93.7133 14.5 92.3702 13.1569 92.3702 11.5V4C92.3702 2.34315 91.027 1 89.3702 1H4C2.34315 1 1 2.34314 1 4V47C1 48.6569 2.34315 50 4 50H103C104.657 50 106 48.6569 106 47Z'
          fill={backgroundColor}
          stroke={borderColor}
          strokeWidth='0.5'
        />

        <rect
          x='96'
          y='1'
          width='10'
          height='10'
          fill='transparent'
          cursor='pointer'
          pointerEvents='all'
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        />
        <path
          d='M100.499 9.25C98.4279 9.25 96.749 7.57112 96.749 5.5C96.749 3.42888 98.4279 1.75 100.499 1.75C102.57 1.75 104.249 3.42888 104.249 5.5C104.249 7.57112 102.57 9.25 100.499 9.25ZM100.499 8.5C101.295 8.5 102.058 8.18393 102.62 7.62132C103.183 7.05871 103.499 6.29565 103.499 5.5C103.499 4.70435 103.183 3.94129 102.62 3.37868C102.058 2.81607 101.295 2.5 100.499 2.5C99.7034 2.5 98.9403 2.81607 98.3777 3.37868C97.8151 3.94129 97.499 4.70435 97.499 5.5C97.499 6.29565 97.8151 7.05871 98.3777 7.62132C98.9403 8.18393 99.7034 8.5 100.499 8.5ZM100.499 4.75C100.598 4.75 100.694 4.78951 100.764 4.85984C100.835 4.93016 100.874 5.02554 100.874 5.125V7C100.874 7.09946 100.835 7.19484 100.764 7.26516C100.694 7.33549 100.598 7.375 100.499 7.375C100.4 7.375 100.304 7.33549 100.234 7.26516C100.164 7.19484 100.124 7.09946 100.124 7V5.125C100.124 5.02554 100.164 4.93016 100.234 4.85984C100.304 4.78951 100.4 4.75 100.499 4.75ZM100.499 4.375C100.4 4.375 100.304 4.33549 100.234 4.26516C100.164 4.19484 100.124 4.09946 100.124 4C100.124 3.90054 100.164 3.80516 100.234 3.73484C100.304 3.66451 100.4 3.625 100.499 3.625C100.598 3.625 100.694 3.66451 100.764 3.73484C100.835 3.80516 100.874 3.90054 100.874 4C100.874 4.09946 100.835 4.19484 100.764 4.26516C100.694 4.33549 100.598 4.375 100.499 4.375Z'
          fill='#5E83FD'
          cursor='pointer'
          pointerEvents='none'
        />
        {/* <foreignObject x='0' y='0' width='100%' height='100%'>
          <div className='_folderContent'>{children}</div>
        </foreignObject> */}
      </svg>
      <div className='_folderContent'>{children}</div>

      {showTooltip && <div className='_infoTooltip visible'>{tooltipContent}</div>}
    </div>
  );
};

export default Folder;
