import React, { useState } from 'react';
import './styles.module.scss';

interface LargeFolderProps {
  borderColor?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  tooltipContent?: React.ReactNode;
}

const LargeFolder: React.FC<LargeFolderProps> = ({
  borderColor = '#40B73B',
  backgroundColor = '#EAFFE8',
  children,
  tooltipContent,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className='_largeFolderContainer'>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 349 51'
        fill='none'
        className='_largeFolder'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M348 47V15.3838C348 13.727 346.657 12.3838 345 12.3838L337 12.3838C335.343 12.3838 334 11.0407 334 9.38384V4C334 2.34315 332.657 1 331 1H4C2.34315 1 1 2.34314 1 4V47C1 48.6569 2.34315 50 4 50H345C346.657 50 348 48.6569 348 47Z'
          fill={backgroundColor}
          stroke={borderColor}
          strokeWidth='0.5'
        />

        <rect
          x='337'
          y='1'
          width='9'
          height='9'
          fill='transparent'
          cursor='pointer'
          pointerEvents='all'
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        />

        <path
          d='M341.125 4.375H341.875V3.625H341.125M341.5 8.5C339.846 8.5 338.5 7.15375 338.5 5.5C338.5 3.84625 339.846 2.5 341.5 2.5C343.154 2.5 344.5 3.84625 344.5 5.5C344.5 7.15375 343.154 8.5 341.5 8.5ZM341.5 1.75C341.008 1.75 340.52 1.847 340.065 2.03545C339.61 2.22391 339.197 2.50013 338.848 2.84835C338.145 3.55161 337.75 4.50544 337.75 5.5C337.75 6.49456 338.145 7.44839 338.848 8.15165C339.197 8.49987 339.61 8.77609 340.065 8.96455C340.52 9.153 341.008 9.25 341.5 9.25C342.495 9.25 343.448 8.85491 344.152 8.15165C344.855 7.44839 345.25 6.49456 345.25 5.5C345.25 5.00754 345.153 4.51991 344.965 4.06494C344.776 3.60997 344.5 3.19657 344.152 2.84835C343.803 2.50013 343.39 2.22391 342.935 2.03545C342.48 1.847 341.992 1.75 341.5 1.75ZM341.125 7.375H341.875V5.125H341.125V7.375Z'
          fill='#5E83FD'
          cursor='pointer'
          pointerEvents='none'
        />
      </svg>

      {showTooltip && <div className={`_infoTooltip ${showTooltip ? 'visible' : ''}`}>{tooltipContent}</div>}

      <div className='_largeFolderContent'>{children}</div>
    </div>
  );
};

export default LargeFolder;
