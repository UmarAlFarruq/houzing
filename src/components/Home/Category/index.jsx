
import { useRef } from 'react';
import { Card } from './Card'
import { Container, Wrapper, Cards, Icon, Title } from "./style";
import AliceCarousel from 'react-alice-carousel'
import { useState } from 'react';
import { useQuery } from 'react-query';

const { REACT_APP_BASE_URL: url } = process.env

export const Category = () => {


    const [item, setItem] = useState([])
    useQuery(
        ['getCategoryData'],
        () => { return fetch(`${url}/v1/categories/list`).then(res => res.json()) },
        {
            onSuccess: (res) => setItem(() => res.data.map(value => {
                return (<Card key={value.id} info={value} />)
            })),
            onError: (err) => console.log(err)
        }
    )

    const slider = useRef()
    return (
        <Container className="nocopy" >
            <Title.Title   > Category </Title.Title>
            <Title.Description>
                Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
            </Title.Description>
            <Wrapper>
                <Cards>
                    <AliceCarousel
                        ref={slider}
                        autoWidth={true}
                        mouseTracking
                        disableButtonsControls={true}
                        autoPlayInterval={4000}
                        autoPlay
                        items={item}
                    />
                    <Icon.Left onClick={() => slider.current.slidePrev()} />
                    <Icon.Right onClick={() => slider.current.slideNext()} />
                </Cards>
            </Wrapper>
        </Container>
    );
}