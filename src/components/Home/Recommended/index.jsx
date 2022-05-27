
import { useRef } from 'react';
import { Card } from '../../Generic/Card'
import { Container, Wrapper, Cards, Icon } from "./style";
import AliceCarousel from 'react-alice-carousel'
export const Recommended = () => {
    const slider = useRef()
    const item = [
        <Card />,
        <Card />,
        <Card />,
        <Card />,
        <Card />,
        <Card />,
        <Card />,
        <Card />,
    ]
    return (
        <Container className="nocopy" >
            <div>Recommended</div>
            <div>
                Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
            </div>
            <Wrapper>
                <Cards>
                    <AliceCarousel
                        arrows={false}
                        ref={slider}
                        autoWidth
                        mouseTracking
                        items={item}
                    />
                </Cards>
                <Icon.Left onClick={() => slider.current.slidePrev()} />
                <Icon.Right onClick={() => slider.current.slideNext()} />
            </Wrapper>
        </Container>
    );
}