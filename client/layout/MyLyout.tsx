import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/navbar';
import Player from '../components/Player';

interface MyLayoutProps {
  children?
  title?: string;
  description?: string;
  keywords?: string;
}

const MyLayout: React.FC<MyLayoutProps> = ({children,
  title,
   description,
   keywords}) => {
  return (
    <>
      <Navbar/>
      <Container style={{marginTop: '80px'}}>
        {children}
      </Container>
      <Player/>
    </>
  )
}
export default MyLayout
