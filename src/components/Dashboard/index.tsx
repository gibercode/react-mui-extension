import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss'

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
  
            <div style={{margin:'2rem'}}>
              <div style={{position:'relative' }} >
                <div className={styles.box}>
                  <p
                    onClick={() => navigate('/')}
                    style={{
                      position: 'absolute',
                      zIndex: 1,
                      fontSize: 12,
                      color: 'red',
                    }}>
                    PARACUTIRI
                  </p>
                </div>
              </div>
            </div>
          );
      
  
};
