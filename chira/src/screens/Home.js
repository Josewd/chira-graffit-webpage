import React from 'react';
import { Main } from './Style';
import styled from 'styled-components'
import chira from '../assets/chira-color.png'
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

const Chira = styled.img`
  z-index: 3;
  margin-top: 10vh;
  transform: scale(1.2);
`

export default function Home() {
  return (
  <>
      <NavBar/>
      {/* Home page */}
      <Main color=''>
        <Chira src={chira}/>
      </Main>
      {/* About page */}
      <Main color=''>
      <Carousel/>
      </Main>
    </>
  );
}
