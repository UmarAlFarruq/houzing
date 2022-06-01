import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background:var(--primaryColor) ;
    box-sizing: border-box;
    height: fit-content;
    margin-top: 20px;
    `
const Container = styled.div`
    display: flex;
    height: 64px;
    max-width: var(--width);
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400px;
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    color: #ffffff;
    /* padding: 48px 130px 0px 130px; */
    padding: 0 130px;
`

export { Container, Wrapper };


