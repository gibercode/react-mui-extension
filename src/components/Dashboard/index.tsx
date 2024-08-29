import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styles } from './styles';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Frame>
      <FrameContextConsumer>
        {() => {
          return (
            <Grid marginTop={'2rem'} marginLeft={'2rem'} xs={6} container columnGap={2}>
              <Grid xs={4} position={'relative'}>
                <Grid item sx={styles.box}>
                  <Typography
                    onClick={() => navigate('/')}
                    style={{
                      position: 'absolute',
                      zIndex: 1,
                      fontSize: 12,
                      color: 'red',
                    }}>
                    PARACUTIRI
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        }}
      </FrameContextConsumer>
    </Frame>
  );
};
