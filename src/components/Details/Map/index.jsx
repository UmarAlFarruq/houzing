import React from 'react';
import { Container, Title, Wrapper, WrapperDetails, WrapprDescription, MapStyle } from "./style";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '880px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};
const Map = ({ data }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <Container>
      <Wrapper>
        <Title.Title size={18} >Location </Title.Title>
        <WrapprDescription>
          <WrapperDetails  >
            <Title.Title>Address: <Title.Des>{data?.address}</Title.Des>  </Title.Title>
            <Title.Title>State/Country:<Title.Des>{data?.region}</Title.Des> </Title.Title>
          </WrapperDetails >
          <WrapperDetails   >
            <Title.Title>City:<Title.Des>{data?.city}</Title.Des></Title.Title>
            <Title.Title>Zip:<Title.Des>{data?.zipCode}</Title.Des> </Title.Title>
          </WrapperDetails>
          <WrapperDetails   >
            <Title.Title>Area:<Title.Des>{data?.houseDetails?.area}</Title.Des></Title.Title>
            <Title.Title>Country:<Title.Des>{data?.country}</Title.Des> </Title.Title>
          </WrapperDetails>
        </WrapprDescription>
      </Wrapper>
      <MapStyle>
        {
          isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <></>
            </GoogleMap>
          ) : <></>
        }
      </MapStyle>
      <Wrapper>
        <Title.Title size={18} >Property Details </Title.Title>
        <WrapprDescription>
          <WrapperDetails  >
            <Title.Title  onClick={()=>setMap(map)} >Property ID: <Title.Des>{data?.id}</Title.Des>  </Title.Title>
            <Title.Title>Price: <Title.Des>${data?.price}</Title.Des>  </Title.Title>
            <Title.Title>Property Size: <Title.Des>{data?.size}</Title.Des>  </Title.Title>
            <Title.Title>Year Bulit: <Title.Des>{data?.houseDetails?.yearBuilt}</Title.Des> </Title.Title>
          </WrapperDetails >
          <WrapperDetails   >
            <Title.Title>Bedrooms:<Title.Des>{data?.houseDetails?.beds}</Title.Des> </Title.Title>
            <Title.Title>Bathrooms:<Title.Des>{data?.houseDetails?.bath}</Title.Des></Title.Title>
            <Title.Title>Garage:<Title.Des>{data?.houseDetails?.garage}</Title.Des></Title.Title>
            <Title.Title>Garage size:<Title.Des>{data?.houseDetails?.name}</Title.Des> </Title.Title>
          </WrapperDetails>
          <WrapperDetails   >
            <Title.Title>Property Type:<Title.Des>{data?.category?.name}</Title.Des></Title.Title>
            <Title.Title>Property Status:<Title.Des>{data?.status ? 'For sale' : 'Not for sale'}</Title.Des> </Title.Title>
          </WrapperDetails>
        </WrapprDescription>
      </Wrapper>
    </Container>
  );
}
export default Map;