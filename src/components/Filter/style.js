import styled from 'styled-components';
import { ReactComponent as search } from '../../assets/icons/search-icon.svg'
import { ReactComponent as setting } from '../../assets/icons/setting-lines.svg'
import { ReactComponent as key } from '../../assets/icons/home-icon.svg'


const Container = styled.div`
    display: flex;
    max-width: var(--width);
    width: 100%;
    margin: 10px 0;
    padding: 0px 130px;
    gap: 20px;
`
const Section = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-bottom: 15px;
    margin-top: 10px;
`
const Advanced = styled.div`
    border-radius: 10px ;
    padding: 10px;
    width: fit-content;
    height: fit-content;
`
Advanced.Title = styled.div`
    /* font-family: var(--headerFond); */
    font-weight: 600;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    color: var(--primaryColor);
    margin-bottom: 10  px;
`
const Icon = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
`;
Icon.Setting = styled(setting)`
    margin-right: 10px;
`;
Icon.Search = styled(search)`
    margin-right: 10px;
`;
Icon.Key = styled(key)`
    margin-right: 10px;
`;

export { Container, Icon, Advanced, Section };


