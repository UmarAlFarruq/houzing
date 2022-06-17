import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    max-width: 1440px;
    flex-direction: column;
    padding: 0 130px;
    width: 100%;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const Title = styled.div``
Title.Title = styled.div`
    font-family: var(--headerFont);
    font-style: normal;
    font-weight: 600;
    font-size: ${({ size }) => `${size || 18}px`};
    margin-top: ${({ mt }) => `${mt}px`};
    margin-bottom: ${({ mb }) => `${mb}px`};
    margin-left: ${({ ml }) => `${ml}px`};

    line-height: ${({ lineHeight }) => `${lineHeight}px` || '28px'};
    letter-spacing: -0.02em;
    color: #0D263B;
`
const WrapperCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 24px 30px;
    margin-top: 32px;
`
const Img = styled.img`
    width: 113px;
    height: 113px;
    background: #C4C4C4;
    border-radius: 3px;
    margin-right: 20px;
`
Title.D = styled.div`
    font-family: var(--headerFond);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
    margin-top: ${({ mt }) => `${mt || 14}px`};
    margin-bottom: ${({ mb }) => `${mb || 14}px`};
`


export { Container, Title, WrapperCard, Img };


