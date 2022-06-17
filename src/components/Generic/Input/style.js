import styled from 'styled-components';

const getType = (type) => {
    switch (type) {
        case 'secondary': return {
            border: '1px solid #e6e9ec',
            color: '#0D263B',
        };
        case 'primary':
            return {
                background: '#0061DF',
                color: 'black',
                border: '1px solid #0061DF',
            };
        default:
            return {
                border: '1px solid #E9E9EC',
                color: '#0D263B',
            }
    }
}

const Container = styled.input`
    display: flex;
    justify-content: start;
    align-items: center;
    border: none;
    height: 100%;
    outline: none;
    background: none;
    width: 100%;
    
`

const Wrapper = styled.div`
    ${({ type }) => getType(type)}
    display: flex;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    border-radius: 2px;
    height: ${({ height }) => height || '44px'};
    min-width: ${({ width }) => width || '200px'};
    width: 100%;
    width: ${({ width }) => width || '100%'};
    margin-top: ${({ mt }) => `${mt}px`};
    margin-right: ${({ mr }) => `${mr}px`};
    margin-bottom: ${({ mb }) => `${mb}px`};
    margin-left: ${({ ml }) => `${ml}px`};
`
const Icon = styled.div`
   margin-left: 10px;
`

export { Container, Wrapper, Icon };


