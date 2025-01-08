import React from 'react';
import './styles.module.scss';

const offersData = [
  { seller: 'AMZ', stock: '27+', price: '$16.17', profit: '-$1.41', roi: '-18%' },
  { seller: 'FBM', stock: '16', price: '$16.17', profit: '-$1.41', roi: '-$1.41' },
  { seller: 'FBA', stock: '72', price: '$19.19', profit: '-$1.16', roi: '-$1.16' },
  { seller: 'FBA', stock: '10', price: '$19.99', profit: '-$1.84', roi: '-$1.84' },
  { seller: 'FBA', stock: '24', price: '$22.49', profit: '$3.97', roi: '$3.97' },
  { seller: 'FBM', stock: '150', price: '$23.98', profit: '$5.23', roi: '$5.23' },
  { seller: 'FBM', stock: '69', price: '$24.29', profit: '$5.50', roi: '$5.50' },
  { seller: 'FBM', stock: '50', price: '$26.99', profit: '$7.79', roi: '$7.79' },
  { seller: 'FBM', stock: '5', price: '$26.96', profit: '$10.32', roi: '$10.32' },
];

export const Offers = () => {
  return (
    <div className='_offersMain'>
      <div className='_offersHeader'>
        <div className='_offersHeaderCell'>
          <p className='_offersHeaderValue '>Offers: 20</p>
        </div>
        <div className='_offersHeaderCell'>
          <p className='_offersHeaderValue '>AMZ</p>
        </div>
        <div className='_offersHeaderCell'>
          <p className='_offersHeaderValue '>FBA: 4</p>
        </div>
        <div className='_offersHeaderCell'>
          <p className='_offersHeaderValue '>FBM: 16</p>
        </div>
      </div>
      <table className='_offersTableContainer'>
        <thead className='_offersTableHeader'>
          <tr>
            <th className='_offersTableHeaderCell'>
              <p className='_offersValue '>Seller</p>
            </th>
            <th className='_offersTableHeaderCell'>
              <p className='_offersValue '>Stock</p>
            </th>
            <th className='_offersTableHeaderCell'>
              <p className='_offersValue '>Price</p>
            </th>
            <th className='_offersTableHeaderCell'>
              <p className='_offersValue '>Profit</p>
            </th>
            <th className='_offersTableHeaderCell'>
              <p className='_offersValue '>ROI</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {offersData.map((offer, index) => (
            <tr className='_offersTableRow' key={`offer-${index}`}>
              <td className='_offersTableCell'>
                <p className='_offersValue '>{offer.seller}</p>
              </td>
              <td className='_offersTableCell'>
                <p className='_offersValue '>{offer.stock}</p>
              </td>
              <td className='_offersTableCell'>
                <p className='_offersValue '>{offer.price}</p>
              </td>
              <td className={`_offersTableCell ${offer.profit.startsWith('-') ? '_negative' : '_positive'}`}>
                <p className='_offersValue '>{offer.profit}</p>
              </td>
              <td className={`_offersTableCell ${offer.roi.startsWith('-') ? '_negative' : '_positive'}`}>
                <p className='_offersValue '>{offer.roi}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
