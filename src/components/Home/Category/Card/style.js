import styled from 'styled-components';
// import img from '../../../../assets/images/category.png'



const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 280px;
    border-radius: 3px;
    cursor: pointer;
    margin: 0 25px;
    position:relative ;
`
const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 380px;
    width: 300px;
    box-sizing: border-box;
`
const Title = styled.div`
    position: absolute;
    font-family: var(--headerFond);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;

`

export { Container, Title,Image };


