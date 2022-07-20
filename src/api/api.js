import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a16e8cdf-2042-4cb2-af48-ce1852e97588",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then((res) => res.data);
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then((res) => res.data);
  },
};
