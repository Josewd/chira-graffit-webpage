import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/chira-bird1.jpg'
import { goTo } from '../utils/goto';



const Nav = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 4;
    width: 100vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: whitesmoke;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid black;
    overflow: hidden;
    margin-left: 30px;
    cursor: pointer;
`

const Logo = styled.img`
    width: 55px;
    height: 55px;
`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 5vw;
`
const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    font-family: 'Roboto Mono';
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-left: 10vw;
    color: black;
    &:focus{
        text-decoration:underline;
    }
`



export default function NavBar() {

  return (
    <Nav>
        <LogoContainer>
            <Logo src={logo}/>
        </LogoContainer>
        <LinkContainer>
        <Link href='#' >home</Link>
        <Link onClick={()=> goTo('/about')} href='#about' >about</Link>
        <Link onClick={()=> goTo('/contact') }  href='#contact' >contact</Link>
        </LinkContainer>
    </Nav>
  );
}
