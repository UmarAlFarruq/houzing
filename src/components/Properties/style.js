import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
    max-width: var(--width);
    width: 100%;
`;
Title.Title = styled.h5`
    margin-top: 64px;
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
    margin-bottom: 90px;
`
const Body = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fid, minmax(300px, 1fr));
    grid-auto-rows: auto;
    width: 100%;
    padding: 0 130px;
    max-width: var(--width) ;
    /* display: flex; */
    /* flex-wrap: wrap; */
`
Body.Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export { Title, Body, Container };


