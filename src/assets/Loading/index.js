import React from 'react';
import LoadGif from './loading.gif'
import styled from 'styled-components'

const Load = () => {
  return (
    <Container>
      <img src={LoadGif}/>
    </Container>

  )
}

export default Load;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      height: 100px;
      width: 100px;
    }
    `