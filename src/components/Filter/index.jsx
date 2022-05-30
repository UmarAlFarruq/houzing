import { Container, Icon, Advanced, Section } from "./style";
import { Button } from "../Generic/Button";
import { Input } from "../Generic/Input";
import { Popover } from "antd";
import UseReplace from "../../hooks/useReplace";
import { useNavigate } from 'react-router-dom';


export const Filter = () => {
    const navigate  = useNavigate();

    const onChange = ({ target }) => {
        const { name, value } = target
        navigate(`${UseReplace(name, value)}`)
      
        
    }

    const AdvancedSearch = (
        <Advanced>
            <Advanced.Title>Address</Advanced.Title>
            <Section>
                <Input onChange={onChange} name='country' placeholder="Country" />
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