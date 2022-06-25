import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Publish } from '@mui/icons-material';

import { updateProduct } from '../../redux/server-calls/server-calls';
import { userRequest } from '../../utils/requests.utils';
import app from "../../utils/firebase.utils";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import Chart from '../../components/chart/chart.component';
import ProductInfoComponent from '../../components/product-info/product-info.component';

import {
  ProductContainer,
  ProductTitleContainer,
  ProductTitle,
  ProductTop,
  ProductAddProduct,
  ProductTopLeft,
  ProductTopRight,
  ProductInfoTop,
  ProductName,
  ProductInfoBottom,
  ProductInfoImg,
  ProductBottom,
  ProductForm,
  ProductFormLeft,
  ProductFormLeftLabel,
  ProductFormLeftInput,
  ProductFormLeftSelect,
  ProductFormLeftOption,
  ProductFormRight,
  ProductFormRightLabel,
  ProductFormRightInput,
  ProductUpload,
  ProductUploadImg,
  ProductButton
} from './product.styles';


const Product = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productId = location.pathname.split('/')[2];
  
  const product = useSelector((state) =>
  state.product.products.find((product) => product._id === productId)
  );

  const [productStats, setProductStats] = useState([]);
  const [file, setFile] = useState(null);

  
  
  const [inputs, setInputs] = useState({...product});
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );
      const getStats = async (id,months) => {
      try {
        const res = await userRequest.get('orders/income?pid=' + id);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: months[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
      }
    };

  useEffect(() => {
    getStats(productId, MONTHS);
  }, [productId, MONTHS]);

  
  const handleChange = (e) => {
    setInputs((prev) => {
      // checking if the input is valid, if not return original value
      if(e.target.name === "categories" || e.target.name ==="size" || e.target.name === "color"){
        const formatedArray = (e.target.value.split(","));
        return { ...prev, [e.target.name]: formatedArray };
      }
      else if(e.target.value){
      return { ...prev, [e.target.name]: e.target.value };}
      else{
        return { ...prev, [e.target.name]: product[e.target.name] };
      }
    });
  };

  const fileNameHandler = () => {
    if(file === null){
      return new Date().getTime() + product.img
    }
    return new Date().getTime() + file.name
  }

  const handleArraies = (e) => {
    (e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = fileNameHandler();
    const storage = getStorage(app);
    const storageRef = ref(storage, `products/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    if(file !== null){uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const updatedProduct = { ...inputs, img: downloadURL};
          updateProduct(product._id ,updatedProduct, dispatch);
        });
        alert("Update Succsesful!");
      }
    );}
    else{
      const updatedProduct = { ...inputs};
      updateProduct(product._id ,updatedProduct, dispatch);
      alert("Update Succsesful!");
    }
  };

  return (
    <ProductContainer>
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
          <ProductAddProduct onClick={()=>navigate('/newproduct', { replace: true })}>Create</ProductAddProduct>
      </ProductTitleContainer>
      <ProductTop>
        <ProductTopLeft>
          <Chart data={productStats} dataKey='Sales' title='Sales Performance' />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductInfoImg src={product.img} alt=''/>
            <ProductName>{product.title}</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoComponent label="id:" data={product._id}/>
            <ProductInfoComponent label="sales:" data="5123"/>
            <ProductInfoComponent label="in stock:" data={product.inStock}/>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft> 
            {/* look at new product - do the same to set up an update */}
            {/* move to form in a seperate component */}
            <ProductFormLeftLabel>Product Name</ProductFormLeftLabel>
            <ProductFormLeftInput type='text' placeholder={product.title} onChange={handleChange} name="title"/>
            <ProductFormLeftLabel>Product Description</ProductFormLeftLabel>
            <ProductFormLeftInput type='text' placeholder={product.desc} onChange={handleChange} name="desc"/>
            <ProductFormLeftLabel>Price($)</ProductFormLeftLabel>
            <ProductFormLeftInput type='text' placeholder={product.price} onChange={handleChange} name="price"/>
            <ProductFormLeftLabel>Categories</ProductFormLeftLabel>
            <ProductFormLeftInput type='text' placeholder={product.size } onChange={handleChange} name="categories"/>
            <ProductFormLeftLabel>Size</ProductFormLeftLabel>
            <ProductFormLeftInput type='text' placeholder={product.categories } onChange={handleChange} name="size"/>
            <ProductFormLeftLabel>Color</ProductFormLeftLabel>
            <ProductFormLeftInput type='text' placeholder={product.color } onChange={handleChange} name="color"/>
            <ProductFormLeftLabel>In Stock</ProductFormLeftLabel>
            <ProductFormLeftSelect name='inStock' id='idStock' onChange={handleChange}>
              <ProductFormLeftOption value='true'>Yes</ProductFormLeftOption>
              <ProductFormLeftOption value='false'>No</ProductFormLeftOption>
            </ProductFormLeftSelect>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImg src={product.img} alt=''/>
              <ProductFormRightLabel htmlFor='file'>
                <Publish />
              </ProductFormRightLabel>
              <ProductFormRightInput type='file' id='file'  onChange={(e) => setFile(e.target.files[0])}/>
            </ProductUpload>
            <ProductButton 
            onClick={handleClick}>Update</ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </ProductContainer>
  );
}

export default Product;