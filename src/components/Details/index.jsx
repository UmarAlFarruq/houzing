
import { Container, Wrapper } from "./style";
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { GridImage } from "./Grid-Image";
import Body from "./Body";
import Map from "./Map";
const { REACT_APP_BASE_URL: url } = process.env;

export const Details = () => {
    const [item, setItem] = useState([])
    const { id } = useParams();

    useQuery(['getHouse by id', id], () =>
        fetch(`${url}/v1/houses/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => res.json()),
        {
            onSuccess: (res) => setItem(res?.data),
            onError: (err) => console.log(err)
        }
    )
    return (
        <Wrapper>
            <Container>
                <GridImage data={item} />
                <Body data={item} />
                <Map data={item}/>
            </Container>
        </Wrapper>
    );
}