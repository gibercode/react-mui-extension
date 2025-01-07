import React, { memo } from 'react';
import './styles.module.scss';
import { NumericFormat } from 'react-number-format';

interface InputAmountProps {
  name: string;
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const InputAmount: React.FC<InputAmountProps> = ({ name, value = '0.00', onChange, disabled }) => {
  return (
    <div className='_inputAmountContainer'>
      <span className='_prefix'>$</span>
      <NumericFormat
        className='_inputAmount'
        name={name}
        value={value}
        onValueChange={(values) => onChange(values.value)}
        thousandSeparator=','
        decimalScale={2}
        fixedDecimalScale={true}
        disabled={disabled}
      />
    </div>
  );
};

export default memo(InputAmount);
