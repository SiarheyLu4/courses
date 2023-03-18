import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.wisey.app/api/v1",
});

const setToken = (token) => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`; 
};

export const getToken = async () => {
  try {
    const result = await instance.get("/auth/anonymous?platform=subscriptions");
    const token = result.data.token;
    // console.log(token);
    setToken (token);
  } catch (error) {
    throw error;
  }
};

export const getCoursesList = async () => {
  try {
    await getToken();
    const { data } = await instance.get("/core/preview-courses");
    return data.courses;
  } catch (error) {
    throw error;
  }
};
