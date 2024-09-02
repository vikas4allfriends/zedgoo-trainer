import React from 'react';
import {  List, ListItem,ListItemText } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import { AppBar, Toolbar, Typography, Drawer, Box } from '@mui/material';


const drawerWidth = 240;

function Dashboard() {
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

     
      
      <Typography variant="h5" sx={{ margin:2 }}>
        axeTyo
      </Typography>
      <Box sx={{ flexGrow: 1 }}>

      <List>
        <ListItem >
  
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem >
      
          <ListItemText primary="Organization Management" />
        </ListItem>
        <ListItem >
        
          <ListItemText primary="Content Management" />
        </ListItem>
      </List>
      </Box>
      <Box>

      <List>
        <ListItem >
      <ListItemText primary="Logout" />
        </ListItem>
        <ListItem >
          
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem >
          
          <ListItemText primary="Help" />
        </ListItem>
      </List>
      </Box>
         
    
    </Drawer>
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <AppBar position="sticky" sx={{ backgroundColor: '#DCDCDC', height: '50px' }}>
        <Toolbar sx={{ minHeight: '50px', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1 }} />
          
          <NotificationsNoneIcon sx={{ color: 'black', marginRight: 2 }} />
          <AccountCircleIcon sx={{ color: 'black', cursor: 'pointer' }} />
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1 ,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',}}>

        <Typography variant="h6" sx={{ color: '#999' }}>
        Nothing to Show
        </Typography>
            
            </Box>
      </Box>
    </Box>

  
  );
}

export default Dashboard;