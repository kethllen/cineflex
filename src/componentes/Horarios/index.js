import styled from 'styled-components'

export default function Horarios({data, weekday, showtimes}){
    console.log(data.data)
    console.log(weekday)
    console.log(showtimes)
    return(
        <Sessoes>
            <span>{weekday}-{data}</span>
            <div className="Hora">
            {showtimes.map(hora => <button>{hora.name}</button>)}
            </div>
        </Sessoes>
        

    );
}

const Sessoes = styled.div`
    width: 100%;
    margin-left: 24px;
    margin-right: 24px;
    
    
    .hora{
        display: flex;
    }
    span{
    height: 35px;
    width: 241px;
    font-family:'Roboto', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;
    color:#293845;
    }

    button{
    height: 43px;
    width: 83px;
    border-radius: 3px;
    background-color: #E8833A ;
    font-family:'Roboto', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.02em;
    text-align: center;
    color:#FFFFFF;
    margin-bottom: 22px;
    margin-right: 10px;
    margin-top: 22px;
    }
`