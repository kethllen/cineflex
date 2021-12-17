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
    console.log(filmes)
    if(filmes.length == 0){
        return(
            <Conteiner>
                <Load/>
            </Conteiner>
        )
    }


    return (
		<Conteiner>
			{filmes.map(filme => <Filme key={filme.id} title={filme.title} posterURL={filme.posterURL} overview={filme.overview} releaseDate={filme.releaseDate}/>)}
		</Conteiner>
	);
}

const Conteiner = styled.div`
    display: flex;
    flex-wrap: wrap ;
    justify-content: space-around;
`
