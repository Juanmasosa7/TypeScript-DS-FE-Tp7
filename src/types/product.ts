export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

// Ejemplo de respuesta de la API:
// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday...",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }
// }