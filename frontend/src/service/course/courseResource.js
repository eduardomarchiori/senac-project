import { api } from "../api/api";

export const get = () => api.get(`/course`);
export const getOne = (id) => api.get(`/course/${id}`);
export const create = (data) => api.post(`/course`, data);
export const update = (id, data) => api.put(`/course/${id}`, data);
