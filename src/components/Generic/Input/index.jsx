
import { Container, Wrapper, Icon } from "./style";

 const Input = ({
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
    defaultValue,
    name,
    value
}) => {
    return (
        <Wrapper
            width={width}
            height={height}
            type={type}
            mr={mr}
            mt={mt}
            mb={mb}
            ml={ml}
        >
            <Icon>{children}</Icon>
            <Container
                onClick={onClick}
                defaultValue={defaultValue}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            >
            </Container>
        </Wrapper>
    );
}

export default Input;