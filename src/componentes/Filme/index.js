import { Link } from 'react-router-dom';
import styled from 'styled-components'


export default function Filme({id, title, posterURL, overview, releaseDate}){

    return(
        <Link to={`/sessoes/${id}`}>
            <Conteiner>
                <img src={posterURL}></img>
            </Conteiner>
        </Link>
        
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
    }

`