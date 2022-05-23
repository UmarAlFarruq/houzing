
import { Container } from "./style";

export const Button = ({
    children,
    onClick,
    width,
    height,
    type,
    size,
    mr,
    ml,
    mb,
    mt

}) => {
    return (
        <Container
            className="nocopy"
            onClick={onClick}
            width={width}
            height={height}
            type={type}
            mr={mr}
            mt={mt}
            mb={mb}
            ml={ml}
            size={size}
        >
            {children}
        </Container>
    );
}