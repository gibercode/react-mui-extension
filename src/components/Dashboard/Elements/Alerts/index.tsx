import React, { useState } from 'react';

import './styles.module.scss';
import { useFontSizeStore } from '../../../../store/resource';

export const Alerts = ({ isPanelOpen }) => {
  const options = ['Latest', '1 month', '3 months', '6 months', 'All'];
  const [activeChip, setActiveChip] = useState('Latest');
  const fontSize = useFontSizeStore((state) => state.fontSize);

  return (
    <div className='_alertsMain' style={{ '--dynamic-font-size': fontSize } as React.CSSProperties}>
      <div className='_alertsColumn'>
        <div className='_alertsRow'>
          <p className='_alertKey'>Amazon Share by box</p>
          <p className='_alertValueGreen'>Probably</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'>Private Label</p>
          <p className='_alertValueGreen'>Secret is not a known PL brand</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'>IP Analysis</p>
          <p className='_alertValueGreen'>No known IP issues</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'>Size</p>
          <p className='_alertValueGreen'>Standard</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'>Meltable</p>
          <p className='_alertValueGreen'>No</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'>Low Price</p>
          <p className='_alertValueYellow'>
            More profitable if you reduce your sale price below the LOW PRICE fba FEE THRESHOLD OF $10
          </p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'> Variations</p>
          <p className='_alertValueGreen'>No</p>
        </div>
      </div>

      {isPanelOpen && <div className='_middleLine' />}

      <div className='_alertsColumn'>
        <div className='_chipsContainer'>
          {options.map((option) => (
            <button
              key={option}
              className={`_chip ${activeChip === option ? '_chipActive' : ''}`}
              onClick={() => setActiveChip(option)}>
              {option}
            </button>
          ))}
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'>BSR (top %)</p>
          <p className='_alertValueBlue'>734 (0.02%)</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'>Buy Box</p>
          <p className='_alertValueBlue'>$13.98</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'>Amazon</p>
          <p className='_alertValueBlue'> By box $13.98</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'>Lowest FBA (Sellers)</p>
          <p className='_alertValueBlue'>-</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'>Lowest FBM (Sellers)</p>
          <p className='_alertValueBlue'>$13.98</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'>Keepa BSR Drops </p>
          <p className='_alertValueBlue'>68 last 30 days</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'>Net BB price changes</p>
          <p className='_alertValueBlue'>1 last 30 days</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'> Estimated Sales</p>
          <p className='_alertValueBlue'>4,876 month</p>
        </div>
        <div className='_alertsRow'>
          <p className='_alertKey'> Est. time to sale</p>
          <p className='_alertValueBlue'>1 + days</p>
        </div>
        <div className='_alertRowNoBorder'>
          <p className='_alertKey'> Last Checked 1 day ago</p>
        </div>
      </div>
    </div>
  );
};
