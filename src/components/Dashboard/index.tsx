import React from 'react';

import { useNavigate } from 'react-router-dom';
import './styles.module.scss';

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: '2rem' }}>
      <div style={{ position: 'relative' }}>
        <div className='box2'>
          <p onClick={() => navigate('/')} className='textTwo' style={{ cursor: 'pointer' }}>
            COME BACK
          </p>
        </div>
      </div>
    </div>
  );
};
