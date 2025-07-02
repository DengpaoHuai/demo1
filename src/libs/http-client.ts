import axios from "axios";

const httpClient = axios.create({
  baseURL: `https://crudcrud.com/api/${import.meta.env.VITE_API_KEY}`,
});

export default httpClient;
