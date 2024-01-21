import { get, post } from "./fetch";

export const getWorkOptions = (endpoint, callback) => {
  get(endpoint)
    .then((res) => {
      callback && callback(res);
    })
    .catch((res) => {
      console.error(`API Error : ${endpoint}`, res);
      callback && callback(res);
    });
};

export const createWorkOption = (endpoint, data, callback) => {
  post(endpoint, { data: data })
    .then((res) => {
      callback && callback(res);
    })
    .catch((res) => {
      console.error(`API Error : ${endpoint}`, res);
      callback && callback(res);
    });
};

export const setOptionState = (endpoint, setter) => {
  getWorkOptions(endpoint, (res) => {
    const values = [];

    if (res.status === 200) {
      res.data.map((data) => {
        values.push({
          value: data.id,
          label: data.name,
        });
      });

      setter(values);
    }
  });
};
