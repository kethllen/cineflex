import styled from 'styled-components'
import axios from 'axios';
import { useState, useEffect } from "react";
import Load from '../../assets/Loading'
import { useParams } from 'react-router-dom'; 
import Sala from '../Sala';
import DadosComprador from '../DadosComprador'
import Legenda from '../Legenda';

export default function Assentos(){

    const {idSessao} = useParams();
    const [assentos, setassentos] = useState([]);
    const [poltronas, setPoltronas]=useState([]);
    const [idpoltronas, setIdPoltronas] = useState([])

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);

		requisicao.then(resposta => {
			setassentos(resposta.data);
		});
	}, []);

    if(assentos.length == 0){
        return <Load/> 
    }

    return (
        <>
            <Titulo>
                <span>Selecione o(s) assento(s)</span>
            </Titulo>
            <Conteudo>
            {assentos.seats.map(assento => <Sala key={assento.id} isAvailable={assento.isAvailable} id={assento.id} name={assento.name} poltronas={poltronas} setPoltronas={setPoltronas} idpoltronas={idpoltronas} setIdPoltronas={setIdPoltronas}/>)}
            </Conteudo>
            <Legenda/>
            <DadosComprador poltronas={poltronas} assentos={assentos} idpoltronas={idpoltronas}/>
            <Rodape>
                <Conteiner>
                    <img src={assentos.movie.posterURL}></img>
                </Conteiner>
                <span>{assentos.movie.title}<br></br>{assentos.day.weekday} - {assentos.name}</span>
            </Rodape>
        </>
	);
}


const Conteudo= styled.div`

    display: flex;
    justify-content: space-between;
    gap:8px;
    flex-wrap: wrap;
    margin-left:24px;
    margin-right:24px;
    `
const Rodape = styled.div`
    height: 117px;
    width: 100%;
    position: fixed;
    bottom:0;
    display: flex;
    align-items:center;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    padding-left: 10px;

    span{
        width: 70%;
        font-family:'Roboto', sans-serif;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        margin-left:14px;
        color: #293845;

    }

`
const Conteiner = styled.div`
       
    height: 89px;
    width: 64px;
    border-radius: 2px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px #0000001A;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 72px;
        width: 48px;
        border-radius: 0px;
    }

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
