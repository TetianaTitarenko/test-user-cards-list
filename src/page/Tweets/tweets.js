import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../../components/UserCart/userCart';

const API_URL = 'https://644281d133997d3ef91207c3.mockapi.io/users';

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
        console.log(response);
        // setUsers([...response.data]); // The elements are not added, the page is re-rendered again.
        setUsers(prevUsers => [...prevUsers, ...response.data]); // Six elements are added (twice the first three elements)
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [page]);
  console.log(users);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
          {/*When clicking on the button, the entire page is redrawn, but it is necessary for only the next 3 elements to be appended without redrawing the entire page.  */}
          <button onClick={loadMore}>Load more</button>
        </>
      )}
    </>
  );
}
