import { HttpService } from "./http-service.js";
import type { Product } from "../types/product.js";

export class ProductService {
  private http = new HttpService();
  private baseUrl = "https://fakestoreapi.com/products";

  getAll(): Promise<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getById(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
