import { Container, Icon, Advanced, Section } from "./style";
import { Button } from "../Generic/Button";
import { Input } from "../Generic/Input";
import { Popover } from "antd";


export const Filter = () => {
    const AdvancedSearch = (
        <Advanced>
            <Advanced.Title>Address</Advanced.Title>
            <Section>
                <Input placeholder="Country" />
                <Input placeholder="Region" />
                <Input placeholder="City" />
                <Input placeholder="Zip code" />
            </Section>
            <Advanced.Title>Apartment info</Advanced.Title>
            <Section>
                <Input placeholder="Rooms" />
                <Input placeholder="Size" />
                <Input placeholder="Sort" />
            </Section>
            <Advanced.Title>Price</Advanced.Title>
            <Section>
                <Input placeholder="Min price" />
                <Input placeholder="Max price" />
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