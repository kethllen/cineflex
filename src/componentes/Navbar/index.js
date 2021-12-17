import styled from 'styled-components'


export default function Navbar(){
    return(
        <Logo>
            <span>Cineflex</span>
        </Logo>
    );
}

const Logo = styled.div`
    height: 67px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C3CFD9;


    span{
        font-family:'Roboto', sans-serif;
        font-size: 34px;
        font-style: normal;
        font-weight: 400;
        line-height: 40px;
        text-align: center;
        color: #E8833A;

    }
`;