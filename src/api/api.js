import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "5cc3db5a-9fef-4e9e-b165-0b854b37fd82",
  },
});

export const profileAPI = {
  getStatus(userId) {
    return instance.get(`profile/` + userId)
  },
  updateStatus(status){
    return instance.put(`status`, {status: status}); 
  }
}

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
    const res = await instance
      .get(`users?page=${currentPage}&count=${pageSize}`);
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
