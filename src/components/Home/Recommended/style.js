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
    gap: 20px;
    position: relative; 
    `
const Cards = styled.div`
    width: 100%;
    margin-top: 32px;
`
const Title = styled.div`
    display: flex;
    justify-content: center;
`
Title.Title = styled.h5`
    font-size: 28px;
    font-weight: 800;
    font-family: var(--headerFond);
    line-height: 36px;
    font-style: normal;
    text-align: center;
    letter-spacing: -0.02em;
    color: #0D263B;
`
Title.Description = styled.p`
    display: flex;
    justify-content: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #696969;
`

///////////////////////////////////////////////////////////////////////////////
const Icon = styled.div``
Icon.Left = styled(left)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%; 
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
    top: 40%; 
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

export { Container, Wrapper, Cards, Icon, Title };


