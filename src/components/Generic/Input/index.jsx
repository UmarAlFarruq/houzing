
import { Container, Wrapper, Icon } from "./style";

export const Input = ({
    children,
    onClick,
    type,
    width,
    height,
    mt,
    mr,
    mb,
    ml,
    onChange,
    placeholder,
    defaultValue
}) => {
    return (
        <Wrapper>
            <Icon>{children}</Icon>
            <Container
                onClick={onClick}
                defaultValue={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                width={width}
                height={height}
                type={type}
                mr={mr}
                mt={mt}
                mb={mb}
                ml={ml}
            >
            </Container>
        </Wrapper>
    );
}