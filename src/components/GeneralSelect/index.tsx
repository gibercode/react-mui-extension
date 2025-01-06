import React, { memo } from 'react';
import './styles.module.scss';
import { Tooltip } from '../Tooltip';
import { Icon } from '@iconify/react';

interface SelectProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  placeholder?: string;
  infoTooltip?: string;
  value?: string;
  options: { value: string; label: string }[];
  disabled?: boolean;
  tooltipClassName?: string;
  iconSize?: number;
}

const GeneralSelect: React.FC<SelectProps> = ({
  name,
  onChange,
  label,
  placeholder,
  infoTooltip,
  value,
  options,
  disabled,
  tooltipClassName,
  iconSize,
}) => {
  return (
    <div className='_generalSelectContainer'>
      {label && (
        <div>
          <label htmlFor={name} className='_generalSelectLabel'>
            {label}
            {infoTooltip && <Tooltip tooltipContent={infoTooltip} className={tooltipClassName} iconSize={iconSize} />}
          </label>
        </div>
      )}
      <div className='_selectWrapper'>
        <select name={name} id={name} className='_generalSelect' onChange={onChange} value={value} disabled={disabled}>
          {placeholder && (
            <option value='' disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon icon={'fluent:chevron-down-12-regular'} className='_selectIcon' width={20} height={14} />
      </div>
    </div>
  );
};

export default memo(GeneralSelect);
