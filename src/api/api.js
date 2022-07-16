import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '9a450d4a-5747-4ddd-acd5-0693071efaea',
  },
});

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
    const response = await instance
      .get(`users?page=${currentPage}&count=${pageSize}`);
    console.log('Data: ', response);
    return response.data;
  },
};

export const getUsers2 = (currentPage, pageSize) => {
  return instance
    .get(`follow?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data;
    });
};
