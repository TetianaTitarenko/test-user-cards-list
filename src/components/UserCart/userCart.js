import { useState, useEffect } from 'react';
import axios from 'axios';
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

const API_URL = 'https://644281d133997d3ef91207c3.mockapi.io/users';

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

  const updateUserFollowing = (update, userId) => {
    const options = {
      headers: { 'Content-Type': 'application/json' },
    };

    return axios
      .put(`${API_URL}/${userId}`, update, options)
      .then(response => response.data)
      .catch(error => error.message);
  };

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
