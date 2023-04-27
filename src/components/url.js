import axios from 'axios';

export const API_URL = 'https://644281d133997d3ef91207c3.mockapi.io/users';

export const updateUserFollowing = (update, userId) => {
  const options = {
    headers: { 'Content-Type': 'application/json' },
  };

  return axios
    .put(`${API_URL}/${userId}`, update, options)
    .then(response => response.data)
    .catch(error => error.message);
};

export const API_URL_Following = `${API_URL}?following=true&&limit=3page=`;

export const API_URL_Follow = `${API_URL}?following=false&limit=3&page=`;

export const API_URL_All = `${API_URL}?limit=3&page=`;
