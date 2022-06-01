
import { Container, Title } from "./style";
import { useNavigate } from 'react-router-dom';
export const Card = ({ info }) => {
    const navigate = useNavigate();
    const link = (value) => {
        navigate(`/properties?category_id=${value}`);
    }

    return (
        <Container onClick={() => link(info.id)}  >
            <Title>
                {info?.name}
            </Title>
        </Container>
    );
}