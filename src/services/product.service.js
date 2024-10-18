import client from "../utils/client";

export const addProduct = (data) => client.post('/users', data)