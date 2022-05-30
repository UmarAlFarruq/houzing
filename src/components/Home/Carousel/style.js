import styled from 'styled-components';
import { Carousel } from 'antd';
import { ReactComponent as left } from '../../../assets/icons/left-arrow.svg'
import { ReactComponent as right } from '../../../assets/icons/right-arrow.svg'
const Container = styled.div`
    position: relative;
    max-width: 1440px;
    width: 100%;
    height: fit-content;
`
const WrappperCarusel = styled(Carousel)`
    height: fit-content;
`;
const Img = styled.img`
    background: balck;
    width: 100%;
    height: 540px;
    box-sizing: border-box;
`;
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
    background: white;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    padding: 12px;
    z-index: 999;
    opacity: 0.5;

    :hover{
        opacity: 0.97;
    }
    & path{
        fill: var(--primaryColor);
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
    background: white;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999;
    padding: 12px;
    opacity: 0.5;

    :hover{
        opacity: 0.97;
    }
    & path{
        fill: var(--primaryColor);
    }
`

export { Container, WrappperCarusel, Img, Icon };


