import styled from 'styled-components';
import { ReactComponent as beds } from '../../../assets/icons/beds.svg'
import { ReactComponent as baths } from '../../../assets/icons/bath.svg'
import { ReactComponent as garage } from '../../../assets/icons/car.svg'
import { ReactComponent as room } from '../../../assets/icons/room.svg'
import { ReactComponent as love } from '../../../assets/icons/love 1.svg'
import { ReactComponent as yourbuilt } from '../../../assets/icons/yourbuilt.svg'
import { ReactComponent as download } from '../../../assets/icons/download.svg'
import { ReactComponent as share } from '../../../assets/icons/share.svg'

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: 24px;
    `
const Infos = styled.div`
    width: 880px;
    display: flex;
    flex-direction: column;
    padding-bottom: 38px;
    border-bottom: 1px solid #E6E9EC;
`
Infos.Detailes = styled.div`
    display: flex;
    justify-content: space-between;
`
Infos.Info = styled.div`
    display  :flex ;
    flex-direction: column;
    padding-right: 20px;
`
const WrapperIconsDiv = styled.div`
    display: flex;
    margin-top:${({ mt }) => `${mt}px` || '32px'} ;
`
WrapperIconsDiv.W = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    margin-right: 24px;
`


Infos.PriceDiv = styled.div`

`
const Title = styled.div``
Title.Title = styled.div`
    font-family: var(--headerFont);
    font-size: ${({ size }) => `${size}px` || '18px'};
    font-style: normal;
    font-weight: 600;
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '28px'};
    margin-top: ${({ mt }) => `${mt}px`};
    margin-left: ${({ ml }) => `${ml}px`};
`
Title.Description = styled.div`
    font-family: var(--headerFont);
    font-style: normal;
    font-weight: 400;
    font-size: ${({ size }) => `${size}px` || '14px'};
    color: #696969;
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '20px'};
    margin-top: ${({ mt }) => `${mt}px` || '0px'};
    margin-left: ${({ ml }) => `${ml}px`};
    `
Title.Link = styled.div`
    font-size: ${({ size }) => `${size}px` || '12px'};
    color:  #0061DF;
    font-family: var(--headerFont);
    font-weight: ${({ fontW }) => `${fontW}` || 400};
    border-bottom: 0.5px solid  #0061DF;
    margin-top: ${({ mt }) => `${mt}px` || '0px'};
    margin-left: ${({ ml }) => `${ml}px`};
    cursor: pointer ;
    width: fit-content;
`

const User = styled.div`
    width: 280px;
    height: fit-content;
    margin-left:20px ;
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    border-radius: 3px;
    padding: 24px;
`
const WrapperImg = styled.div`
    display: flex;
    
`
const Data = styled.div`
    display: flex;
    flex-direction: column;
    height: 52px;
    width: fit-content;
    margin-left:12px ;
    justify-content:space-between;
`

const Img = styled.img`
    width: 52px;
    height: 52px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
`
const H5 = styled.h5`
    font-family: var(--headerFont);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0D263B;
`
H5.Number = styled(H5)`
    font-weight: 400;
`
const Message = styled.div`
   border-bottom: 1px solid #0D263B;
   width:232px;
   margin-top: 8px;
`

const Icon = styled.div``;
Icon.Beds = styled(beds)`
    color: #696969;
`
Icon.Baths = styled(baths)`
    color: #696969;
`;
Icon.Garage = styled(garage)`
    color: #696969;
`;
Icon.Room = styled(room)`
    color: #696969;
    height: 26px;
    width:26px;
`;
Icon.YourBuilt = styled(yourbuilt)`
    color: #696969;
`;
Icon.Download = styled(download)`
    color: #696969;
    /* margin-bottom: 12px; */
`
Icon.Love = styled(love)`
    color: #696969;
    :hover{
        cursor: pointer;
    }
`;
Icon.Share = styled(share)`
    color: #696969;
    :hover{
        cursor: pointer;
    }
`;
Icon.Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: #F6F8F9;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
    margin-left: ${({ ml }) => `${ml}px`};
`
Infos.Div = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${({ mt }) => `${mt}px` || '0px'};
    margin-left: ${({ ml }) => `${ml}px`};
    justify-content: space-between;
`




export { Icon, WrapperIconsDiv, Title, Message, Container, Infos, User, Img, WrapperImg, Data, H5 };


