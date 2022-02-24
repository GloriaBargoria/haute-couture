import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: pink;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14;
    font-weight: bold;
`

const Announcement = () => {
  return (
    <Container>
        Super!
    </Container>
  )
}

export default Announcement