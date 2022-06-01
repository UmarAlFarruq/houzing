import styled from 'styled-components';
import img from '../../../../assets/images/category.png'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 280px;
    border-radius: 3px;
    background-image: url(${img});
    cursor: pointer;
`
const Title = styled.div`
font-family: var(--headerFond);
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #FFFFFF;
`

export { Container, Title };


