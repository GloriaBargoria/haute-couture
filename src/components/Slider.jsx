import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    // background-color: pink;
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
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg}
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 100%;
    width: 50vw;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 60px;
`
const Desc = styled.p`
    marging: 50px 0px;
    font-weight: 500;
    letter-spacing: 3px; 
`
const Button = styled.button`onClick={()=>handleClick("left")}
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
`
//<a href="https://ibb.co/LY93BMC"><img src="https://i.ibb.co/fqrsZbC/woman-gb45a0bae1-1280.png" alt="woman-gb45a0bae1-1280" border="0"></a>

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper>
            <Slide bg='#33fff9'>
                <ImgContainer>
                    <Image src="https://i.ibb.co/fqrsZbC/woman-gb45a0bae1-1280.png" alt='image'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>DONT COMPROMISE ON STYLE!</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg='blue'>
                <ImgContainer>
                    <Image src="https://i.ibb.co/fqrsZbC/woman-gb45a0bae1-1280.png" alt='image'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>WINTER SALE</Title>
                    <Desc>DONT COMPROMISE ON STYLE!</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg='blue'>
                <ImgContainer>
                    <Image src="https://i.ibb.co/SmSZxKW/woman-g0a2625ca6-1280.jpg" alt='image'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>POPULAR SALE</Title>
                    <Desc>DONT COMPROMISE ON STYLE!</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg='#33fff9'>
                <ImgContainer>
                    <Image src="https://i.ibb.co/fqrsZbC/woman-gb45a0bae1-1280.png" alt='image'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>DONT COMPROMISE ON STYLE!</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider