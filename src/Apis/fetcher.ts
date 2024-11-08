import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const baseURL = import.meta.env.VITE_BASE_URL;

const fetcherAPI: AxiosInstance = axios.create({
  baseURL: baseURL,
});

fetcherAPI.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers["Content-Type"] = "application/json";
  config.headers["X-API-Key"] = apiKey;
  return config;
});

fetcherAPI.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (err) => {
    console.error("API call error:", err);
    return Promise.reject(err);
  }
);

export default fetcherAPI;
