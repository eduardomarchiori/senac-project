import * as courseResource from "./courseResource";

export const get = async () => {
  return courseResource.get();
};

export const getOne = async (id) => {
  return courseResource.getOne(id);
};

export const create = async (data) => {
  return courseResource.create(data);
};

export const update = async (id, data) => {
  return courseResource.update(id, data);
};
