import { useState, useEffect } from 'react';
import Vector from '../../img/Vector.png';
import picture from '../../img/picture2 1.png';
import {
  Wrapper,
  AvatarGap,
  Avatar,
  Button,
  DivLine,
  TitleTweets,
  TitleFollowers,
  StyledVector,
  StyledPicture,
} from './userCart.styled';
import { updateUserFollowing } from 'components/url';

const UserCard = ({ user }) => {
  const [followers, setFollowers] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem(`followers_${user.id}`)) ??
      user.followers
    );
  });

  useEffect(() => {
    localStorage.setItem(`followers_${user.id}`, JSON.stringify(followers));
  }, [followers, user.id]);

  const addFollowers = () => {
    user.following = !user.following;
    updateUserFollowing({ following: user.following }, user.id);
    setFollowers(prevFollowers =>
      user.following ? prevFollowers + 1 : prevFollowers - 1
    );
  };

  return (
    <Wrapper>
      <StyledVector src={Vector} alt={user.user} />
      <StyledPicture src={picture} alt={user.user} />
      <AvatarGap>
        <Avatar src={user.avatar} alt={user.user} />
      </AvatarGap>
      <DivLine></DivLine>
      <TitleTweets style={{ margin: '62px', marginBottom: '0px' }}>
        {user.tweets} Tweets
      </TitleTweets>
      <TitleFollowers>{followers.toLocaleString()} Followers</TitleFollowers>
      <Button onClick={addFollowers} isActiv={user.following}>
        {user.following ? 'Following' : 'Follow'}
      </Button>
    </Wrapper>
  );
};

export default UserCard;
