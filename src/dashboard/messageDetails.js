import React from 'react';
import { Box, Typography, Paper, Avatar, Grid } from '@mui/material';

const MessageDetails = ({ message }) => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar src={message.avatar} alt={message.name} sx={{ width: 60, height: 60 }} />
        </Grid>
        <Grid item>
          <Typography variant="h6">{message.name}</Typography>
          <Typography variant="body2" color="textSecondary">Timestamp: 23:24</Typography>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1">{message.description}</Typography>
      </Box>
    </Paper>
  );
};

export default MessageDetails;
