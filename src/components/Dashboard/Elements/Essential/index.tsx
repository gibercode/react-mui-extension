import React, { useState } from 'react';

import './styles.module.scss';
import Folder from '../../../Folder';
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
          <Folder
            borderColor={'var(--apple)'}
            backgroundColor='var(--hint)'
            tooltipContent={<p className='_tooltipText'>Elegible</p>}>
            <p className='essentialTitleGreen'>Elegible</p>
            <p className='essentialTextGreen'>Yes</p>
          </Folder>

          <Folder
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='_tooltipText'>Alerts</p>}>
            <p className='essentialTitleBlue'>Alerts</p>
            <p className='essentialTextBlue'>Yes</p>
          </Folder>
          <Folder
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='_tooltipText'>Cost Price</p>}>
            <p className='essentialTitleBlue'>Cost Price</p>

            <InputAmount name='amount' value={amount} onChange={handleAmountChange} />
          </Folder>
          <Folder
            borderColor='var(--blue)'
            backgroundColor='var(--ivory)'
            tooltipContent={<p className='_tooltipText'>Sale Pric</p>}>
            <p className='essentialTitleBlue'>Sale Price</p>

            <InputAmount name='amount' value={amount} onChange={handleAmountChange} />
          </Folder>
        </div>
      </div>
      <div className='essentialRow'>
        <div className='essentialGrid secondRow'>
          <Folder
            borderColor='var(--apple)'
            backgroundColor='var(--hint)'
            tooltipContent={<p className='_tooltipText'>Profit</p>}>
            <p className='essentialTitleGreen'>Profit</p>
            <p className='essentialTextGreen'>$2.15</p>
          </Folder>

          <Folder
            borderColor='var(--apple)'
            backgroundColor='var(--hint)'
            tooltipContent={<p className='_tooltipText'>Profit Margin</p>}>
            <p className='essentialTitleGreen'>Profit Margin</p>
            <p className='essentialTextGreen'>35.15%</p>
          </Folder>
          <Folder
            borderColor='var(--apple)'
            backgroundColor='var(--hint)'
            tooltipContent={<p className='_tooltipText'>Roi</p>}>
            <p className='essentialTitleGreen'>Roi</p>
            <p className='essentialTextGreen'>71.67%</p>
          </Folder>
          <Folder
            borderColor='var(--apple)'
            backgroundColor='var(--hint)'
            tooltipContent={<p className='_tooltipText'>Max Cost</p>}>
            <p className='essentialTitleGreen'>Max Cost</p>
            <p className='essentialTextGreen'>$2.15</p>
          </Folder>
        </div>
      </div>
      <div className='essentialRow'>
        <div className='essentialGrid thirdRow'>
          <Folder borderColor='#FF0000' backgroundColor='#FFF5F5'>
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
          </Folder>

          <Folder
            borderColor='var(--red)'
            backgroundColor='var(--cosmos)'
            tooltipContent={<p className='_tooltipText'>Breakeven</p>}>
            <p className='essentialTitleRed'>Breakeven</p>
            <p className='essentialTextRed'>$2.15</p>
          </Folder>
        </div>
      </div>
    </div>
  );
};
