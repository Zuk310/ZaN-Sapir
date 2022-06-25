import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import app from "../../utils/firebase.utils";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { updateCarouselCard } from '../../redux/server-calls/server-calls';

import {
  CardEdit,
  CarouselCardContainer,
  CardTitleContainer,
  CardTitle,
  CardAddButton,
  CardPreview,
  PreviewContent,
  PreviewContainerTitle,
  PreviewTitle,
  PreviewDescription,
  PreviewContainer,
  PreviewImg,
  PreviewButton,
  DeleteForeverIcon,
  PublishIcon,
  CardForm,
  CardFormLabel,
  CardFormInput,
  CardFormInputColor,
  CardUploadLabel,
  CardUploadInput,
  CardImgUpload,
  CardImg,
  ProductButton
} from './carousel-card.styles.jsx';

 const CarouselCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cardId = location.pathname.split('/')[2];

  const card = useSelector((state) => state.carousel.cards.find((card) => card._id === cardId));

  const [file, setFile] = useState(null);
  
  const [inputs, setInputs] = useState({...card}); 

  const handleChange = (e) => {
    setInputs((prev) => {
      if(e.target.value){
      return { ...prev, [e.target.name]: e.target.value };}
      else{
        return { ...prev, [e.target.name]: card[e.target.name] };
      }
    });
  };

  const fileNameHandler = () => {
    if(file === null){
      return new Date().getTime() + card.img
    }
    return new Date().getTime() + file.name
  }

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = fileNameHandler();
    const storage = getStorage(app);
    const storageRef = ref(storage, `carousel/${fileName}`);
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
          const updatedCard = { ...inputs, img: downloadURL};
          updateCarouselCard(card._id ,updatedCard, dispatch);
          navigate(`/carousel`);
        });
      }
    );}
    else{
      const updatedCard = { ...inputs};
      updateCarouselCard(card._id ,updatedCard, dispatch);
      navigate(`/carousel`);
    }
  };

  return (
    <CarouselCardContainer>
      <CardTitleContainer>
        <CardTitle>Product</CardTitle>
          <CardAddButton onClick={()=>navigate('/newCarouselCard', { replace: true })}>Create</CardAddButton>
      </CardTitleContainer>
      <CardEdit>

        <CardForm>
            <CardFormLabel>Title</CardFormLabel>
            <CardFormInput type='text' placeholder={card.title} onChange={handleChange} name="title"/>
            <CardFormLabel>Description</CardFormLabel>
            <CardFormInput type='text' placeholder={card.desc} onChange={handleChange} name="desc"/>
            <CardFormLabel>Background Color</CardFormLabel>
            <CardFormInputColor type='color' onChange={handleChange} name="bg"/>
            <CardFormLabel>Link</CardFormLabel>
            <CardFormInput type='text' placeholder={card.link} onChange={handleChange} name="link"/>
            

            <CardImgUpload>
              <CardUploadLabel onClick={() => setFile(null)}>
                <DeleteForeverIcon />
              </CardUploadLabel>
              <CardImg src={card.img} alt=''/>
              <CardUploadLabel htmlFor='file'>
                <PublishIcon />
              </CardUploadLabel>
              <CardUploadInput type='file' id='file'  onChange={(e) => setFile(e.target.files[0])}/>
            </CardImgUpload>
            <ProductButton 
            onClick={handleClick}>Update</ProductButton>
        </CardForm>

        <CardPreview>
          <PreviewContainerTitle>
            Preview
          </PreviewContainerTitle>
        <PreviewContainer bg={inputs.bg}>
          <PreviewImg src={file ? URL.createObjectURL(file) : inputs.img}/>
          <PreviewContent>
            <PreviewTitle>
              {inputs.title}
            </PreviewTitle>
            <PreviewDescription>
              {inputs.desc}
            </PreviewDescription>
            <PreviewButton>
              SHOP NOW!
            </PreviewButton>
          </PreviewContent>


        </PreviewContainer>
      </CardPreview>

      </CardEdit>
    </CarouselCardContainer>
  );
}

export default CarouselCard;