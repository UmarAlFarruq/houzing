import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Wrapper = styled.div`
    display: flex;
    margin-top: ${({ mt }) => `${mt}px` || '48px'};
    flex-direction: column;
    margin-top: 24px;
`
const WrapperDetails = styled.div`
    margin-top: ${({ mt }) => `${mt}px` || '48px'};
`
const WrapprDescription = styled.div`
        display: flex;
        justify-content: space-between;
        width: 880px;
`
const Title = styled.div``
Title.Title = styled.div`
    font-family: var(--headerFont);
    font-style: normal;
    font-weight: 600;
    font-size: ${({ size }) => `${size}px` || '14px'};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '20px'};
    color: #0D263B;
    margin-top: 24px;
    display: flex;
`
Title.Des = styled.div`
    font-family:var(--headerFont) ;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
    margin-left: 10px;
`
Title.Div = styled.div`
    display: flex;
    align-items: center;
    
`
const MapStyle = styled.div`
    max-width: 880px;
    max-height: 800px;
    margin-top: 24px;
`


export { Title,MapStyle,  WrapprDescription, Container, Wrapper, WrapperDetails };


