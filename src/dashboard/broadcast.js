import React from 'react';
import { Box, Paper, Typography, Avatar, IconButton, Input } from '@mui/material';
import { Send, AttachFile, Mic, QuestionAnswer } from '@mui/icons-material';

const messages = [
  {
    name: "Piyush Kumar",
    description: "Lorem ipsum dolor sit amet consectetur. Sit a et quis lacinia mattis tellus aliquam molestie non. Purus sit auctor magna porttitor egestas",
    avatar: "path_to_avatar_image",
    time: "23:24",
  },
  {
    name: "Piyush Kumar",
    description: "Lorem ipsum dolor sit amet consectetur. Sit a et quis lacinia mattis tellus aliquam molestie non. Purus sit auctor magna porttitor egestas",
    avatar: "path_to_avatar_image",
    time: "23:24",
  },
  {
    name: "Piyush Kumar",
    description: "Lorem ipsum dolor sit amet consectetur. Sit a et quis lacinia mattis tellus aliquam molestie non. Purus sit auctor magna porttitor egestas",
    avatar: "path_to_avatar_image",
    time: "23:24",
  },
];

const MessageCard = ({ message }) => (
  <Paper sx={{ padding: 2, marginBottom: 2, display: 'flex', alignItems: 'center' }}>
    <Avatar src={message.avatar} alt={message.name} sx={{ marginRight: 2 }} />
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        {message.name}
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 1 }}>
        {message.description}
      </Typography>
    </Box>
  </Paper>
);

const Broadcast = () => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
      {messages.map((message, index) => (
        <Box key={index} sx={{ display: 'flex', marginBottom: 2 }}>
          <Box sx={{ width: '85%' }}>
            <MessageCard message={message} />
          </Box>
          <Box sx={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center',marginLeft:2 }}>
            <IconButton sx={{ marginBottom: 2 }}>
              <QuestionAnswer fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>

    <Box
      sx={{
        width: '40%',
        backgroundColor: '#E0E0E0',
        borderRadius: '10px',
        padding: 2,
      }}
    >
      {messages.map((message, index) => (
        <MessageCard key={index} message={message} />
      ))}
      <Box sx={{display: 'flex', alignItems: 'center', borderRadius: '63px', backgroundColor: 'white', marginTop: 2 }}>
        <Input placeholder="Reply" sx={{ flex: 1, paddingLeft: 2 }} disableUnderline />
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <Mic />
        </IconButton>
        <IconButton>
          <Send />
        </IconButton>
      </Box>
    </Box>
  </Box>
);

export default Broadcast;
