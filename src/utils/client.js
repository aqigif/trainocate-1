import axios from "axios";

const client = axios.create({ baseURL: "https://reqres.in/api" });

export default client;
