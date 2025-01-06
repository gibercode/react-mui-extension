import React, { useState } from 'react';
import GeneralInput from '../../../GeneralInput';
import './styles.module.scss';
import GeneralSelect from '../../../GeneralSelect';

export const Settings = () => {
  const [selected, setSelected] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <div className='settingsMain'>
      <div className='settingsRow'>
        <div className='settingsGrid firstRow'>
          <p className='settingTitle'>User info</p>
          <p className='settingTitle'></p>
          <p className='settingTitle'>User preferences</p>
          <p className='settingTitle'>Fees</p>
        </div>
      </div>

      <div className='settingsRow'>
        <div className='settingsGrid secondRow'>
          <div>
            <GeneralInput
              name='username'
              label='Username'
              placeholder='Username'
              value='pablotorrealba'
              onChange={() => {}}
              disabled
              infoTooltip='Username'
              tooltipClassName='_infoIcon'
            />
            <GeneralInput
              name='password'
              label='Password'
              placeholder='Password'
              value='********'
              onChange={() => {}}
              disabled
              infoTooltip='Password'
              tooltipClassName='_infoIcon'
            />
            <GeneralInput
              name='mail'
              label='Mail'
              placeholder='Mail'
              value='pablotorrealba@icloud.com'
              onChange={() => {}}
              disabled
              infoTooltip='Mail'
              tooltipClassName='_infoIcon'
            />
            <div className='_buttonsContainer'></div>
          </div>

          <div>
            <GeneralSelect
              name='subscription'
              label='Subscription'
              placeholder='Subscription'
              value={selected}
              onChange={handleChange}
              options={[
                { value: 'Premium', label: 'Premium' },
                { value: 'Standard', label: 'Standard' },
              ]}
              infoTooltip='Subscription'
              tooltipClassName='_infoIcon'
            />
            <GeneralInput
              name='homeMarketplace'
              label='Home Market place'
              placeholder='Home Market place'
              value='amazon.com'
              onChange={() => {}}
              disabled
              infoTooltip='Home Market place'
              tooltipClassName='_infoIcon'
            />
          </div>

          <div>
            <GeneralInput
              name='minimumProfit'
              label='Minimum Profit'
              placeholder='Minimum Profit'
              value='$'
              onChange={() => {}}
              disabled
              infoTooltip='Minimum Profit'
              tooltipClassName='_infoIcon'
            />
            <GeneralInput
              name='minimumROI'
              label='Minimum ROI (%)'
              value=''
              onChange={() => {}}
              disabled
              infoTooltip='Minimum ROI'
              tooltipClassName='_infoIcon'
            />
            <GeneralInput
              name='minimumBSR'
              label='Minimum BSR (%)'
              value=''
              onChange={() => {}}
              disabled
              infoTooltip='Minimum BSR'
              tooltipClassName='_infoIcon'
            />
            <GeneralInput
              name='maximumBSR'
              label='Maximum BSR (%)'
              value=''
              onChange={() => {}}
              disabled
              infoTooltip='Maximum BSR'
              tooltipClassName='_infoIcon'
            />
          </div>

          <div>
            <GeneralInput
              name='prepFee'
              label='Prep fee'
              value='$'
              onChange={() => {}}
              disabled
              infoTooltip='Prep fee'
              tooltipClassName='_infoIcon'
            />
            <GeneralInput
              name='miscFee'
              label='Misc fee'
              value='$'
              onChange={() => {}}
              disabled
              infoTooltip='Misc fee'
              tooltipClassName='_infoIcon'
            />
            <GeneralInput
              name='miscFeePercent'
              label='Misc fee (%)'
              value=''
              onChange={() => {}}
              disabled
              infoTooltip='Misc fee percentage'
              tooltipClassName='_infoIcon'
            />
            <GeneralInput
              name='inboundShipping'
              label='Inbound shipping'
              value=''
              onChange={() => {}}
              disabled
              infoTooltip='Inbound shipping'
              tooltipClassName='_infoIcon'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
