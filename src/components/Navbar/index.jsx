import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Houzing, activeStyle, Container, Logo, NavbarBody, NavbarWrapper, Wrapper } from "./style";
import { navbar } from './../../utils/navbar';
import houzing from '../../assets/images/houzingTitle.png'
import { Button } from "../Generic/Button";
import { Footer } from "../Footer";

export const Navbar = () => {
    const navigate = useNavigate();
    const onSiginIn = () => {
        navigate('signin')
    }
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
                        <Button onClick={onSiginIn} width={'120px'}>Sign in</Button>
                    </Logo>
                </NavbarWrapper>
            </Container>
            <Outlet />
            <Footer />
        </Wrapper>
    );
}