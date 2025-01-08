import React, { useState } from 'react';

import './styles.module.scss';
import { FolderComponent } from '../../../Folder';
import InputAmount from '../../../InputAmount';
export const Essential = () => {
  const [amount, setAmount] = useState('0.00');

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  return (
    <div className='essentialMain'>
      <div className='essentialRow'>
        <div className='essentialGrid firstRow'>
          <FolderComponent
            text='Elegible'
            borderColor='var(--apple)'
            backgroundColor='var(--hint)'
            tooltipContent={<p className='tooltipText'>Elegible</p>}>
            <p className='essentialTextGreen'>Yes</p>
          </FolderComponent>

          <FolderComponent
            text='Alerts'
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='tooltipText'>Alerts</p>}>
            <p className='essentialTextBlue'>Yes</p>
          </FolderComponent>
          <FolderComponent text='Cost Price' borderColor='var(--blue)' backgroundColor='var(--ivory)'>
            <InputAmount name='amount' value={amount} onChange={handleAmountChange} />
          </FolderComponent>
          <FolderComponent text='Sale Price' borderColor='var(--blue)' backgroundColor='var(--ivory)'>
            <p className='boxText'>Sale Price</p>
          </FolderComponent>
        </div>
      </div>
      <div className='essentialRow'>
        <div className='essentialGrid secondRow'>
          <FolderComponent
            text='Profit'
            borderColor='var(--apple)'
            backgroundColor='var(--hint)'
            tooltipContent={<p className='tooltipText'>Profit</p>}>
            <p className='essentialTextGreen'>$2.15</p>
          </FolderComponent>

          <FolderComponent
            text='Profit Margin'
            borderColor='var(--apple)'
            backgroundColor='var(--hint)'
            tooltipContent={<p className='tooltipText'>Profit Margin</p>}>
            <p className='essentialTextGreen'>35.15%</p>
          </FolderComponent>
          <FolderComponent
            text='Roi'
            borderColor='var(--apple)'
            backgroundColor='var(--hint)'
            tooltipContent={<p className='tooltipText'>Roi</p>}>
            <p className='essentialTextGreen'>71.67%</p>
          </FolderComponent>
          <FolderComponent
            text='Max Cost'
            borderColor='var(--apple)'
            backgroundColor='var(--hint)'
            tooltipContent={<p className='tooltipText'>Max Cost</p>}>
            <p className='essentialTextGreen'>$2.15</p>
          </FolderComponent>
        </div>
      </div>
      <div className='essentialRow'>
        <div className='essentialGrid thirdRow'>
          <FolderComponent
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='tooltipText'>Metrics Details</p>}>
            <div className='_metricsContainer'>
              <div className='_metricsRow'>
                <div className='_metricLabelContainer'>
                  <p className='_metricLabel'>BSR</p>
                </div>
                <div className='_metricValueContainer'>
                  <p className='_metricValue'>306 (1%)</p>
                </div>
              </div>
              <div className='_metricsRow'>
                <div className='_metricLabelContainer'>
                  <p className='_metricLabel'>P/m sales</p>
                </div>
                <div className='_metricValueContainer'>
                  <p className='_metricValue'>30k +</p>
                </div>
              </div>
              <div className='_metricsRow'>
                <div className='_metricLabelContainer'>
                  <p className='_metricLabel'>FBA Sellers</p>
                </div>
                <div className='_metricValueContainer'>
                  <p className='_metricValue'>1</p>
                </div>
              </div>
              <div className='_metricsRow'>
                <div className='_metricLabelContainer'>
                  <p className='_metricLabel'>FBM Sellers</p>
                </div>
                <div className='_metricValueContainer'>
                  <p className='_metricValue'>30</p>
                </div>
              </div>
            </div>
          </FolderComponent>

          <FolderComponent
            text='Breakeven'
            borderColor='var(--red)'
            backgroundColor='var(--cosmos)'
            tooltipContent={<p className='tooltipText'>Breakeven</p>}>
            <p className='essentialTextRed'>$2.15</p>
          </FolderComponent>
        </div>
      </div>
    </div>
  );
};
