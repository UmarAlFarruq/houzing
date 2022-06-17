import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Houzing, activeStyle, Container, Popoverr, Logo, NavbarBody, NavbarWrapper, Wrapper } from "./style";
import { navbar } from './../../utils/navbar';
import { Button } from "../Generic";
import { Footer } from "../Footer";
import { Popover } from "antd";
import houzing from '../../assets/images/houzingTitle.png'

export const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const onSiginIn = () => {
        navigate('signin')
    }
    const logout = () => {
        localStorage.removeItem('token');
        if (location?.pathname?.includes('profile')) {
            navigate('/home');
        } if (location.search) {
            navigate(`${window?.location?.pathname}${window.location.search}`)
        } else {
            navigate(location.pathname)
        }
    }
    const content = (
        <div>
            <Popoverr.Title bt={1} pb={25} > <Logo.Setting />
                <Popoverr onClick={() => navigate('/profile')} >Profile</Popoverr>
            </Popoverr.Title>
            <Popoverr.Title onClick={logout} mt={10} >
                <Logo.Logout /> <Popoverr>Log Out</Popoverr>
            </Popoverr.Title>
        </div>
    )
    const title = (
        <Popoverr>
            User Name
        </Popoverr>
    )
    return (
        <Wrapper>
            <Container className="nocopy" >
                <NavbarWrapper>
                    <Logo onClick={() => navigate('/home')} >
                        <Logo.Icon />
                        <Logo.Title>
                            <Houzing src={houzing} />
                        </Logo.Title>
                    </Logo>
                    <NavbarBody>
                        {
                            navbar.map((value) => {
                                return (
                                    !value.hidden && (
                                        <NavLink style={activeStyle} key={value.id} to={value.path} >
                                            {value.title}
                                        </NavLink>
                                    )
                                )
                            })
                        }
                    </NavbarBody>
                    <Logo>
                        {localStorage.getItem('token') ?
                            <Popover placement="bottomRight"
                                title={title}
                                content={content}
                                trigger="click">
                                <Logo.User />
                            </Popover>
                            : <Button onClick={onSiginIn} width={'120px'}>Sign in</Button>
                        }
                    </Logo>
                </NavbarWrapper>
            </Container>
            <Outlet />
            <Footer />
        </Wrapper>
    );
}