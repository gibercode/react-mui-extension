import React, { useState } from 'react';

import './styles.module.scss';
import Folder from '../../../Folder';
import InputAmount from '../../../InputAmount';
import LargeFolder from '../../../LargeFolder';

export const Essential = () => {
  const [amount, setAmount] = useState('0.00');

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  return (
    <div className='essentialMain'>
      <div className='essentialRow'>
        <div className='essentialGrid firstRow'>
          <div className='_folderBoxPrimary'>
            <Folder
              borderColor={'var(--apple)'}
              backgroundColor='var(--hint)'
              tooltipContent={<p className='_tooltipText'>Elegible</p>}>
              <p className='essentialTitleGreen'>Elegible</p>
              <p className='essentialTextGreen'>Yes</p>
            </Folder>
          </div>

          <div className='_folderBox'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Alerts</p>}>
              <p className='essentialTitleBlue'>Alerts</p>
              <p className='essentialTextBlue'>Yes</p>
            </Folder>
          </div>
          <div className='_folderBox'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Cost Price</p>}>
              <p className='essentialTitleBlue'>Cost Price</p>

              <InputAmount name='amount' value={amount} onChange={handleAmountChange} />
            </Folder>
          </div>
          <div className='_folderBox'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Sale Pric</p>}>
              <p className='essentialTitleBlue'>Sale Price</p>

              <InputAmount name='amount' value={amount} onChange={handleAmountChange} />
            </Folder>
          </div>
        </div>
      </div>
      <div className='essentialRow'>
        <div className='essentialGrid secondRow'>
          <div className='_folderBoxPrimary'>
            <Folder
              borderColor='var(--apple)'
              backgroundColor='var(--hint)'
              tooltipContent={<p className='_tooltipText'>Profit</p>}>
              <p className='essentialTitleGreen'>Profit</p>
              <p className='essentialTextGreen'>$2.15</p>
            </Folder>
          </div>

          <div className='_folderBox'>
            <Folder
              borderColor='var(--apple)'
              backgroundColor='var(--hint)'
              tooltipContent={<p className='_tooltipText'>Profit Margin</p>}>
              <p className='essentialTitleGreen'>Profit Margin</p>
              <p className='essentialTextGreen'>35.15%</p>
            </Folder>
          </div>
          <div className='_folderBox'>
            <Folder
              borderColor='var(--apple)'
              backgroundColor='var(--hint)'
              tooltipContent={<p className='_tooltipText'>Roi</p>}>
              <p className='essentialTitleGreen'>Roi</p>
              <p className='essentialTextGreen'>71.67%</p>
            </Folder>
          </div>
          <div className='_folderBox'>
            <Folder
              borderColor='var(--apple)'
              backgroundColor='var(--hint)'
              tooltipContent={<p className='_tooltipText'>Max Cost</p>}>
              <p className='essentialTitleGreen'>Max Cost</p>
              <p className='essentialTextGreen'>$2.15</p>
            </Folder>
          </div>
        </div>
      </div>
      <div className='essentialRow'>
        <div className='essentialGrid thirdRow'>
          <div className='_largeFolderBox'>
            <LargeFolder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Metrics</p>}>
              <div className='_metricContainer'>
                <div className='_metricColumn'>
                  <p className='_metricLabel'>BSR</p>

                  <div className='_metricValueContainer'>
                    <p className='_metricValue'>306 (1%)</p>
                  </div>
                </div>
                <div className='_metricColumn'>
                  <p className='_metricLabel'>Past month sales</p>

                  <div className='_metricValueContainer'>
                    <p className='_metricValue'>30K+</p>
                  </div>
                </div>
                <div className='_metricColumn'>
                  <p className='_metricLabel'>FBA Sellers</p>

                  <div className='_metricValueContainer'>
                    <p className='_metricValue'>1</p>
                  </div>
                </div>
                <div className='_metricColumn'>
                  <p className='_metricLabel'>FBM Sellers</p>

                  <div className='_lastMetricValueContainer'>
                    <p className='_metricValue'>0</p>
                  </div>
                </div>
              </div>
            </LargeFolder>
          </div>

          <div className='_folderBox'>
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
    </div>
  );
};
