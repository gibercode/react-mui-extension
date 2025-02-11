import React, { memo, useState } from 'react';
import './styles.module.scss';
import { Icon } from '@iconify/react';
import { useFontSizeStore } from '../../store/resource';

interface AccordionProps {
  children: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: (isExpanded: boolean) => void;
  customHeader?: any;
  title?: string;
  icon?: string;
  showBorder?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  isExpanded,
  onToggle,
  customHeader,
  title,
  icon,
  showBorder = true,
}) => {
  const [open, setIsOpen] = useState(isExpanded);
  const fontSize = useFontSizeStore((state) => state.fontSize);
  const expanded = open ?? isExpanded;

  const handleToggle = () => {
    const newExpandedState = !expanded;
    if (onToggle) {
      onToggle(newExpandedState);
    } else {
      setIsOpen(newExpandedState);
    }
  };

  return (
    <div
      className={showBorder ? '_accordion' : '_accordionNoBorder'}
      style={{ '--dynamic-font-size': fontSize } as React.CSSProperties}>
      <div className='_accordionHeader' onClick={handleToggle} role='button' aria-expanded={expanded} tabIndex={0}>
        {!customHeader ? (
          <>
            <div className='titleContainer'>
              <Icon icon={icon ?? ''} cursor='pointer' width={12} className={`icon`} />
              <p className='accordionTitle'>{title}</p>
            </div>
            <Icon icon={expanded ? 'fa6-solid:circle-arrow-up' : 'fa6-solid:circle-arrow-down'} width={12} />
          </>
        ) : (
          customHeader({ expanded })
        )}
      </div>
      <div className={`accordionContent ${expanded ? 'expanded' : ''}`} role='region' aria-hidden={!expanded}>
        {children}
      </div>
    </div>
  );
};

export default memo(Accordion);
