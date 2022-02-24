import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: pink;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    margin: auto;
    left: ${(props)=> props.direction === "left" && "10px"};
    right: ${(props)=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    marging: 50px 0px;
    font-weight: 500;
    letter-spacing: 3px; 
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper>
            <Slide bg='yellow'>
                <ImgContainer>
                    <Image src="https://i.ibb.co/XsdmR2c/1.png" alt='image'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>DONT COMPROMISE ON STYLE!</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg='blue'>
                <ImgContainer>
                    <Image src="https://i.ibb.co/XsdmR2c/1.png" alt='image'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>WINTER SALE</Title>
                    <Desc>DONT COMPROMISE ON STYLE!</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider