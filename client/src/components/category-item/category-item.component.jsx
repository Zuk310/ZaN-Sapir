import { useNavigate } from "react-router-dom";
import { 
    Container,
    Image,
    Info,
    Title,
    Button
} from "./category-item.styled";



const CategoryItem = ({item}) =>{
const navigate = useNavigate()
    return(
      <Container >
          <Image src={item.img}/>
          <Info>
              <Title>
                {item.title}
              </Title>
              <Button onClick={()=>navigate(`products/${item.category}`)}>
                  SHOP NOM
              </Button>
          </Info>
      </Container>
    )
  };


export default CategoryItem;