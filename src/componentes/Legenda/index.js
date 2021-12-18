import styled from 'styled-components'
export default function Legenda(){
    return(
        <Legendas>
            <div>
                <AssentoCinema color="#8DD7CF"  border="#8DD7CF"></AssentoCinema>
                <Descricao>Selecionado</Descricao>
            </div>
            <div>
                <AssentoCinema color="#C3CFD9"  border="#808F9D"></AssentoCinema>
                <Descricao>Disponivel</Descricao>
            </div>
            <div>
                <AssentoCinema color="#FBE192"  border="#F7C52B"></AssentoCinema>
                <Descricao>Indisponível</Descricao>
            </div>
        </Legendas>
    )
}

const Legendas = styled.div`

    display: flex;
    justify-content: space-around;
    margin-left:24px;
    margin-right:24px;
    margin-bottom:45px;
    .div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    `
const Descricao= styled.span`   
    height: 28px;
    width: 91px;
    font-family:'Roboto', sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.013em;
    text-align: left;
    color: #4E5A65;
`
const AssentoCinema = styled.button`
    height: 26px;
    width: 26px;
    border-radius: 12px;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.border};
    margin-bottom:5px;
    display: flex;
    justify-content:center;
    align-items: center;
    margin: auto;
    margin-bottom:5px ;
`