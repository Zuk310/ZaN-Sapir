import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addCarouselCard} from '../../redux/server-calls/server-calls';
import app from '../../utils/firebase.utils';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

import {
  NewCardContainer,
  NewCardTitle,
  NewCardForm,
  NewCardItem,
  Input,
  Label,
  InputColor,
  Button,
} from './new-carousel-card.styles.jsx';

const NewCarouselCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

    const inputValidation = (e) => {
      e.preventDefault();
    switch (true) {
      case (inputs.title === "" || inputs.title === null || inputs.title === undefined):
        alert("title is bad");
        break;
      case (inputs.color === "" || inputs.color === null || inputs.color === undefined):
        alert("color is bad");
        break;
      case (inputs.desc === "" || inputs.desc === null || inputs.desc === undefined):
        alert("desc is bad");
        break;
      case (inputs.link === "" || inputs.link === null || inputs.link === undefined):
        alert("link is bad");
        break;
      case (file === "" || file === null || file === undefined):
        alert("file is bad");
        break;
      default:
        handleClick();
    }
  }

  const handleClick = () => {
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, `carousel/${fileName}`);
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
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const card = { ...inputs, img: downloadURL };
          addCarouselCard(card, dispatch);
          navigate(`/carousel`);
        });
      }
    );
  };

  return (
    <NewCardContainer>
      <NewCardTitle>New Carousel Card</NewCardTitle>
      <NewCardForm>
        <NewCardItem>
          <Label>Image</Label>
          <Input
            type='file'
            id='file'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </NewCardItem>
        <NewCardItem>
          <Label>Title</Label>
          <Input
            name='title'
            type='text'
            placeholder='SUMMER SALES'
            onChange={handleChange}
          />
        </NewCardItem>
        <NewCardItem>
          <Label>Description</Label>
          <Input
            name='desc'
            type='text'
            placeholder="DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS."
            onChange={handleChange}
          />
        </NewCardItem>
        <NewCardItem color>
          <Label>Color</Label>
          <InputColor
            name='color'
            type='color'
            placeholder='#d66b00'
            onChange={handleChange}
          />
        </NewCardItem>
        <NewCardItem>
          <Label>Link</Label>
          <Input
            type='text'
            placeholder='sales'
            onChange={handleChange}
            name='link'
          />
        </NewCardItem>
        <Button onClick={(e)=>inputValidation(e)}>Create</Button>
      </NewCardForm>
    </NewCardContainer>
  );
};

export default NewCarouselCard;
