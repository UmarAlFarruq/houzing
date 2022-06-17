
import { Col, Form, Row, } from "antd";
import Map from "../../Generic/Map";
import { AntdInput, Button, Checkbox } from "../../Generic";
import { Container, Title, WrapperCard, Wrapper, Img } from "./style";

const AddHouse = () => {
  return (
    <Wrapper>
      <Container>
        <Form  
          onFinish={value=>console.log(value)  }
        >
          <Title.Title size={28} mt={34}  >Add new property</Title.Title>
          {/* Contact information */}
          <WrapperCard>
            <Row>
              <Col span={24} >
                <Title.Title size={18} mb={20} >Contact information</Title.Title>
              </Col>
              <Col span={12}  >
                <AntdInput name='Property title' placeholder='Property title*' />
              </Col>
              <Col span={12} >
                <AntdInput name='Type' placeholder={'Type*'} />
              </Col>
              <Col span={24} >
                <AntdInput description='' width={'98%'} placeholder='Property Description*' />
              </Col>
            </Row>
          </WrapperCard>
          {/* Additional */}
          <WrapperCard>
            <Row>
              <Col span={24} >
                <Title.Title size={18} mb={20} >Additional</Title.Title>
              </Col>
              <Col span={8}  >
                <AntdInput name='Property title' placeholder='Property ID' />
                <AntdInput name='Property title' placeholder='Label' />
                <AntdInput name='Property title' placeholder='Beds' />
                <AntdInput name='Property title' placeholder='Year build' />
                <AntdInput name='Property title' placeholder='Lot area (sqft)' />
              </Col>
              <Col span={8} >
                <AntdInput name='Type' placeholder={'Parent property'} />
                <AntdInput name='Type' placeholder={'Material'} />
                <AntdInput name='Type' placeholder={'Baths'} />
                <AntdInput name='Type' placeholder={'Home area (sqft)'} />
              </Col>
              <Col span={8} >
                <AntdInput name='Type' placeholder={'Status'} />
                <AntdInput name='Type' placeholder={'Rooms'} />
                <AntdInput name='Type' placeholder={'Garages'} />
                <AntdInput name='Type' placeholder={'Lot dimensions'} />
              </Col>
            </Row>
          </WrapperCard>
          {/* Price  */}
          <WrapperCard>
            <Row>
              <Col span={24} >
                <Title.Title size={18} mb={20} >Price</Title.Title>
              </Col>
              <Col span={12}  >
                <AntdInput name='Property title' placeholder='Price ($)' />
                <AntdInput name='Property title' placeholder='Price Suffix' />
              </Col>
              <Col span={12} >
                <AntdInput name='Type' placeholder={'Price Prefix'} />
                <AntdInput name='Type' placeholder={'Price Custom'} />
              </Col>
            </Row>
          </WrapperCard>
          {/* Location */}
          <WrapperCard>
            <Row>
              <Col span={24} >
                <Title.Title size={18} mb={20} >Location</Title.Title>
              </Col>
              <Col span={12}  >
                <AntdInput name='Property title' placeholder='Regions' />
              </Col>
              <Col span={12} >
                <AntdInput name='Type' placeholder='Friendly address' />
              </Col>
              <Col span={24} >
                <AntdInput description='' width={'98%'} placeholder='Map location' />
              </Col>
              <Col span={24} style={{ marginBottom: '24px' }} >
                <Map />
              </Col>
              <Col span={12}>
                <AntdInput name='Property title' placeholder='Latidude' />
              </Col>
              <Col span={12} >
                <AntdInput name='Type' placeholder='Logtitude' />
              </Col>
            </Row>
          </WrapperCard>
          {/* Media */}
          <WrapperCard>
            <Row>
              <Col span={24} >
                <Title.Title size={18} mb={20} > Media</Title.Title>
              </Col>
              <Title.D>Featured image</Title.D>
              <Col span={24}>
                <Img />
                <Img />
                <Img />
                <Img />
              </Col>
              <Col span={24} >
                <Button type='secondary' width='200px' mt={32} >Upload</Button>
                <Title.D  >Gallery</Title.D>
              </Col>
              <Col span={24}>
                <Button type='secondary' width='200px' mt={32} >Upload</Button>
                <Title.D  >Attachment</Title.D>
              </Col>
              <Col span={24}>
                <Title.D  >test_property.pdf</Title.D>
                <Button mb={20} type='secondary' width='200px' mt={32} >Upload</Button>
              </Col>
              <Col span={24}>
                <AntdInput placeholder='Video Link' />
                <AntdInput placeholder='Virtual tour' />
              </Col>
            </Row>
          </WrapperCard>
          {/* Amenities */}
          <WrapperCard>
            <Row>
              <Col span={24} >
                <Title.Title size={18} mb={20} > Amenities</Title.Title>
              </Col>
              <Col span={6} >
                <Checkbox>Air conditioning</Checkbox>
                <Checkbox>Barbeque</Checkbox>
                <Checkbox>Dryer</Checkbox>
                <Checkbox>Gym</Checkbox>
                <Checkbox>Laundry</Checkbox>
              </Col>
              <Col span={6} >
                <Checkbox>Lawn</Checkbox>
                <Checkbox>Microwave</Checkbox>
                <Checkbox>Outdoor Shower</Checkbox>
                <Checkbox>Refrigerator</Checkbox>
                <Checkbox>Stunning views</Checkbox>
              </Col>
              <Col span={6} >
                <Checkbox>Dining Room</Checkbox>
                <Checkbox>Fireplace</Checkbox>
                <Checkbox>Pets Allowed</Checkbox>
                <Checkbox>Unit Washer/Dryer</Checkbox>
                <Checkbox>Onsite Parking</Checkbox>
              </Col>
              <Col span={6} >
                <Checkbox>Waterfront</Checkbox>
                <Checkbox>Parking</Checkbox>
                <Checkbox>Doorman</Checkbox>
                <Checkbox>Central Heating</Checkbox>
                <Checkbox>Cleaning Service</Checkbox>
              </Col>
            </Row>
          </WrapperCard>
          {/* Select Energy Class */}
          <WrapperCard>
            <Title.Title size={18} >Select Energy Class</Title.Title>
            <Row style={{ marginTop: '16px' }}>
              <Col span={12}  >
                <AntdInput placeholder='Energy class' />
              </Col>
              <Col span={12} >
                <AntdInput placeholder='Energy Index in kWh/m2a' />
              </Col>
            </Row>
          </WrapperCard>
          <div style={{display:'flex', justifyContent:'flex-end' }} >
          <Button htmlType='submit' type={'primary'} mt={32} width={'280px'} >Submit</Button>
          </div>
        </Form>
      </Container>

    </Wrapper>
  );
}
export default AddHouse;


      // {/* <Form
      //   onFinish={(e) => console.log(e)}
      // >

      //   <AntdInput width={250} name='name' placeholder={'name'} />
      //   <AntdInput name='email' placeholder={'email'} />
      //   <AntdInput type={true} name={['obj', 'number']} placeholder={'number'} />
      //   <Button htmlType="submit" type='primary' >Submit</Button>
      // </Form> */}