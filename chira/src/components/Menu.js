import React from 'react';
import { goTo } from "../utils/goto"
import styled, { keyframes } from "styled-components"
import background from '../assets/background-chira.jpg'

const navBarShow = keyframes`
  0% {left: -90vw}
  35% {left: -50vw}
  60% {left: -30vw}
  100% {left: -5vw}

`
const NavMenu = styled.div`
    display: none;
    @media screen and (max-width: 800px){
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    width: 90vw;
    height: 100vh;
    background-color: #372D2D;
    position: fixed;
    left: 80vw;
    flex-direction: column;
    align-items: center;
    background-image: url(${background});
    background-size: cover;
    justify-content: center;
    animation: ${navBarShow} 1s steps(40, end)  ${props=> props.play};
    animation-fill-mode: forwards;
    border-radius: 20px;
    
  }
`
const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-right: 5vw;
`
const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: 30px;
    font-weight: bolder;
    font-family: 'Roboto Mono';
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 5vh;
    color: white;
    &:focus{
        text-decoration:underline;
    }
   
`

export default function Menu(props) {
  return (
    <NavMenu play={props.play}>
        <LinkContainer>
        <Link onClick={props.animation} href='#' >home</Link>
        <Link onClick={()=> {
            props.animation()
            goTo('/about')
            }} href='#about' >about</Link>
        <Link onClick={()=>{
            props.animation()
            goTo('/contact') }}  href='#contact' >contact</Link>
        </LinkContainer>
    </NavMenu>
  );
}
