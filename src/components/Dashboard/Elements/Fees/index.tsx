import React from 'react';

import './styles.module.scss';

export const Fees = () => {
  return (
    <div className='_feesMain'>
      <div className='_tableContainer'>
        <div className='_tableHeader'>
          <div className='_tableHeaderCell'>Name</div>
          <div className='_tableHeaderCell'>Source</div>
          <div className='_tableHeaderCell'>Amount</div>
        </div>
        <div className='_tableRow'>
          <div className='_tableCell'>FBA Fee</div>
          <div className='_tableCell'>Amazon</div>
          <div className='_tableCell'>$00.00</div>
        </div>
        <div className='_tableRow'>
          <div className='_tableCell'>Closing Fee</div>
          <div className='_tableCell'>Amazon</div>
          <div className='_tableCell'>$00.00</div>
        </div>
        <div className='_tableRow'>
          <div className='_tableCell'>Storage Fee</div>
          <div className='_tableCell'>Amazon</div>
          <div className='_tableCell'>$00.00</div>
        </div>
        <div className='_tableRow'>
          <div className='_tableCell'>Prep Fee</div>
          <div className='_tableCell'>Amazon</div>
          <div className='_tableCell'>$00.00</div>
        </div>
        <div className='_tableRow'>
          <div className='_tableCell'>Inbound Shipping</div>
          <div className='_tableCell'>Amazon</div>
          <div className='_tableCell'>$00.00</div>
        </div>
        <div className='_tableRow'>
          <div className='_tableCell'>Inbound Placement</div>
          <div className='_tableCell'>Amazon</div>
          <div className='_tableCell'>$00.00</div>
        </div>
        <div className='_tableRow'>
          <div className='_tableCell'>Misc Fee</div>
          <div className='_tableCell'>Amazon</div>
          <div className='_tableCell'>$00.00</div>
        </div>
        <div className='_tableRow'>
          <div className='_tableCell'>Misc Fee (% of cost)</div>
          <div className='_tableCell'>Amazon</div>
          <div className='_tableCell'>$00.00</div>
        </div>
      </div>
    </div>
  );
};
