import React, { useState } from 'react';
import { Tabs, Tab, Box, Paper, Avatar,Button, Typography, Grid, IconButton, Input, Divider } from '@mui/material';
import { BorderAll, Mic, Send } from '@mui/icons-material';
import BatchInfo from './Batchinfo';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import IosShareIcon from '@mui/icons-material/IosShare';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const messages = [
  {
    name: "Piyush Kumar",
    description: "Lorem ipsum dolor sit amet consectetur. Volutpat platea semper pellentesque nec facilisis viverra. Sit a et quis lacinia mattis tellus aliquam molestie non. Purus sit auctor magna porttitor egestas",
    avatar: "path_to_avatar_image"
  },
];

const students = Array(10).fill({
  profile: "path_to_profile_image",
  name: "Ganga",
  batchId: 29912,
});

const BatchList = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const handleSelectBatch = (batchId) => {
    setSelectedBatch(batchId);
  };

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  const iconStyle = {
    backgroundColor: 'white',
    color: '#000',
    borderRadius: '50%',
    padding: 1,
    border: '1px solid grey',
  };

  const Batchstyle = {
    backgroundColor: 'white', color: '#000', borderRadius: '50%', padding: 1 
  };

  const HeadBackgroundColor = selectedBatch ? '#FFFFFF' : '#313131';
  const HeadColor = selectedBatch ? 'black' : 'white';
  const boxBackgroundColor = selectedBatch ? '#DCDCDC' : '#3F3F3F';

  const borderStyle = {
    borderRadius: '10px 10px 0px 0px', 
    padding: 3, 
    backgroundColor: HeadBackgroundColor, 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems:'center',
    color: HeadColor,
    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.8)' 
  };

  const Cellstyle = {
    paddingTop: '5px', paddingBottom: '5px',
  };

  const tableHeadStyle = {
    backgroundColor: selectedBatch ? '#FFFFFF' : '#000000',
    color: selectedBatch ? '#000000' : '#FFFFFF',
  };

  const cellTextStyle = {
    color: selectedBatch ? '#000000' : '#FFFFFF',
  };

  const evenRowStyle = {
    backgroundColor: selectedBatch ? '#DCDCDC' : '#3F3F3F', 
    ...cellTextStyle,
  };

  const oddRowStyle = {
    backgroundColor: selectedBatch ? '#FFFFFF' : '#313131', 
    ...cellTextStyle,
  };

  const tabStyle = {
    color: HeadColor,
  };
  const Buttonstyle={
    marginLeft:4,
    marginRight:'1rem',
    color:'black',
    border: '1px solid black',
    fontSize: '10px', 
    borderRadius: '20px',
    padding:'3px'
  };

  return (
    <Box>
      <BatchInfo showHomeIcon={true} onSelectBatch={handleSelectBatch} />
      <Box sx={{ marginLeft: '1rem' }}>
        <Grid container>
          <Grid item xs={6} sx={{ backgroundColor: boxBackgroundColor, color: 'white', borderRadius: '10px', position: 'relative', height: '100%' }}>
            <Box style={borderStyle}>
              {selectedMessage ? (
                  <>
                  <ArrowBackIcon sx={{marginLeft:1}}/>
                    <Avatar src={selectedMessage.avatar} sx={{width: '40px', height: '40px'}} />
                    <Typography variant="body1" component="div" sx={{ marginLeft: 1 }}>
                      {`${selectedMessage.name} (Batch ID: ${selectedMessage.batchId})`}
                    </Typography>
                  </>
                ) : (
                  <Typography variant="h6" component="div" sx={{ marginLeft: 2 }}>
                    {`Broadcast ${selectedBatch ? `for Batch ID: ${selectedBatch}` : ''}`}
                  </Typography>
                )}
              {selectedMessage ? (
                <Box>
                    <Button variant="outlined" style={Buttonstyle}>Mark Done</Button>
                    <Button variant="outlined" style={Buttonstyle} >Remote Access</Button>
                </Box>
              ) : (
                <IosShareIcon sx={{ marginRight: '1rem', ...iconStyle }} />
              )}
            </Box>

            <Grid sx={{ padding: 2, paddingBottom: '75px', height: 'calc(100vh - 250px)', marginTop: 2 }}>
              {selectedMessage ? (
                <Paper sx={{ padding: 2 }}>
                  <Typography variant="body1">{selectedMessage.description}</Typography>
                </Paper>
              ) : (
                <Typography variant="body1" sx={{ color: HeadColor }}>
                
                </Typography>
              )}
            </Grid>

            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: boxBackgroundColor, padding: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '63px', backgroundColor: HeadBackgroundColor, boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.6)' }}>
                <Input placeholder="Reply" sx={{ flex: 1, paddingLeft: '1rem', color: HeadColor, '& .MuiInputBase-input': { color: HeadColor } }} disableUnderline />
                <IconButton>
                  <AttachFileIcon style={Batchstyle} />
                </IconButton>
                <IconButton>
                  <Mic style={Batchstyle} />
                </IconButton>
                <IconButton>
                  <Send style={Batchstyle} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          
          {/* Right side with tabs and detailed message view */}
          <Grid item xs={5.6} sx={{ marginLeft: '2rem', padding: 2, backgroundColor: boxBackgroundColor, color: 'black', borderRadius: '10px' }}>
            <Tabs value={tabIndex} onChange={handleTabChange}>
              <Tab label="Active Students" style={tabStyle}/>
              <Tab label="Active Queries" style={tabStyle} />
              <Tab label="Resolved Queries" style={tabStyle}/>
            </Tabs>
            <Box>
              {tabIndex === 0 && (
                <Table sx={{ marginTop: 1, border: '1px solid grey', padding: 1 }}>
                  <TableHead>
                    <TableRow sx={tableHeadStyle}>
                      <TableCell style={{...Cellstyle, ...cellTextStyle}}>Profile</TableCell>
                      <TableCell style={{...Cellstyle, ...cellTextStyle}}>Name</TableCell>
                      <TableCell style={{...Cellstyle, ...cellTextStyle}}>Batch ID</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {students.map((student, index) => (
                      <TableRow
                        key={index}
                        sx={index % 2 === 0 ? evenRowStyle : oddRowStyle}
                      >
                        <TableCell style={{...Cellstyle, ...cellTextStyle}}>
                          <Avatar src={student.profile} sx={{ width: '30px', height: '30px' }} />
                        </TableCell >
                        <TableCell style={{...Cellstyle, ...cellTextStyle}}>
                          <Typography variant="body1">{student.name}</Typography>
                        </TableCell>
                        <TableCell style={{...Cellstyle, ...cellTextStyle}}>
                          <Typography variant="body1">{student.batchId}</Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}

              {tabIndex === 1 && (
                <Box>
                  {messages.map((message, index) => (
                    <Paper 
                      key={index} 
                      sx={{ padding: 2, marginBottom: 2, cursor: 'pointer' }}
                      onClick={() => handleSelectMessage(message)} // Handle message click
                    >
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Typography variant="subtitle1">{message.name}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2">23:24</Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ marginY: 1 }} />
                      <Typography variant="body1" sx={{ marginTop: 1 }}>
                        {message.description}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              )}

              {tabIndex === 2 && (
                <Box>
                  {messages.map((message, index) => (
                    <Paper key={index} sx={{ padding: 2, marginBottom: 2 }}>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Typography variant="subtitle1">{message.name}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2">23:24</Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ marginY: 1 }} />
                      <Typography variant="body1" sx={{ marginTop: 1 }}>
                        {message.description}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BatchList;
