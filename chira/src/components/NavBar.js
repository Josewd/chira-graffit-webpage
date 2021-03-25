import React from 'react';
import styled from 'styled-components';
import logo from '../assets/chira-bird1.jpg'
import logoName from '../assets/chira-name.jpg'
import menu from '../assets/icon-menu.png'
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
    @media screen and (max-width: 800px){
       background-color: white;
    }
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
    @media screen and (max-width: 800px){
        display: none;
    }
`
const LogoMenu = styled(LogoContainer)`
    display: none;
    border: none;
    @media screen and (max-width: 800px){
        display: flex;
    }

`
const LogoName = styled.img`
    display: none;
    margin-left: 30px;
    width: 100px;
    height: 40px;
    @media screen and (max-width: 800px){
        display: block;
    }
`

const Logo = styled.img`
    width: 55px;
    height: 55px;
`
const Menu = styled.img`
     width: 35px;
    height: 35px;
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
    @media screen and (max-width: 800px){
        display: none;
    }
`



export default function NavBar(props) {

  return (
    <Nav>
        <LogoName src={logoName}/>
        <LogoContainer>
            <Logo src={logo}/>
        </LogoContainer>
        <LinkContainer>
        <Link href='#' >home</Link>
        <Link onClick={()=> goTo('/about')} href='#about' >about</Link>
        <Link onClick={()=> goTo('/contact') }  href='#contact' >contact</Link>
        <LogoMenu onClick={props.onClick}>
            <Menu src={menu}/>
        </LogoMenu>
        </LinkContainer>
    </Nav>
  );
}
