import React, { memo } from 'react';
import './styles.module.scss';
import { useFontSizeStore } from '../../store/resource';

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  onClick: () => void;
}

const GeneralButton: React.FC<ButtonProps> = ({ text = 'Click', backgroundColor, onClick }) => {
  const fontSize = useFontSizeStore((state) => state.fontSize);
  return (
    <button
      onClick={onClick}
      className='_generalButton'
      style={
        {
          '--bg-color': backgroundColor || 'var(--blue)',
          '--dynamic-font-size': fontSize,
        } as React.CSSProperties
      }>
      <p className='_buttonText'>{text}</p>
    </button>
  );
};

export default memo(GeneralButton);
