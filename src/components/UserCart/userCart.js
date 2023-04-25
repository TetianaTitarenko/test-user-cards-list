import { useState, useEffect } from 'react';
import Vector from '../../img/Vector.svg';
import picture from '../../img/picture2 1.svg';
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

const UserCard = ({ user }) => {
  const [following, setFollowing] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem(`following_${user.id}`)) ?? false
    );
  });
  const [followers, setFollowers] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem(`followers_${user.id}`)) ??
      user.followers
    );
  });

  useEffect(() => {
    localStorage.setItem(`following_${user.id}`, JSON.stringify(following));
  }, [following, user.id]);

  useEffect(() => {
    localStorage.setItem(`followers_${user.id}`, JSON.stringify(followers));
  }, [followers, user.id]);

  const addFollowers = () => {
    setFollowing(!following);
    setFollowers(prevFollowers =>
      following ? prevFollowers - 1 : prevFollowers + 1
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
      <Button onClick={addFollowers} isActiv={following === true}>
        {following ? 'Following' : 'Follow'}
      </Button>
    </Wrapper>
  );
};

export default UserCard;
