import styled from 'styled-components'

export default function Filme({key, title, posterURL, overview, releaseDate}){

    return(
        <Conteiner>
           <img src={posterURL}></img>
        </Conteiner>
    );
}

const Conteiner = styled.div`
       
    height: 209px;
    width: 145px;
    border-radius: 3px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px #0000001A;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 193px;
        width: 129px;
        left: 213px;
        top: 177px;
        border-radius: 0px;

    }

`