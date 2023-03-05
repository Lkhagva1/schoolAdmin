import axios from "axios";
import Cookies from "js-cookie";
const source = axios.CancelToken.source();
const token = Cookies.get("token");

let instance;
instance = axios.create({
  baseURL: "https://reqres.in/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  cancelToken: source.token,
});
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export default instance;
