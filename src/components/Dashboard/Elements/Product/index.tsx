import React from 'react';
import { Icon } from '@iconify/react';
import './styles.module.scss';
import { useFontSizeStore } from '../../../../store/resource';

export const Product = () => {
  const fontSize = useFontSizeStore((state) => state.fontSize);

  return (
    <div className='productMain' style={{ '--dynamic-font-size': fontSize } as React.CSSProperties}>
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
      </div>
      <div className='productGrid thirdRow'>
        <div className='propertyContainer'>
          <p className='productProperty'>
            Size <span>Standard</span>
          </p>
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

      <div className='_buttonsIconContainer'>
        <button className={`_addButton`} onClick={() => console.log('add product')}>
          Add Product
        </button>
        <Icon icon='fa-brands:amazon' cursor='pointer' width={24} height={20} className={`_linksIconButtons`} />

        <Icon icon='flat-color-icons:google' cursor='pointer' width={24} height={20} className={`_linksIconButtons`} />
      </div>
    </div>
  );
};
