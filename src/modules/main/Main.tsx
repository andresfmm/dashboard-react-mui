
// NATIVE
import React from 'react';


// INSTALLED
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';


// CUSTOM
// import store from './store/store';
import { Header } from '../header/Header';
import { MenuSidebar } from '../menu-sidebar/MenuSidebar';
import { PrivateRoutes } from '../../routers/PrivateRoutes';
import { Navigator } from '../../routers/Navigator';
import { Router } from '../../routers/Router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Forms } from '../../pages/Forms';
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
