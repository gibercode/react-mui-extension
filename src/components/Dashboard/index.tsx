import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from '@mui/material';
import { styles } from './styles';
import { getFromStorage, saveToStorage } from '../../storageHelper';

export const Dashboard = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Hello from Dashboard!</h1>
    </div>
  );
};
