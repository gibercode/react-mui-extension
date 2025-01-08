import React, { useState } from 'react';

import './styles.module.scss';
import { FolderComponent } from '../../../Folder';
import InputAmount from '../../../InputAmount';
export const Advanced = () => {
  const [amount, setAmount] = useState('0.00');

  const handleAmountChange = (value: string) => {
    console.log('Formatted Value:', value);
    setAmount(value);
  };

  return (
    <div className='advancedMain'>
      <div className='advancedRow'>
        <div className='advancedGrid firstRow'>
          <FolderComponent
            text='Fulfilment'
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='tooltipText'>Fulfilment</p>}>
            <p className='advancedTextBlue'>Yes</p>
          </FolderComponent>

          <FolderComponent
            text='FBM Cost'
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='tooltipText'>FBM Cost</p>}>
            <InputAmount name='amount' value={amount} onChange={handleAmountChange} />
          </FolderComponent>
          <FolderComponent text='Profit' borderColor='var(--blue)' backgroundColor='var(--ivory)'>
            <p className='advancedTextBlue'>$1.40</p>
          </FolderComponent>
          <FolderComponent text='ROI' borderColor='var(--blue)' backgroundColor='var(--ivory)'>
            <p className='boxText'>71.67%</p>
          </FolderComponent>
        </div>
      </div>
      <div className='advancedRow'>
        <div className='advancedGrid secondRow'>
          <FolderComponent
            text='Max cost'
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='tooltipText'>Max cost</p>}>
            <p className='advancedTextBlue'>%17.65%</p>
          </FolderComponent>

          <FolderComponent
            text='Profit Margin'
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='tooltipText'>Profit Margin</p>}>
            <p className='advancedTextBlue'>35.15%</p>
          </FolderComponent>
          <FolderComponent
            text='Breaken Sale'
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='tooltipText'>Breaken Sale</p>}>
            <p className='advancedTextBlue'>$1.40</p>
          </FolderComponent>
          <FolderComponent
            text='Est. Amz. Pay'
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='tooltipText'>Est. Amz. Pay</p>}>
            <p className='advancedTextBlue'>$6.15</p>
          </FolderComponent>
        </div>
      </div>
      <div className='advancedRow'>
        <div className='advancedGrid thirdRow'>
          <FolderComponent
            text='Quantity'
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='tooltipText'>Quantity</p>}>
            <p className='essentialTextBlue'>$2.15</p>
          </FolderComponent>

          <FolderComponent
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='tooltipText'>Advanced Metrics Details</p>}>
            <div className='_advancedMetricsContainer'>
              <div className='_advancedMetricsRow'>
                <div className='_advancedMetricsLabelContainer'>
                  <p className='_advancedMetricsLabel'>Cost</p>
                </div>
                <div className='_advancedMetricsValueContainer'>
                  <p className='_advancedMetricsValue'>$00</p>
                </div>
              </div>
              <div className='_advancedMetricsRow'>
                <div className='_advancedMetricsLabelContainer'>
                  <p className='_advancedMetricsLabel'>Sale</p>
                </div>
                <div className='_advancedMetricsValueContainer'>
                  <p className='_advancedMetricsValue'>$00</p>
                </div>
              </div>
              <div className='_advancedMetricsRow'>
                <div className='_advancedMetricsLabelContainer'>
                  <p className='_advancedMetricsLabel'>Total profit</p>
                </div>
                <div className='_advancedMetricsValueContainer'>
                  <p className='_advancedMetricsValue'>$00</p>
                </div>
              </div>
            </div>
          </FolderComponent>
        </div>
      </div>
    </div>
  );
};
