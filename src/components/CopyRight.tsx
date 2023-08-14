// NATIVE
import React from 'react';


// INSTALLED
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// CUSTOM

export const CopyRight = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link target="_blank" color="inherit" href="https://hotelpance122.com/spa">
        Hotel pance 122
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
