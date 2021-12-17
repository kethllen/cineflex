import styled from 'styled-components'
import axios from 'axios';
import { useState, useEffect } from "react";
import Filme from '../Filme'
import Load from '../../assets/Loading'

export default function Filmes(){
    const [filmes, setfilmes] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

		requisicao.then(resposta => {
			setfilmes(resposta.data);
		});
	}, []);

    if(filmes.length == 0){
        return(
            <Conteiner>
                <Load/>
            </Conteiner>
        )
    }
    return (
        <>
            <Titulo>
                <span>Selecione o filme</span>
            </Titulo>
            <Conteiner>
                {filmes.map(filme => <Filme key={filme.id} id={filme.id} title={filme.title} posterURL={filme.posterURL} overview={filme.overview} releaseDate={filme.releaseDate}/>)}
            </Conteiner>
        </>
	);
}

const Conteiner = styled.div`
    display: flex;
    flex-wrap: wrap ;
    justify-content: space-around;
`
const Titulo = styled.div`
    height: 110px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:67px;

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