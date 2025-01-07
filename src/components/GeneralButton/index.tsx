import React, { memo } from 'react';
import './styles.module.scss';

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  onClick: () => void;
}

const GeneralButton: React.FC<ButtonProps> = ({ text = 'Click', backgroundColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='_generalButton'
      style={
        {
          '--bg-color': backgroundColor || 'var(--blue)',
        } as React.CSSProperties
      }>
      <p className='_buttonText'>{text}</p>
    </button>
  );
};

export default memo(GeneralButton);
