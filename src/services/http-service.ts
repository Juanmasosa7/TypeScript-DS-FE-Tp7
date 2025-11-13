export class HttpService {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status} al llamar a ${url}`);
    }

    // Le decimos a TS que esto es T
    return response.json() as Promise<T>;
  }
}
