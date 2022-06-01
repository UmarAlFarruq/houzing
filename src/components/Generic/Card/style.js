import styled from 'styled-components';
import { ReactComponent as beds } from '../../../assets/icons/beds.svg'
import { ReactComponent as baths } from '../../../assets/icons/bath.svg'
import { ReactComponent as garage } from '../../../assets/icons/car.svg'
import { ReactComponent as sqFt } from '../../../assets/icons/ruler.svg'
import { ReactComponent as love } from '../../../assets/icons/love 1.svg'
import { ReactComponent as vektor } from '../../../assets/icons/arrow-top-bottom.svg'

const Container = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content:space-between;
    width: 100%;
    min-width:250px;
    max-width: 380px;
    background: #ffffff;
    min-height: 450px;
    border: 1px solid rgba(230, 233, 236, 1);
    border-radius: 3px;
    :hover{
        /* filter:drop-shadow(0 20px 38px rgba(0,0,0,0,06))
        drop-shadow(0 7px 46px rgba(0,0,0,0,06))
        drop-shadow(0 8px 15px rgba(0,0,0,0,06)) */
        box-shadow: 0 0 12px 0 rgba(0,0,0,.3);
    }
`
const Image = styled.img`
    height: 220px;
    width: 100%;
`
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    margin-bottom: 20px;
    padding: 0 20px;
    border-top: 1px solid rgba(230, 233, 236, 1) ;
`
const Info = styled.div``;
Info.Title = styled.h5`
    font-family: var(--headerFondMontserrat);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0D263B;
    margin-top: 24px;
`;

Info.Text = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
`;
Info.Detailes = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 15px;
`
const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Icons = styled.div``
Icons.Beds = styled(beds)`
    color: #696969;
    margin-bottom: 6px;
`
Icons.Baths = styled(baths)`
    color: #696969;
    margin-bottom: 6px;
`;
Icons.Garage = styled(garage)`
    color: #696969;
    margin-bottom: 6px;
`;
Icons.SqFt = styled(sqFt)`
    color: #696969;
    margin-bottom: 6px;
`;
Icons.Love = styled(love)`
    color: #696969;
    margin-bottom: 6px;
    :hover{
        cursor: pointer;
    }
`;
Icons.Vektor = styled(vektor)`
    color: #696969;
    margin-bottom: 6px;
    :hover{
        cursor: pointer;
    }
`;
const PriceWrapper = styled.div`
    width: 100%;
    height:60px ;
    border-top: 1px solid rgba(230, 233, 236, 1) ;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
`;
const Price = styled.div`

`
Price.Price = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
Price.Button = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
`
const User = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    border: 2px solid white;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    top: -21px;
    right: 23px;
    box-sizing: border-box;
    `
User.Img = styled.img`
    width: 38px;
    cursor: pointer;
    height: 38px;
    box-sizing: border-box;
    border-radius: 50%;
`

export { Price,User, Icons, Container, Image, InfoWrapper, Info, IconWrapper, PriceWrapper };


