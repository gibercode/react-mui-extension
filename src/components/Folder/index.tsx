import React, { FC, useState } from 'react';
import './styles.module.scss';
import { Icon } from '@iconify/react';
import ReactDOM from 'react-dom';

interface FolderComponentProps {
  text?: string;
  borderColor?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  tooltipContent?: React.ReactNode;
}

export const FolderComponent: FC<FolderComponentProps> = ({
  text,
  borderColor,
  backgroundColor,
  children,
  tooltipContent,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const handleMouseEnter = (event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltipPosition({
      top: rect.top - 20,
      left: rect.left + rect.width / 2,
    });
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className='boxContainer'>
      <div className='infoContainer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Icon icon='mdi:information-outline' cursor='pointer' width={10} color='var(--blue)' />
      </div>

      {showTooltip &&
        ReactDOM.createPortal(
          <div
            className={`infoTooltip ${showTooltip ? 'visible' : ''}`}
            style={{
              position: 'absolute',
              top: tooltipPosition.top,
              left: tooltipPosition.left,
            }}>
            {tooltipContent}
          </div>,
          document.body,
        )}

      <div
        className='box'
        style={
          {
            '--before-bg-color': borderColor || 'var(--green)',
            '--after-bg-color': backgroundColor || 'var(--mint)',
          } as React.CSSProperties
        }>
        {text && (
          <p className='title' style={{ color: borderColor || 'var(--green)' }}>
            {text}
          </p>
        )}
        <div className='children'>{children}</div>
      </div>
    </div>
  );
};
