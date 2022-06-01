
import { Container, User, InfoWrapper, PriceWrapper, Price, Image, Info, IconWrapper, Icons } from "./style";
import noimg from '../../../assets/images/noimage.png'
import user from '../../../assets/images/user.jpg'

export const Card = ({ info, mr, mt, }) => {
    return (
        <Container mr={mr} mt={mt} className="nocopy" >
            <Image src={info?.attachments[0]?.imgPath || noimg} alt='house img' />
            <InfoWrapper>
                <User>
                    <User.Img src={info?.user || user} />
                </User>
                <Info.Title>
                    {info?.address || 'New Apartment Nice Wiew'} <br />
                    Cotegory:  {info?.category?.name || 'Category'}
                </Info.Title>
                <Info.Text>
                    {info?.description || 'Quincy St, Brooklyn, NY, USA'}
                </Info.Text>
                <Info.Detailes>
                    <IconWrapper>
                        <Icons.Beds />
                        <Info.Text>{info?.houseDetails?.beds || 0}  Beds</Info.Text>
                    </IconWrapper>
                    <IconWrapper>
                        <Icons.Baths />
                        <Info.Text>{info?.houseDetails?.bath || 0} Baths</Info.Text>
                    </IconWrapper>
                    <IconWrapper>
                        <Icons.Garage />
                        <Info.Text>{info?.houseDetails?.garage || 0}  Garage</Info.Text>
                    </IconWrapper>
                    <IconWrapper>
                        <Icons.SqFt />
                        <Info.Text>{info?.houseDetails?.room || 0}  Sq Ft</Info.Text>
                    </IconWrapper>
                </Info.Detailes>
            </InfoWrapper>
            <PriceWrapper>
                <Price.Price>
                    <strike>$ {info?.salePrice || '0'}/mo</strike>
                    <h5>{info?.price || '0'}/mo</h5>
                </Price.Price>
                <Price.Button>
                    <Icons.Vektor />
                    <Icons.Love />
                </Price.Button>
            </PriceWrapper>
        </Container>
    );
}

// 11.When to use a Class Component over a Function Component (Qachon Function Qachon Class Component ishlatgan maqul)
// 12.What are Pure Components(Pure Component nima?)
// 13.controlled vs unconteolled componentlar nima ?
// 14. What are forword refs.( 23. What are forword refs).
// 15.What are synthetic events in React?( Eventg qanday qilib parometr jo’natadi)
// 17. What is  ‘key’ prop and what is the benefit of usingS it in arrays of elements
// (Listlarda nimaga “key” ishlatiladi.
// 18. What is React Fiber