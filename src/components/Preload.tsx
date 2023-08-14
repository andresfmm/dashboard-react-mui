// NATIVE 
import { useState } from 'react';


// INSTALLED 
import Backdrop from '@mui/material/Backdrop';
import { ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';


// CUSTOM 
import { theme } from '../commons/theme';

export const Preload = () => {

    const [isopen, setIsOpen] = useState(true);

    const handleClose = () => {
      setIsOpen(true);
    };
    

    return (
        <ThemeProvider theme={theme}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isopen}
                onClick={handleClose}
                >
                <CircularProgress color='secondary'/>
            </Backdrop>
            
        </ThemeProvider>
        
    )
}
