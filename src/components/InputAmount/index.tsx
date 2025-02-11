import React, { memo } from 'react';
import './styles.module.scss';
import { NumericFormat } from 'react-number-format';
import { useFontSizeStore } from '../../store/resource';

interface InputAmountProps {
  name: string;
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const InputAmount: React.FC<InputAmountProps> = ({ name, value = '0.00', onChange, disabled }) => {
  const fontSize = useFontSizeStore((state) => state.fontSize);
  return (
    <div className='_inputAmountContainer' style={{ '--dynamic-font-size': fontSize } as React.CSSProperties}>
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
