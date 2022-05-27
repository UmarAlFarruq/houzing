
import { Container, InfoWrapper, PriceWrapper, Price, Image, Info, IconWrapper, Icons } from "./style";
import noimg from '../../../assets/images/noimage.png'


export const Card = ({ info, mr, mt, }) => {
    return (
        <Container mr={mr} mt={mt} className="nocopy" >
            <Image src={info?.img || noimg} />
            <InfoWrapper>
                <Info.Title>
                    {info?.title || 'New Apartment Nice Wiew'}
                </Info.Title>
                <Info.Text>
                    {info?.text || 'Quincy St, Brooklyn, NY, USA'}
                </Info.Text>
                <Info.Detailes>
                    <IconWrapper>
                        <Icons.Beds />
                        <Info.Text>{info?.houseDetailes || 0}  Beds</Info.Text>
                    </IconWrapper>
                    <IconWrapper>
                        <Icons.Baths />
                        <Info.Text>{info?.houseDetailes || 0} Baths</Info.Text>
                    </IconWrapper>
                    <IconWrapper>
                        <Icons.Garage />
                        <Info.Text>{info?.houseDetailes || 0}  Garage</Info.Text>
                    </IconWrapper>
                    <IconWrapper>
                        <Icons.SqFt />
                        <Info.Text>{info?.houseDetailes || 0}  Sq Ft</Info.Text>
                    </IconWrapper>
                </Info.Detailes>
            </InfoWrapper>
            <PriceWrapper>
                <Price.Price>
                    <strike>$8300/mo</strike>
                    <h5>{info?.price || '$7700/mo'}</h5>
                </Price.Price>
                <Price.Button>
                    <Icons.Vektor />
                    <Icons.Love />
                </Price.Button>
            </PriceWrapper>
        </Container>
    );
}