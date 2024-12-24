'use client'

import { IconButton, List, Container, Box, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { ChangeEvent, useState } from "react";
import ChatMessage from "./ChatMessage";
import { Message } from "@/types/message";
import {v4 as uuidv4} from 'uuid';

export default function ChatBot() {
  const [messages, setMessages] = useState([] as Message[]);
  const [userInput, setUserInput] = useState('');

function sendUserMessage() {
  setMessages((messages) => [...messages, {id:uuidv4(), text:userInput, isUser:true}]);
  setUserInput('');
  const response = {id: uuidv4(), text:'Well hello to you too', isUser: false}
  setTimeout(() => setMessages((messages) => [...messages, response]), 500);
}

function handleUserInput(event: ChangeEvent<HTMLTextAreaElement>) {
  setUserInput(event.target.value)
}


  return(
    <Container className="py-4 h-[100vh] flex flex-col justify-between">
    <List>
      {messages.map(msg => {
        return <ChatMessage key={msg.id} msg={msg}/>
      })}
    </List>

    <Box>
      <TextField multiline 
        label="Let's talk patterns!"
        value={userInput} 
        variant="outlined"
        onChange={handleUserInput} 
        fullWidth
      />
      <div className='flex justify-end mt-2'>
        <IconButton type="button" onClick={sendUserMessage}>
          <SendIcon />
        </IconButton>
      </div>
    </Box>
    </Container>
  )
}
