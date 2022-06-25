import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment
} from "./footer.styles";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Left>
        <Logo>Zan Sapir</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur odit tempora distinctio repellat quos adipisci et fuga, natus neque, veniam corporis voluptate saepe commodi dolore. Quo officia doloribus pariatur!
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title>
            Useful links
          </Title>
            <List>
                <ListItem onClick={()=>navigate('/')}>Home</ListItem>
                <ListItem onClick={()=>navigate('/cart')}>Cart</ListItem>
                <ListItem onClick={()=>navigate('/user')}>Profile</ListItem>
                <ListItem onClick={()=>navigate('/products/jewelry')}>Jewelry</ListItem>
                <ListItem onClick={()=>navigate('/products/ceramic-jewelry')}>Ceramic Jewelry</ListItem>
                <ListItem onClick={()=>navigate('/products/silver-jewelry')}>Silver Jewelry</ListItem>
                <ListItem onClick={()=>navigate('/products/paintings')}>Paintings</ListItem>
                <ListItem onClick={()=>navigate('/products/ceramic')}>Ceramic</ListItem>
                <ListItem onClick={()=>navigate('/products/sales')}>Sales</ListItem>
            </List>
      </Center>
      <Right>
          <Title>
              Contacts
          </Title>
          <ContactItem href="https://goo.gl/maps/qwkAxv1ipWANiYSa6">
            <RoomIcon style={{ marginRight: "10px"}}/>
              Tet Zayin St 41, Safed
          </ContactItem>
          <ContactItem href="tel:+1234567890">
              <PhoneIcon style={{ marginRight: "10px"}}/>
              a phone number
          </ContactItem>
          <ContactItem  href="mailto:zansapir1@gmail.com">
              <EmailIcon style={{ marginRight: "10px"}} />
              Send us an email
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};
export default Footer;
