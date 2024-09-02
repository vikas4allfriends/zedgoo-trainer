import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, List, ListItem, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';

const DashBoard = () => {
  const location = useLocation();

  const linkStyle = {
    display: 'block',
    color: 'white',
    textDecoration: 'none',
    width: '100%',
  };

  const getListItemStyle = (path) => ({
    backgroundColor: location.pathname === path ? '#FFFFFF80' : 'transparent',
    '&:hover': {
      backgroundColor: location.pathname === path ? '#FFFFFF50' : '#FFFFFF80',
    },
    paddingLeft: 4,
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '78vh', fontFamily: 'roboto' }}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Upper Menu */}
        <List>
          <Link to="/Dashboard" style={linkStyle}>
            <ListItem disableGutters sx={getListItemStyle('/Dashboard')}>
              <Typography variant="body1">DASHBOARD</Typography>
            </ListItem>
          </Link>
          <Link to="/student" style={linkStyle}>
            <ListItem disableGutters sx={getListItemStyle('/student')}>
              <Typography variant="body1">STUDENT LIST</Typography>
            </ListItem>
          </Link>
          <Link to="/batchlist" style={linkStyle}>
            <ListItem disableGutters sx={getListItemStyle('/batchlist')}>
              <Typography variant="body1">BATCH LIST</Typography>
            </ListItem>
          </Link>
          <Link to="/broadcast" style={linkStyle}>
            <ListItem disableGutters sx={getListItemStyle('/broadcast')}>
              <Typography variant="body1">BROADCAST</Typography>
            </ListItem>
          </Link>
        </List>
      </Box>
      <Box>
        <List>
          <Link to="/settings" style={linkStyle}>
            <ListItem disableGutters sx={getListItemStyle('/settings')}>
              <Typography variant="body1">SETTINGS</Typography>
            </ListItem>
          </Link>
          <Link to="/logout" style={linkStyle}>
            <ListItem disableGutters sx={getListItemStyle('/logout')}>
              <Typography variant="body1">LOG OUT</Typography>
            </ListItem>
          </Link>
          <Link to="/about" style={linkStyle}>
            <ListItem disableGutters sx={getListItemStyle('/about')}>
              <Typography variant="body1">ABOUT</Typography>
            </ListItem>
          </Link>
          <Link to="/help" style={linkStyle}>
            <ListItem disableGutters sx={getListItemStyle('/help')}>
              <Typography variant="body1">HELP</Typography>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Box>
  );
};

export default DashBoard;
