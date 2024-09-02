import * as React from 'react';
import { Typography, Grid, FormControl, FormControlLabel, FormGroup, Checkbox, Box } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Notifications() {
  return (
    <Grid container spacing={1} sx={{ borderRadius: '5px', marginLeft: '2px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 1)' }}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ marginLeft: '1rem' }}>Notifications</Typography>
        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'black' }}></Box>
        <FormControl component="fieldset" variant="standard" sx={{ marginTop: '1rem' }}>
          <FormGroup sx={{ marginLeft: '1rem' }}>
            {[
              { label: <Box display="flex" alignItems="center"><Typography>Title</Typography><UnfoldMoreIcon fontSize="7px" /></Box> },
              { label: "You can't compress the program without quantifying the open-source SSL certificate" },
              { label: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!" },
              { label: "We need to bypass the neural TCP card!" },
              { label: "The SAS interface is down, bypass the open-source  so we can backup the mainframe." },
              { label: "I'll parse the wireless SSL protocol, that should drive the API panel!" },
              { label: "Use the digital TLS panel, then you can transmit the haptic system!" },
              { label: "The UTF8 application is down, parse the neural bandwidth so we can parse the exabyte!" },
              { label: "Generating the driver won't do anything, we need to quantify the pixels in 1080p!" }
            ].map((item, index) => (
              <Box key={index} sx={{ border: '1px solid #CFCECE', borderRadius: '4px', padding: '0 0.3rem', height: '40px', display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#CFCECE' } }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '42rem', alignItems: 'center' }}>
                      <Typography sx={{ flexGrow: 1 }}>{item.label}</Typography>
                    </Box>
                  }
                />
                <MoreHorizIcon sx={{position:'absolute',right:'8px',marginLeft:2,
                      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
                      padding: '2px',
                      borderRadius: '5px',cursor:'pointer'
                      
                    }}/>
              </Box>
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}
