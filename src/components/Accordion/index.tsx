import React, { memo, useState } from 'react';
import './styles.module.scss';
import { Icon } from '@iconify/react';

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
  const [open, setIsOpen] = useState(false);

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
    <div className={showBorder ? '_accordion' : '_accordionNoBorder'}>
      <div className='header' onClick={handleToggle} role='button' aria-expanded={expanded} tabIndex={0}>
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
