import { UserDiv, UserItem } from './user-profile.styles.jsx';

import UserInfoBlock from '../../components/user-info-block/user-info-block.component.jsx';
import NewsLetter from '../../components/news-letter/news-letter.component.jsx';
import Footer from '../../components/footer/footer.component.jsx';

const UserProfile = () => {

  return (
    <>
      <UserDiv>
        <UserItem>
          <UserInfoBlock />
        </UserItem>
      </UserDiv>
      <NewsLetter />
      <Footer />
    </>
  );
};
export default UserProfile;
