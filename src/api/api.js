import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a16e8cdf-2042-4cb2-af48-ce1852e97588",
  },
});

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
    const res = await instance.get(
      `users?page=${currentPage}&count=${pageSize}`
    );
    return res.data;
  },
  async followUser(userId) {
    const res = await instance.post(`follow/${userId}`);
    return res.data;
  },
  async unfollowUser(userId) {
    const res = await instance.delete(`follow/${userId}`);
    return res.data;
  },
};
