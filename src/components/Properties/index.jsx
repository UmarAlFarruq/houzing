
import React, { useState } from "react";
import { Title, Body, Container } from "./style";
import { Card } from './../Generic/Card/index';
import { useQuery } from "react-query";
import { Filter } from '../Filter'
import { useLocation } from "react-router-dom";

export const Properties = () => {
    const { search } = useLocation();

    const [data, setData] = useState([]);
    const { REACT_APP_BASE_URL: url } = process.env
    useQuery(
        ['getHomeList', search],
        () => { return fetch(`${url}/v1/houses/list${search || '?'}`).then(res => res.json()) },
        {
            onSuccess: (res) => {
                // console.log('res:', res?.dataList[0])
                setData(res?.dataList[0] || [])
            }
        }
    )
    return (
        <Container>
            <Filter />
            <Title>
                <Title.Title className='nocopy'> Properties </Title.Title>
                <Title.Description className='nocopy'>
                    Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                </Title.Description>
            </Title>
            <Body.Wrapper>
                <Body>
                    {
                        data.map((value, index) => {
                            return <Card key={value.id} info={value} />

                        })
                    }
                </Body>
            </Body.Wrapper>
        </Container>
    );
}