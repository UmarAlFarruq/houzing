import { Checkbox } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 232px;
    height: 40px;
    margin-top: ${({ mt }) => `${mt}px`};
    margin-left: ${({ ml }) => `${ml}px`};
    margin-right: ${({ mr }) => `${mr}px`};
    margin-bottom: ${({ mb }) => `${mb}px`};
`
const AntdCheckbox = styled(Checkbox)``

const Title = styled.p`
    margin-left: 8px;
    font-family: var(--headerFont);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
`

export { Container, AntdCheckbox, Title };


