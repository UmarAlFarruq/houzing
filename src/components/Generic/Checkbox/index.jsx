
import { AntdCheckbox, Container, Title } from "./style";

export const Checkbox = ({
    onClick,
    mt,
    mr,
    mb,
    ml,
    children
}) => {
    return (
        <Container
            mt={mt}
            mr={mr}
            mb={mb}
            ml={ml}
        >
            <AntdCheckbox onChange={onClick} />
            <Title>{children}</Title>
        </Container>
    );
}
export default Checkbox;