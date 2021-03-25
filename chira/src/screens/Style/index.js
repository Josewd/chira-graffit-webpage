import styled from 'styled-components';
import background from '../../assets/background-chira.jpg'


const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
   position: relative;
   background-color: ${props=>props.color};
`;

const BackgroundImage = styled.img`
    position: absolute;
    filter: grayscale(100%) opacity(40%);
    top: -250px;
    left: 5vw;
    z-index: 1;
    transform: scale(1.2445);

`

export const Main = (props)=>{

    return(
        <MainContainer color={props.color}>
            <BackgroundImage src={background}/>
            {props.children}
        </MainContainer>
    )
}
