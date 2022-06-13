
import { Container, Title,Image } from "./style";
import { useNavigate } from 'react-router-dom';
import img from '../../../../assets/images/category.png'

export const Card = ({ info }) => {
    const navigate = useNavigate();
    const link = (id) => {
        navigate(`/properties?category_id=${id}`);
    }

    return (
        <Container onClick={() => link(info.id)}  >
            <Image src={img} />
            <Title>
                {info?.name}
            </Title>
        </Container>
    );
}