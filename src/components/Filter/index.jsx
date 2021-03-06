import { useState } from 'react';
import { Container, Icon, Advanced, Section } from "./style";
import { Button,Input } from "../Generic";
import { Popover, Select } from "antd";
import UseReplace from "../../hooks/useReplace";
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import useSearch from '../../hooks/useSearch';

const { Option } = Select;
const { REACT_APP_BASE_URL: url } = process.env;

export const Filter = () => {
    const quary  = useSearch();
    const [title, setTitle] = useState( quary.get('category_id'))
    const navigate = useNavigate();

    const onChange = ({ target }) => {
        const { name, value } = target
        navigate(`${UseReplace(name, value)}`)
    }
    const onSelect = (e) => {
        setTitle(e)
        navigate(`${UseReplace('category_id', e)}`);
    }
    const { data } = useQuery(
        ['getCategorydata'],
        () => { return fetch(`${url}/v1/categories/list`).then(res => res.json()) },
        {
            onSuccess: (res) => { return res; },
        }
    )


    const AdvancedSearch = (
        <Advanced>
            <Advanced.Title>Address</Advanced.Title>
            <Section>
                <Input  onChange={onChange} name='country' placeholder="Country" />
                <Input onChange={onChange} name='region' placeholder="Region" />
                <Input onChange={onChange} name='city' placeholder="City" />
                <Input onChange={onChange} name='zip_code' placeholder="Zip code" />
            </Section>
            <Advanced.Title>Apartment info</Advanced.Title>
            <Section>
                <Input onChange={onChange} name='adress' placeholder="Adress" />
                <Input onChange={onChange} name='house_name' placeholder="House name" />
                <Input onChange={onChange} name='rooms' placeholder="Rooms" />
            </Section>
            <Advanced.Title>Price</Advanced.Title>
            <Section>
                <Input onChange={onChange} name='min_price' placeholder="Min price" />
                <Input onChange={onChange} name='max_price' placeholder="Max price" />
                <Select
                    name='category_id'
                    onChange={onSelect}
                    size="large"
                    placeholder="Category"
                    // value={2}
                    value={Number(title)}
                    style={{ minWidth: 200 }}
                >
                    {data?.data?.map(value => {
                        return <Option key={value.id} value={value.id}>{value.name}</Option>
                    })}
                </Select>
            </Section>
            <Section>
                <Button
                    type={'secondary'}
                    width={'131px'}
                >
                    Canel
                </Button>
                <Button
                    type={'primary'}
                    width={'180px'}
                >
                    <Icon.Search />
                    Search
                </Button>
            </Section>
        </Advanced >
    );
    return (
        <Container>
            <Input
                placeholder="Enter an address, neighborhood, city, or ZIP code"
            >
                <Icon.Key />
            </Input>
            <Popover
                placement="bottomRight"
                // title={'Advanced'}
                content={AdvancedSearch}
                trigger="click"
                footer={'salom'}
            >
                <Button
                    type={'secondary'}
                    width={'131px'}
                >
                    <Icon.Setting /> Advanced
                </Button>
            </Popover>
            <Button
                type={'primary'}
                width={'180px'}
            >
                <Icon.Search />
                Search
            </Button>
        </Container>
    );
}