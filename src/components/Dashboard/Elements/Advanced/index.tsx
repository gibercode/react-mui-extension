import React, { useState } from 'react';

import './styles.module.scss';
import Folder from '../../../Folder';
import InputAmount from '../../../InputAmount';
import LargeFolder from '../../../LargeFolder';
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
          <div className='_folderBoxPrimary'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Fulfilment</p>}>
              <p className='advancedTitleBlue'>Fulfilment</p>
              <p className='advancedTextBlue'>Yes</p>
            </Folder>
          </div>
          <div className='_folderBox'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>FBM Cost</p>}>
              <p className='advancedTitleBlue'>FBM Cost</p>

              <InputAmount name='amount' value={amount} onChange={handleAmountChange} />
            </Folder>
          </div>
          <div className='_folderBox'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Profit</p>}>
              <p className='advancedTitleBlue'>Profit</p>
              <p className='advancedTextBlue'>$1.40</p>
            </Folder>
          </div>
          <div className='_folderBoxFinal'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>ROI</p>}>
              <p className='advancedTitleBlue'>ROI</p>
              <p className='advancedTextBlue'>71.67%</p>
            </Folder>
          </div>
        </div>
      </div>
      <div className='advancedRow'>
        <div className='advancedGrid secondRow'>
          <div className='_folderBoxPrimary'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Max cost</p>}>
              <p className='advancedTitleBlue'>Max cost</p>
              <p className='advancedTextBlue'>%17.65%</p>
            </Folder>
          </div>
          <div className='_folderBox'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Profit Margin</p>}>
              <p className='advancedTitleBlue'>Profit Margin</p>
              <p className='advancedTextBlue'>35.15%</p>
            </Folder>
          </div>
          <div className='_folderBox'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Breaken Sale</p>}>
              <p className='advancedTitleBlue'>Breaken Sale</p>
              <p className='advancedTextBlue'>$1.40</p>
            </Folder>
          </div>
          <div className='_folderBoxFinal'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Est. Amz. Pay</p>}>
              <p className='advancedTitleBlue'>Est. Amz. Pay</p>
              <p className='advancedTextBlue'>$6.15</p>
            </Folder>
          </div>
        </div>
      </div>
      <div className='advancedRow'>
        <div className='advancedGrid thirdRow'>
          <div className='_folderBoxPrimary'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Quantity</p>}>
              <p className='advancedTitleBlue'>Quantity</p>
              <InputAmount name='amount' value={amount} onChange={handleAmountChange} />
            </Folder>
          </div>
          <div className='_advancedLargeFolderBox'>
            <LargeFolder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Advanced Metrics Details</p>}>
              <div className='_advancedMetricContainer'>
                <div className='_advancedMetricColumn'>
                  <p className='_advancedMetricLabel'>Cost</p>

                  <div className='_advancedMetricValueContainer'>
                    <p className='_advancedMetricValue'>$00</p>
                  </div>
                </div>
                <div className='_advancedMetricColumn'>
                  <p className='_advancedMetricLabel'>Sale</p>

                  <div className='_advancedMetricValueContainer'>
                    <p className='_metricValue'>$00</p>
                  </div>
                </div>

                <div className='_advancedMetricColumn'>
                  <p className='_advancedMetricLabel'>Total profit</p>

                  <div className='_advancedLastMetricValueContainer'>
                    <p className='_advancedMetricValue'>$00</p>
                  </div>
                </div>
              </div>
            </LargeFolder>
          </div>
        </div>
      </div>
    </div>
  );
};
