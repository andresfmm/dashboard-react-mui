// NATIVE
import React, { useEffect, useState } from 'react';


// INSTALLED
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { getUrlAvatarPlataforma } from '../commons/utils';
import { Skeleton } from '@mui/material';


// CUSTOM


export const LogoPlatform = () => {


  // REDUX
  const { spa }  = useSelector( (state:any) => state );

  const [spa_logo_platarforma, setSpaLogoPlataforma] = useState('');
  const [spaname, setSpaname] = useState('');
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    setSpaname(spa.spa_name);
  }, []);


  useEffect(() => {
    setSpaLogoPlataforma(spa.spa_src_avatar_spa);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        width: '100%',
        height: 110,
        borderRadius: 1,
      }}
    >
      {
        !loaded &&
        <Skeleton style={{ marginTop: 30, marginRight: 30 }} variant="circular" width={70} height={70} />
      }

      <Avatar
        alt={spaname}
        src={` ${getUrlAvatarPlataforma()+'/epa.jpg'}`} 
        sx={{ width: 75, height: 75, m:3 }}
        style={loaded ? {} : { display: 'none' }}
        onLoad={ () => setLoaded(true) }
      />
      
      
    </Box>
  )
}

