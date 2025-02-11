import React from 'react';

import './styles.module.scss';
import { useFontSizeStore } from '../../../../store/resource';

const feesData = [
  { name: 'FBA Fee', source: 'Amazon', amount: '$00.00' },
  { name: 'Closing Fee', source: 'Amazon', amount: '$00.00' },
  { name: 'Storage Fee', source: 'Amazon', amount: '$00.00' },
  { name: 'Prep Fee', source: 'Amazon', amount: '$00.00' },
  { name: 'Inbound Shipping', source: 'Amazon', amount: '$00.00' },
  { name: 'Inbound Placement', source: 'Amazon', amount: '$00.00' },
  { name: 'Misc Fee', source: 'Amazon', amount: '$00.00' },
  { name: 'Misc Fee (% of cost)', source: 'Amazon', amount: '$00.00' },
];

export const Fees = () => {
  const fontSize = useFontSizeStore((state) => state.fontSize);
  return (
    <div className='_feesMain' style={{ '--dynamic-font-size': fontSize } as React.CSSProperties}>
      <table className='_tableContainer'>
        <thead className='_tableHeader'>
          <tr>
            <th className='_tableHeaderCell'>
              <p className='_feesHeader'>Name</p>
            </th>
            <th className='_tableHeaderCell'>
              <p className='_feesHeader'>Source</p>
            </th>
            <th className='_tableHeaderCell'>
              <p className='_feesHeader'>Amount</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {feesData.map((fee) => (
            <tr className='_tableRow' key={`fee-${fee.name}`}>
              <td className='_tableCell'>
                <p className='_feesValue '>{fee.name}</p>
              </td>
              <td className='_tableCell'>
                <p className='_feesValue '>{fee.source}</p>
              </td>
              <td className='_tableCell'>
                <p className='_feesValue '>{fee.amount}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
