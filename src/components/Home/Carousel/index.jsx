
import { useRef } from 'react';
import { Container, WrappperCarusel, Img, Icon } from "./style";
import img1 from '../../../assets/images/home-img.jpg'
import img2 from '../../../assets/images/popular-home-img.jpg'

export const Carousel = () => {
    const slider = useRef()
    return (
        <Container>
            <Icon.Left onClick={() => slider.current.prev()} />
            <Icon.Right onClick={() => slider.current.next()} />
            <WrappperCarusel ref={slider} dots autoplay >
                <Img src={img1} alt="img" />
                <Img src={img2} alt="img" />
                <Img src={img1} alt="img" />
                <Img src={img2} alt="img" />
                <Img src={img1} alt="img" />
                <Img src={img2} alt="img" />
            </WrappperCarusel>
        </Container>
    );
}