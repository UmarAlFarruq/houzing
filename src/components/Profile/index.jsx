
import { Container, Title, Wrapper, Card, Listing } from "./style";
import { Button, Input } from '../Generic'
import { useQuery } from "react-query";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHttp } from './../../hooks/useHttp';
const Profile = () => {
  // const { request } = useHttp();
  const { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([])
  // console.log(data);
  const navigate = useNavigate()
  useQuery(
    'get data me',
    () => {
      return fetch(`${url}/v1/houses/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => res.json())
    },
    {
      onSuccess: res => { setData(res?.data || []); },
      onError: err => { console.log(err); }
    }
  )

  return (
    <Container>
      <Title>
        <Title.Title
          size={28}
          lineHeight={36}
          className="nocopy"
        >
          My properties
        </Title.Title>
        <Title.Generic>
          <Button type='primary' height="35px" width={'200px'}
            onClick={() => { navigate('/profile/add') }}
          >Add new House</Button>
          <Input ml={20} placeholder={'Search'} height="35px" width={'200px'} />
        </Title.Generic>
      </Title>
      <Wrapper>
        <Card.Titles className='nocopy' >
          <Card.Listing><Title.Title>Listing Title</Title.Title></Card.Listing>
          <Card.Data><Title.Title>Date Published</Title.Title> </Card.Data>
          <Card.Status><Title.Title ml={20}>Status</Title.Title></Card.Status>
          <Card.View><Title.Title>View</Title.Title></Card.View>
          <Card.Action><Title.Title>Action</Title.Title></Card.Action>
        </Card.Titles>
        <Card>
          {
            data?.map(value => {
              return (
                <Card.Titles key={value?.id} >
                  <Card.Listing>
                    <Listing.Info>
                      <Listing.Img src={value?.attachments[0]?.imgPath} alt='img' />
                      <Listing.Title>
                        <Listing.Title>
                          <Title.Title> {value?.city || 'New Apartment Nice Wiew'}</Title.Title>
                          <Title.Des> {value?.description || 'Quincy St, Brooklyn, NY, USA'} </Title.Des>
                        </Listing.Title>
                        <Listing.Title>
                          <Title.Des> <strike>${value?.salePrice || '5657'}/mo</strike> </Title.Des>
                          <Title.Title>${value?.price || '74548'}/mo</Title.Title>
                        </Listing.Title>
                      </Listing.Title>
                    </Listing.Info>
                    <Button type='primary' mt={6} height={'23px'} width={'71px'} pd={3} >For sale</Button>
                  </Card.Listing>
                  <Card.Data><Title.Des> {value?.address || 'New'}</Title.Des> </Card.Data>
                  <Card.Status><Title.Des ml={20} > {value?.address || 'New '}</Title.Des></Card.Status>
                  <Card.View><Title.Des> {value?.address || 'New'}</Title.Des></Card.View>
                  <Card.Action><Title.Des> {value?.address || 'New '}</Title.Des></Card.Action>
                </Card.Titles>
              )
            })
          }
        </Card>
      </Wrapper>
    </Container>
  );
}
export default Profile;