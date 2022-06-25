import CategoryItem from "../category-item/category-item.component";
import { categories } from "../../data/categories.data";

import { Container } from "./categories.styles";

const Categories = () =>{
  return(
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
};
export default Categories;