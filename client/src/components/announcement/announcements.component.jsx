import { useNavigate } from "react-router-dom";
import { Container } from "./announcements.styles";

const Announcements = () =>{
const navigate = useNavigate()
  return(
    <Container onClick={()=>navigate('/products/sales')}>
        Don't miss out on great deals!
    </Container>
  )
};

export default Announcements;