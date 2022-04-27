import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/navbar';

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
    </>
  )
}
export default MyLayout
