import http from '../http-connect';

const getAllData = () => {
  return http.get(`/api/transaction`);
};

const getPeriod = (period) => {
  return http.get(`/api/transaction?period=${period}`);
};

const getOneTransaction = (id) => {
  return http.get(`/api/transaction/${id}`);
};

const updateTransaction = (id, data) => {
  return http.put(`/api/transaction/${id}`, data);
};

const deleteTransaction = (id) => {
  return http.delete(`/api/transaction/${id}`);
};

const insertTransaction = (data) => {
  return http.post(`/api/transaction/`, data);
};

export default {
  getAllData,
  getPeriod,
  getOneTransaction,
  updateTransaction,
  deleteTransaction,
  insertTransaction,
};
