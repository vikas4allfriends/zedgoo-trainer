import React, { useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import StudentList from './Studentlist';
import BatchInfo from './Batchinfo';

const students = [
  { id: 1, name: 'Elon Musk', enrolmentNo: 'ABCD#123', mobile: '987 654 3210', email: 'info@example.com', profile: 'https://example.com/avatar.jpg' },
  { id: 2, name: 'Bill Gates', enrolmentNo: 'ABCD#145', mobile: '885 223 8456', email: 'kahua@example.com', profile: 'https://example.com/avatar.jpg' },
  { id: 3, name: 'Mark Zukerburg', enrolmentNo: 'ABCD#156', mobile: '987 444 5678', email: 'bolo@example.com', profile: 'https://example.com/avatar.jpg' },
  { id: 4, name: 'Narendra Modi', enrolmentNo: 'ABCD#985', mobile: '885 897 7865', email: 'nmodi@example.com', profile: 'https://example.com/avatar.jpg' }
];

const Student = () => {
  const [viewedStudentId, setViewedStudentId] = useState(null);

  const handleViewClick = (studentId) => {
    setViewedStudentId(studentId);
  };

  const selectedStudent = students.find(student => student.id === viewedStudentId);

  return (
    <Box sx={{fontSize:4}}>
      <BatchInfo />
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <StudentList students={students} onViewClick={handleViewClick} viewedStudentId={viewedStudentId} />
        
        <Box sx={{ borderRadius: '5px', marginLeft: '1.5rem', boxShadow: '0px 0px 5px rgba(0, 0, 0, 1)', padding: 3, width: '35%', backgroundColor: '#DCDCDC',display:'flex',flexDirection:'column'}}>
          {selectedStudent && (
            <>
            <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column',paddingBottom:1,marginBottom:1,borderBottom:'2px solid #9C9C9C',width:'80%',alignSelf:'center' }}>

              <Avatar alt={selectedStudent.name} src={selectedStudent.profile} sx={{ width: 80, height: 80, marginBottom: 2}} />
              <Typography variant='h6'>{selectedStudent.name}</Typography>
              <Typography>Enrolment Number: {selectedStudent.enrolmentNo}</Typography>
            </Box>
            <Box>
              <Typography>Mobile:<br />+91-{selectedStudent.mobile}</Typography>
              <Typography>Email:<br />{selectedStudent.email}</Typography>
              <Typography>Org Id:<br />23001</Typography>
            </Box>
            </>
          )}
        </Box>
      </Box>
      </Box>

  );
};

export default Student;
