import styled from 'styled-components';
import { ReactComponent as left } from '../../../assets/icons/left-arrow.svg'
import { ReactComponent as right } from '../../../assets/icons/right-arrow.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 95px;
    max-width: 1440px;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
`
const Wrapper = styled.div`
    position: relative;
    gap: 20px;
`
const Cards = styled.div`
    /* display: flex; */
    max-width: 1440px;
    width: 100%;
    margin-top: 32px;
    /* justify-content: flex-start; */
`
///////////////////////////////////////////////////////////////////////////////
const Icon = styled.div``
Icon.Left = styled(left)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%; 
    left: 32px;
    width: 45px;
    height: 45px;
    background: black;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    padding: 12px;
    z-index: 999;
    opacity: 0.2;

    :hover{
        opacity: 0.47;
    }
    :active{
        opacity: 0.97;
    }
    & path{
        fill: white;
    }
`;
Icon.Right = styled(right)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%; 
    right: 32px;
    width: 45px;
    height: 45px;
    background: black;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999;
    padding: 12px;
    opacity: 0.3;

    :hover{
        opacity: 0.47;
    }
    :active{
        opacity: 0.97;
    }
    & path{
        fill: white;
    }
`

export { Container, Wrapper, Cards, Icon };


