import React, { useEffect, useRef, useState } from 'react';

import './styles.module.scss';
import Folder from '../../../Folder';
import InputAmount from '../../../InputAmount';
import LargeFolder from '../../../LargeFolder';

export const Essential = () => {
  const [amount, setAmount] = useState('0.00');
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const getSizeClass = (containerWidth: number) => {
    if (containerWidth < 550) return '';
    if (containerWidth < 650) return 'Medium';

    return 'Large';
  };

  return (
    <div className='essentialMain' ref={containerRef}>
      <div className='essentialRow'>
        <div className='essentialGrid firstRow'>
          <div className='_folderBoxPrimary'>
            <Folder
              borderColor={'var(--apple)'}
              backgroundColor='var(--hint)'
              tooltipContent={<p className='_tooltipText'>Elegible</p>}>
              <p className={`essentialTitleGreen${getSizeClass(containerWidth)}`}>Elegible</p>

              <p className={`essentialTextGreen${getSizeClass(containerWidth)}`}>Yes</p>
            </Folder>
          </div>

          <div className='_folderBox'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Alerts</p>}>
              <p className={`essentialTitleBlue${getSizeClass(containerWidth)}`}>Alerts</p>

              <p className={`essentialTextBlue${getSizeClass(containerWidth)}`}>Yes</p>
            </Folder>
          </div>
          <div className='_folderBox'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Cost Price</p>}>
              <p className={`essentialTitleBlue${getSizeClass(containerWidth)}`}>Cost Price</p>
              <div className='_inputBox'>
                <InputAmount name='amount' value={amount} onChange={handleAmountChange} />
              </div>
            </Folder>
          </div>
          <div className='_folderBox'>
            <Folder
              borderColor='var(--blue)'
              backgroundColor='var(--ivory)'
              tooltipContent={<p className='_tooltipText'>Sale Pric</p>}>
              <p className={`essentialTitleBlue${getSizeClass(containerWidth)}`}>Sale Price</p>

              <div className='_inputBox'>
                <InputAmount name='amount' value={amount} onChange={handleAmountChange} />
              </div>
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
              <p className={`essentialTitleGreen${getSizeClass(containerWidth)}`}>Profit</p>

              <p className={`essentialTextGreen${getSizeClass(containerWidth)}`}>$2.15</p>
            </Folder>
          </div>

          <div className='_folderBox'>
            <Folder
              borderColor='var(--apple)'
              backgroundColor='var(--hint)'
              tooltipContent={<p className='_tooltipText'>Profit Margin</p>}>
              <p className={`essentialTitleGreen${getSizeClass(containerWidth)}`}>Profit Margin</p>

              <p className={`essentialTextGreen${getSizeClass(containerWidth)}`}>35.15%</p>
            </Folder>
          </div>
          <div className='_folderBox'>
            <Folder
              borderColor='var(--apple)'
              backgroundColor='var(--hint)'
              tooltipContent={<p className='_tooltipText'>Roi</p>}>
              <p className={`essentialTitleGreen${getSizeClass(containerWidth)}`}>Roi</p>

              <p className={`essentialTextGreen${getSizeClass(containerWidth)}`}>71.67%</p>
            </Folder>
          </div>
          <div className='_folderBox'>
            <Folder
              borderColor='var(--apple)'
              backgroundColor='var(--hint)'
              tooltipContent={<p className='_tooltipText'>Max Cost</p>}>
              <p className={`essentialTitleGreen${getSizeClass(containerWidth)}`}>Max Cost</p>

              <p className={`essentialTextGreen${getSizeClass(containerWidth)}`}>$2.15</p>
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
                  <p className={`_metricLabel${getSizeClass(containerWidth)}`}>BSR</p>

                  <div className='_metricValueContainer'>
                    <p className={`_metricValue${getSizeClass(containerWidth)}`}>306 (1%)</p>
                  </div>
                </div>
                <div className='_metricColumn'>
                  <p className={`_metricLabel${getSizeClass(containerWidth)}`}>Past month sales</p>

                  <div className='_metricValueContainer'>
                    <p className={`_metricValue${getSizeClass(containerWidth)}`}>30K+</p>
                  </div>
                </div>
                <div className='_metricColumn'>
                  <p className={`_metricLabel${getSizeClass(containerWidth)}`}>FBA Sellers</p>

                  <div className='_metricValueContainer'>
                    <p className={`_metricValue${getSizeClass(containerWidth)}`}>1</p>
                  </div>
                </div>
                <div className='_metricColumn'>
                  <p className={`_metricLabel${getSizeClass(containerWidth)}`}>FBM Sellers</p>

                  <div className='_lastMetricValueContainer'>
                    <p className={`_metricValue${getSizeClass(containerWidth)}`}>0</p>
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
              <p className={`essentialTitleRed${getSizeClass(containerWidth)}`}>Breakeven</p>

              <p className={`essentialTextRed${getSizeClass(containerWidth)}`}>$2.15</p>
            </Folder>
          </div>
        </div>
      </div>
    </div>
  );
};
