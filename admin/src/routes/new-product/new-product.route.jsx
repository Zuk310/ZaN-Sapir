import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

import app from '../../utils/firebase.utils';
import { addProduct } from '../../redux/server-calls/server-calls';
import {
  NewProductContainer,
  NewProductTitle,
  NewProductForm,
  NewProductItem,
  ListItemColor,
  Input,
  Label,
  SelectInput,
  Option,
  Button,
} from './new-product.styles.jsx';

import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const categories = [
  'jewelry',
  'silver-jewelry',
  'ceramic-jewelry',
  'paintings',
  'ceramic',
  'sale',
  'silver-sale',
  'ceramic-sale',
];
const sizes = [
  'XS',
  'S',
  'M',
  'L',
  'XL',
];
const colors = [
  'silver',
  'gold',
  'white',
  'black',
];


const NewProduct = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [itemSize, setItemSize] = useState([]);
  const [itemColor, setItemColor] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleChecks = (event, setter) => {
    const {
      target: { value },
    } = event;
    setter(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, `products/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
      
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
      },
      () => {
      
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: cat,
            size: itemSize,
            color: itemColor,
          };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <NewProductContainer>
      <NewProductTitle>New Product</NewProductTitle>
      <NewProductForm>
        <NewProductItem>
          <Label>Image</Label>
          <Input
            type='file'
            id='file'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </NewProductItem>
        <NewProductItem>
          <Label>Title</Label>
          <Input
            name='title'
            type='text'
            placeholder='Apple Airpods'
            onChange={handleChange}
          />
        </NewProductItem>
        <NewProductItem>
          <Label>Description</Label>
          <Input
            name='desc'
            type='text'
            placeholder='description...'
            onChange={handleChange}
          />
        </NewProductItem>
        <NewProductItem>
          <Label>Price</Label>
          <Input
            name='price'
            type='number'
            placeholder='100'
            onChange={handleChange}
          />
        </NewProductItem>
        <NewProductItem>
            <Label>Color</Label>
            <Select
              multiple
              value={itemColor}
              onChange={(e)=>handleChecks(e, setItemColor)}
              renderValue={(selected) => selected.join(', ')}
            >
              {colors.map((color) => (
                <MenuItem key={color} value={color}>
                  <Checkbox checked={itemColor.indexOf(color) > -1} />
                  <ListItemColor color={color} />
                </MenuItem>
              ))}
            </Select>
        </NewProductItem>

        <NewProductItem>
            <Label>Size</Label>
            <Select
              multiple
              value={itemSize}
              onChange={(e)=>handleChecks(e, setItemSize)}
              renderValue={(selected) => selected.join(', ')}
            >
              {sizes.map((size) => (
                <MenuItem key={size} value={size}>
                  <Checkbox checked={itemSize.indexOf(size) > -1} />
                  <ListItemText primary={size} />
                </MenuItem>
              ))}
            </Select>
        </NewProductItem>

        <NewProductItem>
            <Label>Categories</Label>
            <Select
              multiple
              value={cat}
              onChange={(e)=>handleChecks(e, setCat)}
              renderValue={(selected) => selected.join(', ')}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  <Checkbox checked={cat.indexOf(category) > -1} />
                  <ListItemText primary={category} />
                </MenuItem>
              ))}
            </Select>
        </NewProductItem>

        <NewProductItem>
          <Label>Stock</Label>
          <SelectInput name='inStock' onChange={handleChange}>
              <Option value='true'>Yes</Option>
              test
            <Option value='false'>No</Option>
          </SelectInput>
        </NewProductItem>

        <Button onClick={handleClick} className='addProductButton'>
          Create
        </Button>
      </NewProductForm>
    </NewProductContainer>
  )
}

export default NewProduct;
