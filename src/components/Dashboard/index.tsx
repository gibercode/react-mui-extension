import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styles } from './styles';
import Frame, { FrameContextConsumer } from 'react-frame-component';

export const Dashboard = () => {
  return (
    <Frame>
      <FrameContextConsumer>
        {() => {
          return (
            <Grid marginTop={'2rem'} marginLeft={'2rem'} xs={6} container columnGap={2}>
              <Grid xs={4} position={'relative'}>
                <Grid item sx={styles.box}>
                  <Typography
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
