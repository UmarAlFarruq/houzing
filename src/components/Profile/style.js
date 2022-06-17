import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    max-width: 1440px;
    flex-direction: column;
    padding: 0 130px;
    width: 100%;
    /* min-height: 30vh; */
`
    const Title = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 34px;
        width: 100%;
    `
    Title.Generic = styled.div`
        display: flex;
    `
    Title.Title = styled.div`
        font-family: var(--headerFont);
        font-style: normal;
        font-weight: 600;
        font-size: ${({ size }) => `${size}px` || '18px'};
        margin-top: ${({ mt }) => `${mt}px`};
        margin-left: ${({ ml }) => `${ml}px`};

        line-height: ${({ lineHeight }) => `${lineHeight}px` || '28px'};
        letter-spacing: -0.02em;
        color: #0D263B;
    `
Title.Des = styled.div`
    font-family: var(--headerFont);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
    margin-left: ${({ ml }) => `${ml}px`};
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    max-width: 1180px;
    width: 100%;
    height: fit-content;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    margin-top: 32px;
    padding: 0px 30px 24px 30px;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-top: 16px; */
`
Card.Titles = styled.div`
    display: flex;
    margin-top: 25px;
`
Card.Listing = styled.div`
    flex: 4;
    display: flex;
    justify-content: space-between;
    margin-right: 49px;
    padding: 8px 0;
`
Card.Data = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
Card.Status = styled(Card.Data)``
Card.View = styled(Card.Data)``
Card.Action = styled.div`
    display: flex;
    align-items: center;
`
const Listing = styled.div``

Listing.Img = styled.img`
    width: 113px;
    height: 113px;
    background: #C4C4C4;
    border-radius: 3px;
`
Listing.Title = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    justify-content: space-between;
`
Listing.Info = styled.div`
    display: flex;
`


// Card.Title styled.


export { Container, Title, Wrapper, Card, Listing };


