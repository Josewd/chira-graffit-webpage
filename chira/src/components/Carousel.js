import React from 'react';
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import styled from 'styled-components';
import frame from '../assets/chira-painting.png'
import lula from '../assets/chira-lula.jpg'
import elefant from '../assets/chira-elefant.jpg'
import bird from '../assets/chira-bird.jpg'

export const Container = styled.div`
  width: 35vw;
  height: 70vh;
  overflow: hidden;
  position: relative;
  margin-left: 10vw;
  z-index: 2;
  border: 4px solid #d3d325;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #444444;
`

const Image = styled.img`
    margin-top: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35vw;
    height: 60vh;
    border-radius: 50%;
    border: 4px solid black;
  
`

const Frame = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    filter: brightness(120%) contrast(95%);

`
const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

`
const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45vw;
    height: 55vh;
    border-radius: 10px;
    padding: 20px;
    font-size: 1.5vw;
    font-family: 'Roboto Mono';
    margin-left: -5px;
    background-color: #ffffff;
    filter: opacity(70%);
    z-index: 1;
    position: relative;
`

const Title = styled.div`
     font-size: 30px;
     font-family: 'Roboto Mono';
     color: white;
     text-transform: uppercase;
     position: absolute;
     top: -40px;
     left: 10px;

`


export default function Carousel() {
  return (
      <Main>
        <Container>
            <Frame src={frame}/>
        <AliceCarousel infinite autoPlay autoPlayInterval="3000" animationDuration={400}>
            <Image src={lula}/>
            <Image src={bird}/>
            <Image src={elefant}/>
        </AliceCarousel>
        </Container>
        <TextContainer>
            <Title>about chira</Title>
Chira is a young French-Dutch artist born in Paris.

He first started to paint the walls of Dublin in 2018, then moving through Paris, Brussels, Amsterdam, or anywhere he briefly stops.

His work is mostly recognisable by an animal with a camo pattern, made of bright colours and trapped in a circle.

His current work is inspired by the entire lifespan of a Spraycan, from gritty backstreets to cushy living room walls.

The recycled spray cans have been giving a new lease of life and their purpose reversed.

Each spraycan has been used to create graffiti street art, throughout metropolitan cities across Europe and hand-renewed for each individual piece.</TextContainer>
      </Main>
  );
}
