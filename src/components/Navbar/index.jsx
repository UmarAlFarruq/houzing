import { Outlet, NavLink } from "react-router-dom";
import { activeStyle, Container, Logo, NavbarBody, NavbarWrapper, Wrapper } from "./style";
import { navbar } from './../../utils/navbar';

export const Navbar = () => {
    return (
        <Wrapper>
            <Container className="nocopy" >
                <NavbarWrapper>
                    <Logo>
                        <Logo.Icon />
                        <Logo.Title>
                            Houzing
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
                        <button style={{ width: '120px' }} >Sign in</button>
                    </Logo>
                </NavbarWrapper>
            </Container>
            <Outlet />
        </Wrapper>
    );
}