import { useState } from 'react';
import styled from 'styled-components'

export default function Sala({id, isAvailable, name, poltronas, setPoltronas} ){
    const [ selecionado, setSelecionado] = useState(false);
    let color, borda;
    if(selecionado == false){
        color=isAvailable ? "#C3CFD9" : "#FBE192"
        borda=isAvailable ? "#808F9D" : "#F7C52B"
    }else{
        color="#8DD7CF"
        borda="#45BDB0"
    }
    
    return(
        <AssentoCinema color={color} borda={borda} onClick={()=> {
            if(selecionado==false && isAvailable==true){
                setSelecionado(true);
                setPoltronas([...poltronas, id])
            }else if(isAvailable==true){
                setSelecionado(false);
                const novo = poltronas.filter((assento)=> assento!== id? true: false)
                setPoltronas(novo)                
            }
            }}>
            <span>{name}</span>
        </AssentoCinema>
    );
}

const AssentoCinema = styled.button`
    height: 26px;
    width: 26px;
    border-radius: 12px;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.borda};
    margin-bottom:19px;
    display: flex;
    justify-content:center;
    align-items: center;
    span{
    font-family:'Roboto', sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #000000;
    }

`