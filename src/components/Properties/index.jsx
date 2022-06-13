
import React, { useState, useEffect } from "react";
import { Title, Body, Container } from "./style";
import { Card } from './../Generic/Card/index';
import { useQuery } from "react-query";
import { Filter } from '../Filter'
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from './../../hooks/useSearch';


export const Properties = () => {
    const { search } = useLocation();
    const quary = useSearch();
    const navigate = useNavigate();


    const [data, setData] = useState([]);
    const [title, setTitle] = useState('Properties');
    const { REACT_APP_BASE_URL: url } = process.env;

    useEffect(() => {
        if (!quary.get('category_id')) {
            setTitle('Properties')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quary.get('category_id')]);

    const { isLoading, isRefetching } = useQuery(
        ['getHouses'],
        () => {
            return quary.get('category_id') && fetch(`${url}/v1/categories/${quary.get('category_id')}`,
                {
                    headers: {
                        Authorization: ` Bearer ${localStorage.getItem('token')} `
                    }
                }
            ).then(res => res.json())
        },
        {
            onSuccess: (res) => quary.get('category_id') && setTitle(`${res?.data?.name}`),
            onError: (err) => console.log(err)
        }
    );

    useQuery(
        ['getHome', search],
        () => { return fetch(`${url}/v1/houses/list${search || '?'}`).then(res => res.json()) },
        {
            onSuccess: (res) => {
                setData(res?.data || []);
            },
            onError: (err) => console.log('err:', err)
        }
    );

    const onClick = (id) => {
        navigate(`/properties/${id}`)
    }

    return (
        <Container>
            <Filter />
            <Title>
                <Title.Title className='nocopy'> {isLoading || isRefetching ? 'Loading...' : title} </Title.Title>
                <Title.Description className='nocopy'  >
                    Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                </Title.Description>
            </Title>
            <Body.Wrapper>
                <Body>
                    {data.length > 0 ?
                        data.map((value) => {
                            return <Card onClick={() => onClick(value.id)} key={value.id} info={value} />
                        })
                        : <Title.Title className="nocopy" >No data</Title.Title>
                    }
                </Body>
            </Body.Wrapper>
        </Container>
    );
}