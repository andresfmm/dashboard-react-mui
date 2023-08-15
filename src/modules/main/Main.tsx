
// NATIVE
import React from 'react';


// INSTALLED
import Box from '@mui/material/Box';
import { styled} from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


// CUSTOM
import { Header } from '../header/Header';
import { MenuSidebar } from '../menu-sidebar/MenuSidebar';
import { Router } from '../../routers/Router';
import { theme } from '../../commons/theme';





export const Main = () => {

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
       <Header />
      {/* DRAWER */}
      <MenuSidebar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Router />
      </Box>
    </Box>
    </ThemeProvider>
  )
}
