import styled from 'styled-components'
import Filmes from '../Filmes'

export default function Corpo(){
    return(
        <>
            <Titulo>
                <span>Selecione o filme</span>
            </Titulo>
            <Filmes/>
        </>
    );
}

const Titulo = styled.div`
    height: 110px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
    font-family:'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
    color:#293845;

    }
`