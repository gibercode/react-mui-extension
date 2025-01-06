import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './styles.module.scss';

export const Product = () => {
  return (
    <div className='productMain'>
      <div className='productRow'>
        <p className='productName'>Neutrogena T/Gel Therapeutic Shampoo Original Formula 16 oz (Packs of 2)</p>
        <Icon icon='fluent:document-copy-48-filled' width={16} height={16} className='copyButton' />
      </div>

      <div className='productGrid firstRow'>
        <div className='propertyContainer'>
          <p className='productProperty'>
            By <span>Neutrogena</span>
          </p>
        </div>
        <div className='propertyContainer'>
          <p className='productProperty'>
            Category <span>Beauty & Personal Care</span>
          </p>
        </div>
        <div className='propertyContainer'>
          <p className='productProperty'>
            BSR <span>306 (1%)</span>
          </p>
        </div>

        <div className='propertyContainer'>
          <p className='productProperty'>
            Size <span>Standard</span>
          </p>
        </div>
      </div>
      <div className='productGrid secondRow'>
        <div className='propertyContainer'>
          <p className='productProperty'>
            UPC <span>011111020030</span>
          </p>
          <Icon icon='fluent:document-copy-48-filled' width={16} height={16} className='copyButton' />
        </div>
        <div className='propertyContainer'>
          <p className='productProperty'>
            ASIN <span>B08LM7291W</span>
          </p>
          <Icon icon='fluent:document-copy-48-filled' width={16} height={16} className='copyButton' />
        </div>
        <div className='propertyContainer'>
          <p className='productProperty'>
            W <span>1.65 in</span>
          </p>
        </div>
        <div className='propertyContainer'>
          <p className='productProperty'>
            H <span>7.44 in</span>
          </p>
        </div>
        <div className='propertyContainer'>
          <p className='productProperty'>
            L <span>1.57 in</span>
          </p>
        </div>
        <div className='propertyContainer'>
          <p className='productProperty'>
            Wt <span>4.97 oz</span>
          </p>
        </div>
      </div>
    </div>
  );
};
