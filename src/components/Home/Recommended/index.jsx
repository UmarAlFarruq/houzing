
import { useRef } from 'react';
import { Card } from '../../Generic/Card'
import { Container, Wrapper, Cards, Icon, Title } from "./style";
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
            <Title.Title   > Recommended </Title.Title>
            <Title.Description>
                Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
            </Title.Description>
            <Wrapper>
                <Cards>
                    <AliceCarousel
                        // arrows={false}
                        ref={slider}
                        autoWidth={true}
                        mouseTracking
                        disableButtonsControls={true}
                        autoPlayInterval={4000}
                        autoPlay
                        items={item}
                        responsive = {{
                            0: { items: 1 },
                            576: { items: 2 },
                            992: { items: 3 },
                        }}
                    />
                    <Icon.Left onClick={() => slider.current.slidePrev()} />
                    <Icon.Right onClick={() => slider.current.slideNext()} />
                </Cards>
            </Wrapper>
        </Container>
    );
}