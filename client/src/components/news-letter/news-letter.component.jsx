import SendIcon from '@mui/icons-material/Send';

import {
    Container,
    Title,
    Description,
    InputContainer,
    Input,
    Button
} from './news-letter.styles'

const NewsLetter = () =>{
  return(
    <Container>
        <Title>
            News Letter
        </Title>
        <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, accusamus. Quia ullam nulla non. Repellendus fuga fugiat perspiciat
        </Description>
        <InputContainer>
            <Input placeholder='Enter your email'/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>

    </Container>
  )
};
export default NewsLetter;