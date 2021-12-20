import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";
import Load from '../../assets/Loading'

export default function Sucesso( ){
const [post, setpost] = useState(false)
const location = useLocation();
const { poltronas , cpf, nome, assentos, idpoltronas} = location.state
const reservar = 
{
   ids: idpoltronas,
   nome: nome,
   cpf: cpf 
}
useEffect(() => {
    const requisicao = axios.post(`https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many`,reservar);

    requisicao.then(resposta => {
        setpost(true);
    });
    requisicao.catch(tratarError);
}, []);

if(post == false){
    return <Load/> 
}

    return(
        <>
            <Titulo>
                <span>Pedido feito<br></br>com sucesso!</span>
            </Titulo>
            <Informacoes>
                <span className="enfase">Filme e sessão</span>
                <span className="descricao">{assentos.movie.title}<br></br>{assentos.day.date} {assentos.name}</span>
            </Informacoes>
            <Informacoes>
                <span className="enfase">Ingressos</span>
                {poltronas.map(assento => <span className="descricao">Assento {assento}</span>)}
            </Informacoes>
            <Informacoes>
                <span className="enfase">Comprador</span>
                <span className="descricao">Nome:{nome}<br></br>Cpf:{cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</span>
            </Informacoes>
            <Conteiner>
                <Link to='/'>
                    <Home>Voltar pra Home</Home>
                </Link>
            </Conteiner>
        </>
    )
}

function tratarError(error){
    alert(error);
}

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
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
    color:#247A6B;
}`

const Informacoes = styled.div`
    height: 110px;
    width: 100%;
    margin-left:28px;
    display: flex;
    flex-direction: column;

    .enfase{
    font-family:'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: left;
    color:#293845;

    .descricao{
    font-family:'Roboto', sans-serif; 
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.04em;
    text-align: left;
    color:#293845;
    }
}`
const Home= styled.button`
margin-top:57px;
height: 42px;
width: 225px;
border:none;
border-radius: 3px;
background-color:#E8833A ;
font-family:'Roboto', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0.04em;
text-align: center;
color:#FFFFFF;
margin:auto;
margin-top:57px;
`
const Conteiner= styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 150px ;
`

