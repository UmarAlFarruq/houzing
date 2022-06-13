
import {
    Container,
    Data,
    H5,
    Icon,
    Img,
    Infos,
    Message,
    Title, User, WrapperIconsDiv, WrapperImg
} from "./style";
import img from '../../../assets/images/avatar1.png';
import { Input, Button, Checkbox } from "../../Generic";

const Body = ({ data }) => {
    return (
        <Container>
            <Infos>
                <Infos.Detailes>
                    <Infos.Info>
                        <Title.Title size={24} lineHeight={32} >
                            {data?.address || 'Luxury Family Loft by Victoria Park'}
                        </Title.Title>
                        <Title.Description size={16} mt={8} lineHeight={24} >
                            {data?.description || 'Quincy St, Brooklyn, NY, USA'}
                        </Title.Description>
                        <WrapperIconsDiv mt={32} >
                            <WrapperIconsDiv.W className='nocopy' >
                                <Icon.Beds />
                                <Title.Description ml={8}  >{data?.houseDetails?.beds || 0} Beds</Title.Description>
                            </WrapperIconsDiv.W>
                            <WrapperIconsDiv.W>
                                <Icon.Baths />
                                <Title.Description ml={8}  >{data?.houseDetails?.bath || 0} Baths</Title.Description>
                            </WrapperIconsDiv.W>
                            <WrapperIconsDiv.W>
                                <Icon.Garage />
                                <Title.Description ml={8}  >{data?.houseDetails?.garage || 0}  Garage</Title.Description>
                            </WrapperIconsDiv.W>
                            <WrapperIconsDiv.W>
                                <Icon.Room />  
                                <Title.Description ml={8}  > {data?.houseDetails?.area || 0} Room</Title.Description>
                            </WrapperIconsDiv.W>
                            <WrapperIconsDiv.W>
                                <Icon.YourBuilt />
                                <Title.Description ml={8}  >  Year Built: {data?.houseDetails?.yearBuilt || 0}</Title.Description>
                            </WrapperIconsDiv.W>
                        </WrapperIconsDiv>
                    </Infos.Info>
                    <Infos.PriceDiv className='nocopy' >
                        <Infos.Div>
                            <Icon.Wrapper>
                                <Icon.Share />
                            </Icon.Wrapper>
                            <Title.Description  ml={10} >Share</Title.Description>
                            <Icon.Wrapper ml={36} >
                                <Icon.Love />
                            </Icon.Wrapper>
                            <Title.Description  ml={10} >Save</Title.Description>
                        </Infos.Div>
                        <Infos.Div mt={25} >
                            <Title.Description>  <strike> ${data?.salePrice || ''}/mo </strike> </Title.Description>
                            <Title.Title ml={10} size={24} lineHeight={32} >  ${data?.price || '0'}/mo  </Title.Title>
                        </Infos.Div>
                        <Title.Description mt={4} >Est. Mortgage</Title.Description>
                    </Infos.PriceDiv>
                </Infos.Detailes>
                <Title.Title size={18} lineHeight={28} mt={48} className='nocopy'>
                    Description
                </Title.Title>
                <Title.Description mt={16} className='nocopy' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officia quisquam iusto nostrum asperiores dolore alias nam? Dolor magni deserunt impedit libero eum aut a dicta ut, omnis magnam itaque! Laudantium facere modi reiciendis, est sequi eligendi beatae quo sed soluta consequatur vero, accusantium libero magnam amet. Quibusdam tenetur neque atque magnam! Tenetur cupiditate laboriosam, quam magni unde illo a, laudantium natus ex corporis sunt culpa voluptates eveniet. Aliquam veniam architecto in error eius laudantium modi tempore itaque, aut, cupiditate labore tenetur officiis fuga nemo voluptatibus voluptatum aspernatur. Voluptatibus exercitationem et, voluptates numquam porro ratione unde. Commodi harum molestias, accusantium fugiat debitis quae assumenda nam beatae unde, aliquid adipisci. Inventore, quibusdam? Est fugit consequuntur corporis nam, saepe beatae sed distinctio?

                    <Title.Link mt={20} size={14}  >Show more</Title.Link>
                </Title.Description>
                <Title.Title mt={38}>Documents</Title.Title>
                <WrapperIconsDiv mt={20} >
                    <WrapperIconsDiv.W >
                        <Icon.Download />
                        <Title.Description  ml={8}  >
                            test_property.pdf
                        </Title.Description>
                        <Title.Link  ml={24} size={12} >DOWNLOAD</Title.Link>
                    </WrapperIconsDiv.W>
                    <WrapperIconsDiv.W >
                        <Icon.Download />
                        <Title.Description  ml={8} >
                            test_property.pdf
                        </Title.Description>
                        <Title.Link  ml={24} size={12}>DOWNLOAD</Title.Link>
                    </WrapperIconsDiv.W>
                    <WrapperIconsDiv.W >
                        <Icon.Download />
                        <Title.Description  ml={8} >
                            test_property.pdf
                        </Title.Description>
                        <Title.Link  ml={24} size={12}>DOWNLOAD</Title.Link>
                    </WrapperIconsDiv.W>
                </WrapperIconsDiv>
            </Infos>
            <User>
                <WrapperImg>
                    <Img className="nocopy" src={data?.user?.img || img} />
                    <Data>
                        <H5>{data?.user?.firstname || 'Darrel Steward'}</H5>
                        <H5.Number>{data?.user?.number || '(93)-110-11-01'}</H5.Number>
                    </Data>
                </WrapperImg>
                <Input height="34px" width={'232px'} mt={26} placeholder={'Name'} />
                <Input height="34px" width={'232px'} mt={26} placeholder={'Phone'} />
                <Input height="34px" width={'232px'} mt={26} mb={28} placeholder={'Email'} />
                <H5 className="nocopy" > Message </H5>
                <Message>{data?.message || 'Hello, I am interested in [New Apartment]'} </Message>
                <Checkbox mt={24} > By submitting this form I agree to Terms of Use</Checkbox>
                <Button mt={24} type={'primary'} > Send request </Button>
            </User>
        </Container>
    );
}
export default Body;