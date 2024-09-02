import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, Box, Popover, Switch, FormControlLabel } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DashBoard from './list'; // Adjust the path as needed
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

const PopupComponent = ({ anchorEl, handleClose }) => {
  const [checked, setChecked] = useState(false);
  const [label, setLabel] = useState('Enable');
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
    setLabel(event.target.checked ? 'Disable' : 'Enable');
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" component="div">
          Account Setting
        </Typography>
        <Typography variant="subtitle1" fontWeight={'bold'} gutterBottom>
          Auto Share
        </Typography>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleSwitchChange} />}
          label={label}
        />
      </Box>
    </Popover>
  );
};

const Layout = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopupOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopupClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#2A2927',
            color: 'white',
          },
        }}
      >
        <Box sx={{ overflow: 'auto', borderBottom: '2px solid #3D3D4E' }}>
          <Typography variant="h4" noWrap sx={{ padding: 2, paddingLeft: 6, paddingBottom: 4 }}>
            ZedGoo
          </Typography>
          <Typography noWrap sx={{ padding: 2, '&:hover': { backgroundColor: '#FFFFFF50' } }}>
            MAIN MENU
          </Typography>
        </Box>
        <DashBoard />
      </Drawer>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <AppBar position="sticky" sx={{ backgroundColor: '#DCDCDC', height: '50px' }}>
          <Toolbar sx={{ minHeight: '50px', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }} />
            <MessageIcon sx={{ color: 'black', marginRight: 2 }} />
            <NotificationsNoneIcon sx={{ color: 'black', marginRight: 2 }} />
            <AccountCircleIcon sx={{ color: 'black', cursor: 'pointer' }} onClick={handlePopupOpen} />
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1, transition: 'filter 0.3s', filter: anchorEl ? 'blur(5px)' : 'none', p: 2 }}>
        
          <Outlet />
        </Box>
      </Box>
      <PopupComponent anchorEl={anchorEl} handleClose={handlePopupClose} />
    </Box>
  );
};

export default Layout;
