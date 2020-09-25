import http from "../http-common";

const getAll = () => {
  return http.get("/contacts");
};

const create = (data) => {
  return http.post("/contacts", data);
};

const update = (id, data) => {
  return http.put(`/contacts/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/contacts/${id}`);
};

export default {
  getAll,
  create,
  update,
  remove,
};
