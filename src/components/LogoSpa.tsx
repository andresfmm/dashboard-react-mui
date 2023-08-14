// NATIVE
import React, { useState, useEffect } from 'react';


// INSTALLED
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { getUrlAvatarSpa } from '../commons/utils';
import { Skeleton } from '@mui/material';

// CUSTOM


export const LogoSpa = () => {


  // REDUX
  const { spa }  = useSelector( (state:any) => state );

  const [spaname, setSpaname] = useState('');
  const [spa_logo_platarforma, setSpaLogoPlataforma] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setSpaLogoPlataforma(spa.spa_src_avatar_spa);
  }, []);

  useEffect(() => {
    setSpaname(spa.spa_name);
  }, []);


  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        borderRadius: 1,
      }}
    >
      {
        !loaded &&
        <Skeleton style={{ marginTop: 30, marginLeft: 30 }} variant="circular" width={70} height={70} />
      }

      <Avatar
        alt={spaname}
        src={` ${getUrlAvatarSpa()+'/'+spa_logo_platarforma}`}
        sx={{ width: 75, height: 75, m:3 }}
        style={loaded ? {} : { display: 'none' }}
        onLoad={ () => setLoaded(true) }
      />
    </Box>
  )
}
