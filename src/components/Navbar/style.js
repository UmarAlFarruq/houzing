import styled from 'styled-components';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';
import { ReactComponent as user } from '../../assets/icons/user.svg';
import { ReactComponent as setting } from '../../assets/icons/setting-lines.svg';
import { ReactComponent as logout } from '../../assets/icons/logout.svg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const NavbarWrapper = styled.div`
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
    padding: 0 130px;
    `
const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const NavbarBody = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: white;
    font-family:var(--headerFond) ;
`
const Houzing = styled('img')`
    width:72.86 ;
    height: 18.29;
`
const Container = styled.div`
    /* width: 100wh; */
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primaryColor);
 `
Logo.Icon = styled(logo)``;
Logo.Title = styled('div')`
    margin-left: 11px;
    font-size: 24px;
    font-weight: 900px;
`
Logo.User = styled(user)`
    cursor: pointer;
    width: 25px;
    height: 25px;
    /* border-radius: 30%; */
    & path{
        fill:white;
    }
`
Logo.Setting = styled(setting)``
Logo.Logout = styled(logout)`
    width: 18px;
    height: 18px;
`

const Popoverr = styled(Logo.Title)`
    color: var(--primaryColor);
    font-weight: 600;
    font-size: 14px;
    :hover{
        color: var(--activeColor);
        transform: translateX(10px);
        transition: 0.5s;
    }
`
Popoverr.Title = styled.div`
    display: flex;
    height: 100%;
    font-size: 16px;
    height: 20px;
    width:100%;
    border-bottom: ${({ bt }) => ` ${bt}px `}solid whitesmoke ;
    :hover{
        cursor:pointer;
    }
    margin-top: ${({ mt }) => `${mt}px`};
    padding-bottom: ${({ pb }) => `${pb}px`};
`



const activeStyle = ({ isActive }) => {
    return {
        color: isActive ? '#00fff5' : 'white',
        textDecoration: 'none',
        margin: '0 25px',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
    }
}


export { Popoverr, Houzing, Container, Wrapper, NavbarBody, Logo, NavbarWrapper, activeStyle };


