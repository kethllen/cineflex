import styled from 'styled-components'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function DadosComprador(){
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    return(
        <>
            <SetDados>Nome do comprador:</SetDados>
            <GetNome placeholder="Digite seu nome..." value={nome} onChange={event => setNome(event.target.value)} />
            <SetDados>CPF do comprador:</SetDados>
            <GetNome placeholder="Digite seu cpf..." value={cpf} onChange={event => setCpf(event.target.value)} />
            <Conteiner>
                <Link to='/'>
                    <Reservar>Reservar assento(s)</Reservar>
                </Link>
            </Conteiner>
            
        </>
    );
}
const SetDados= styled.span`

    height: 25px;
    width: 327px;
    margin-left:24px;
    margin-right:24px;
    font-family:'Roboto', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #293845;

    `
const GetNome= styled.input`

    height: 51px;
    width: 327px;
    border-radius: 3px;
    margin-left:24px;
    margin-right:24px;
    margin-bottom: 7px;
    margin-top:3px;
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
    font-family:'Roboto', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    ::placeholder{
    font-family:'Roboto', sans-serif;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #AFAFAF;
    }

`

const Reservar= styled.button`
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