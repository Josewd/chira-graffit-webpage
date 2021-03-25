import React, { useState } from 'react';
import { Main } from './Style';
import styled, {keyframes} from 'styled-components'
import chira from '../assets/chira-color.png'
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';
import bird from '../assets/chira-bird1.jpg'
import Menu from '../components/Menu';

const Chira = styled.img`
  z-index: 3;
  margin-top: 10vh;
  transform: scale(1.2);
  @media screen and (max-width: 800px){
    display: none;
  }
`
const ImageBorder = styled.div`
  z-index: 3;
  border-radius: 50%;
  width: 60vw;
  height: 60vw;
  border: 5px solid black;
  overflow: hidden;
  display: none;
  
  @media screen and (max-width: 800px){
    display: flex;
    align-items: center;
  justify-content: center;
  }
  
`
const Bird = styled.img`
  width: 65vw;
  height: 65vw;
  z-index: 3;
  
`


export default function Home() {
  const [animation, setAnimation] = useState('paused')

  const handleClick = ()=>{
    if(animation === 'paused' || animation === 'reverse'){
      setAnimation('running')
    }else{
      setAnimation('reverse')
    }
  }
  return (
  <>
  <Menu play={animation} animation={handleClick} />
      <NavBar onClick={handleClick}/>
      {/* Home page */}
      <Main color=''>
        <Chira src={chira}/>
        <ImageBorder>
        <Bird src={bird}/>
        </ImageBorder>
      </Main>
      {/* About page */}
      <Main color=''>
      <Carousel/>
      </Main>
    </>
  );
}
