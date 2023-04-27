import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../../components/UserCart/userCart';
import { LoadMoreButton, ComeBackLink, StyledDiv } from './tweets.styled';
import { API_URL } from 'components/url';

export default function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}?limit=3&page=${page}`)
      .then(response => {
        setUsers(prevUsers => [...prevUsers, ...response.data]);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {!isLoading && <ComeBackLink to={'/'}>Come back</ComeBackLink>}
      {isLoading && <div> Loading...</div>}
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <StyledDiv>
            {users.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </StyledDiv>
          {users.length > 0 && users.length < 12 && (
            <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
          )}
        </>
      )}
    </>
  );
}
