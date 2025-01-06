import React, { FC, useState } from 'react';
import './styles.module.scss';
import { Icon } from '@iconify/react';
import ReactDOM from 'react-dom';

interface TooltipProps {
  tooltipContent?: React.ReactNode;
  className?: string;
  iconSize?: number;
}

export const Tooltip: FC<TooltipProps> = ({ tooltipContent, className, iconSize }) => {
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
    <>
      <div className={className || 'infoContainer'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Icon icon='mdi:information-outline' cursor='pointer' width={iconSize ?? 10} color='var(--blue)' />
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
    </>
  );
};
