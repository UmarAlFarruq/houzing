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
                color: '#FFFFFF',
                border: '1px solid #0061DF',
            };
        default:
            return {
                border: '1px solid #E9E9EC',
                color: '#FFFFFF',
            }

    }
}

const Container = styled.button`
    display: flex;
    width: 100%;
    font-family: var(--headerFond);
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    background: none;

    height: ${({ height }) => height || '44px'};
    min-width: ${({ width }) => width || '100%'};
    width: ${({ width }) => width || '100%'};
    margin-top: ${({ mt }) => `${mt}px`};
    margin-right: ${({ mr }) => `${mr}px`};
    margin-bottom: ${({ mb }) => `${mb}px`};
    margin-left: ${({ ml }) => `${ml}px`};
    
    border-radius: 2px;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    ${({ type }) => getType(type)}
    :active{
        transform: scale(0.98);
        opacity: 0.7;
    }
`
export { Container };


