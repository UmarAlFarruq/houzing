
import { Filter } from "../Filter";
import { Carousel } from "./Carousel";
import { Container } from "./style";
import { Recommended } from './Recommended/index';
import { Category } from "./Category";

export const Home = () => {
    return (
        <Container>
            <Filter />
            <Carousel />
            <Recommended />
            <Category />
        </Container>
    );
}