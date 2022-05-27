
import { Filter } from "../Filter";
import { Carousel } from "./Carousel";
import { Container } from "./style";
import { Recommended } from './Recommended/index';

export const Home = () => {
    return (
        <Container>
            <Filter />
            <Carousel />
            <Recommended />
        </Container>
    );
}