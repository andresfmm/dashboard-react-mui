// NATIVE
import React, { useState, useEffect} from 'react';

// INSTALLED
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



// CUSTOM
import { theme } from '../../commons/theme';
import simpleMenu from '../../data/menu-sidebar.json';
import { closeDrawerAction } from '../../store/globals';
import { IconByString } from '../../components/IconByString';
import menuWithChildrens from '../../data/menu-submenu-sidebar.json';
import { LogoPlatform } from '../../components/LogoPlatform';



const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export const MenuSidebar = () => {

    const dispatch = useDispatch();

    // REDUX
    const { drawer }:any  = useSelector( (state:any) => state.globals );

    const [open, setOpen] = useState(false);
    const [openm, setOpenM] = useState(false);
    const [selectedItem, setSelectedItem] = useState("")

    useEffect(() => {
      setOpen(drawer);
    },[drawer]);
    

    const handleDrawerClose = async() => {
       await dispatch( closeDrawerAction() );
    };

    const handleClick = (index:any):any => {
      if (selectedItem === index) {
        setSelectedItem("")
      } else {
        setSelectedItem(index)
      }
    }
    


  return (
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ justifyContent: 'space-between' }}>
          <LogoPlatform />
            
            <Typography  component="h2">
              Firebase
            </Typography>

            <IconButton sx={{ color: '#FFFF' }} onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {simpleMenu.map((item:any, index) => ( 
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }} >
              <ListItemButton
                key={index}
                component={Link}
                to={item.to}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#FFFF'
                  }}
                >

                  <IconByString iconName={item.icon}/>
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List> 
          {menuWithChildrens.map((item:any, index:any) => ( 
            <>
               <ListItemButton onClick={ () => handleClick(index) }>
                <ListItemIcon>
                  <InboxIcon sx={{ color: '#FFFF' }}/>
                </ListItemIcon>
                <ListItemText  primary={item.text} />
                  {index === selectedItem ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse  in={index === selectedItem} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  {item.childrens.map((item:any, index:any) => ( 
                    <ListItemButton sx={{ pl: 4 }}  
                      key={index}
                      component={Link}
                      to={item.to}>
                      <ListItemIcon sx={{ color: '#FFFF' }}>
                        <IconByString iconName={item.icon}/>
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  ))}
                  </List>
                </Collapse>
            </>
          ))}
              
        </List>
      </Drawer>
  )
}
