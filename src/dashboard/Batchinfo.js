import React, { useState } from 'react';
import { Box, Paper, Switch, Select, MenuItem, Typography, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const BatchInfo = ({ showHomeIcon, onSelectBatch }) => {
  const [toggleChecked, setToggleChecked] = useState(true);
  const [selectedBatch, setSelectedBatch] = useState('');

  const handleToggleChange = (event) => {
    setToggleChecked(event.target.checked);
  };

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
    if (onSelectBatch) {
      onSelectBatch(event.target.value);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2, marginLeft: -2 }}>
      <Paper sx={{ padding: 1, backgroundColor: '#f0f0f0', width: '57%', height: 40, display: 'flex', alignItems: 'center' }}>
        {showHomeIcon && (
          <IconButton sx={{ marginLeft: 1, backgroundColor: 'white' }}>
            <HomeIcon sx={{ color: 'black', borderRadius: '50%' }} />
          </IconButton>
        )}
        <Switch
          checked={toggleChecked}
          onChange={handleToggleChange}
          color="primary"
          sx={{
            marginLeft: 1,
            marginRight: 2,
            '& .MuiSwitch-switchBase': {
              color: '#3C9D00',
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#F24E1E',
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#FFFFFF',
              boxShadow: '-2px -2px 6px grey',
            },
            '& .MuiSwitch-track': {
              backgroundColor: '#FFFFFF', 
              boxShadow: '2px 2px 6px grey', 
            },
          }}
        />
        <Select
          id="select-batch"
          value={selectedBatch}
          onChange={handleBatchChange}
          displayEmpty
          sx={{ marginRight: 2, minWidth: 500, backgroundColor: 'white', height: 40 }}
        >
          <MenuItem value="">Select batch</MenuItem>
          <MenuItem value={'ZX10R'}>ZX10R</MenuItem>
          <MenuItem value={'R15'}>R15</MenuItem>
          <MenuItem value={'220CC'}>220CC</MenuItem>
          <MenuItem value={40}>Batch 4</MenuItem>
        </Select>
      </Paper>
      <Paper sx={{ padding: 1, backgroundColor: '#f0f0f0', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box textAlign="center">
          <Typography>Total Students</Typography>
          <Typography fontWeight="bold">454</Typography>
        </Box>
      </Paper>
      <Paper sx={{ padding: 1, backgroundColor: '#f0f0f0', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box textAlign="center">
          <Typography>Active Students</Typography>
          <Typography fontWeight="bold">424</Typography>
        </Box>
      </Paper>
      <Paper sx={{ padding: 1, backgroundColor: '#f0f0f0', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box textAlign="center">
          <Typography>Active Queries</Typography>
          <Typography fontWeight="bold">26</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default BatchInfo;
