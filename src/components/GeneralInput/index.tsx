import React, { memo } from 'react';
import './styles.module.scss';
import { Tooltip } from '../Tooltip';

interface InputProps {
  name: string;
  onChange: () => void;
  label?: string;
  placeholder?: string;
  infoTooltip?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  tooltipClassName?: string;
  iconSize?: number;
}

const GeneralInput: React.FC<InputProps> = ({
  name,
  onChange,
  label,
  placeholder,
  infoTooltip,
  value,
  type,
  tooltipClassName,
  iconSize,
}) => {
  return (
    <div className='_generalInputContainer'>
      {label && (
        <div>
          <label htmlFor={name} className='_generalInputLabel'>
            {label}
            {infoTooltip && <Tooltip tooltipContent={infoTooltip} className={tooltipClassName} iconSize={iconSize} />}
          </label>
        </div>
      )}
      <input
        type={type}
        name={name}
        className='_generalInput'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default memo(GeneralInput);
