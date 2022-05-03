import { Container } from '@mui/material';
import Head from 'next/head';
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
      <Head>
        <title>{title || 'Музыкальная площадка'}</title>
        <meta name='description' content={`Музыкальная площадка, ${description}`}/>
        <meta name='robots' content='index, follow'/>
        <meta name='keywords' content={keywords || "Музыка, треки, артисты"}/>
        <meta name='viewport' content={'width=device-width, initial-scale=1'}/>
      </Head>
      <Navbar/>
      <Container style={{marginTop: '80px'}}>
        {children}
      </Container>
      <Player/>
    </>
  )
}
export default MyLayout
