import { useNavigate } from "react-router-dom";

import {
    Slide,
    ImageContainer,
    Image,
    InfoContainer,
    Title,
    Description,
    Button
} from './slider-item.styles'


const SliderItem = ({item}) =>{
const navigate = useNavigate()
const handleClick = () =>{
    item.link ? navigate(`products/${item.link}`) : navigate(`/`)
}
  return(
    <>
    <Slide bg={item.bg}>
        <ImageContainer>
            <Image
            src={item.img}
            alt="image"
            />
        </ImageContainer>
        <InfoContainer>
            <Title>
                {item.title}
            </Title>
            <Description>
                {item.desc}
            </Description>
            <Button onClick={handleClick}>
                    SHOP NOW!
            </Button>
        </InfoContainer>
    </Slide>
    </>
  )
};
export default SliderItem;