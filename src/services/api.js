import _axios from "axios";

const api = _axios.create({baseURL: "https://rocketseat-node.herokuapp.com/api"});

export default class AxiosApi {
  static async loadProducts(page = 1) {
    try {
      let response = await api.get(`/products?page=${page}`);
      return response.data;
    } catch (error) {
      console.warn("Não foi possível obter a lista de produtos...");
      return [];
    }
  }

  static async loadProductDetails(id) {
    try {
      let response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.warn("Não foi possível obter os dados do produto...");
      return [];
    }
  }
}