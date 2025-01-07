import React, { useState } from 'react';

import './styles.module.scss';
import { FolderComponent } from '../../../Folder';
import InputAmount from '../../../InputAmount';
export const Essencial = () => {
  const [amount, setAmount] = useState('0.00');

  const handleAmountChange = (value: string) => {
    console.log('Formatted Value:', value);
    setAmount(value);
  };

  return (
    <div className='essencialMain'>
      <div className='essencialRow'>
        <div className='essencialGrid firstRow'>
          <FolderComponent
            text='Elegible'
            borderColor='var(--apple)'
            backgroundColor='var(--hint)'
            tooltipContent={<p className='tooltipText'>Elegible</p>}>
            <p className='boxText'>Yes</p>
          </FolderComponent>

          <FolderComponent
            text='Alerts'
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='tooltipText'>Alerts</p>}>
            <p className='boxText'>Yes</p>
          </FolderComponent>
          <FolderComponent text='Cost Price' borderColor='var(--blue)' backgroundColor='var(--ivory)'>
            <InputAmount name='amount' value={amount} onChange={handleAmountChange} />
          </FolderComponent>
          <FolderComponent text='Sale Price' borderColor='var(--blue)' backgroundColor='var(--ivory)'>
            <p className='boxText'>Sale Price</p>
          </FolderComponent>
        </div>
      </div>
    </div>
  );
};
