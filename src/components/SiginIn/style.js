import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    width: 580px;
    min-height: 376px;
    padding: 24px 30px;
    height: fit-content;
`
const Title = styled.div`
    font-family: var(--headerFont);
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    font-size: 18px;
`
Title.Link = styled.pre`
    font-family: var(--headerFont);
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    font-size: 16px;
    color: #0061DF;
    border-bottom: 1px solid #0061DF;
    cursor: pointer;
`
const CheckboxDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`
Title.Error = styled(Title.Link)`
    color: red;
    width: fit-content;
    border: none;
    margin-top: 16px;
`

export { Container, Title, CheckboxDiv };


