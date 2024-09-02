import React, { useState } from 'react';
import { Avatar, Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Grid, Button } from '@mui/material';
import { Search, Visibility, VisibilityOff } from '@mui/icons-material';

const maskEnrolmentNo = (enrolmentNo) => {
  return enrolmentNo.replace(/.(?=.{0})/g, 'X');
};

const StudentsList = ({ students, onViewClick, viewedStudentId }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );
  const Cellstyle={
    paddingTop: '0px', paddingBottom: '0px'
  }
  const Eyestyle={
    cursor: 'pointer',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
    padding: '3px',
    borderRadius: '5px',
    
  }
  return (
    <Box sx={{ borderRadius: '5px', marginLeft: '2px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 1)', padding: 2, width: '65%' }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Students List</Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <IconButton>
                <Search />
              </IconButton>
            ),
          }}
        />
      </Grid>
      <TableContainer component={Paper} sx={{ marginTop: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >Profile</TableCell>
              <TableCell >Name</TableCell>
              <TableCell >Enrolment No.</TableCell>
              <TableCell >Mobile</TableCell>
              <TableCell >Email</TableCell>
              <TableCell >View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.map((student, index) => (
              <TableRow
                key={student.id}
                sx={{ backgroundColor: index % 2 === 0 ? '#DCDCDC' : 'white' }}
              >
                <TableCell style={Cellstyle}>
                  <Avatar alt={student.name} src={student.profile} sx={{width:'30px',height:'30px'}}/>
                </TableCell>
                <TableCell style={Cellstyle}>{student.name}</TableCell>
                <TableCell style={Cellstyle}>{maskEnrolmentNo(student.enrolmentNo)}</TableCell>
                <TableCell style={Cellstyle}>{student.mobile}</TableCell>
                <TableCell style={Cellstyle}>{student.email}</TableCell>
                <TableCell style={Cellstyle}>
                  <IconButton onClick={() => onViewClick(student.id)}>
                    {viewedStudentId === student.id ? <VisibilityOff style={Eyestyle} /> : <Visibility style={Eyestyle}/>}
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box textAlign="center" mt={2}>
        <Button underline>
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default StudentsList;
