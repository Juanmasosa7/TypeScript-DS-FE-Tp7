import { ProductService } from "./services/product-service.js";

async function main() {
  const service = new ProductService();

  console.log("📦 Cargando productos desde FakeStore API...\n");

  try {
    const products = await service.getAll();
    console.log(`✅ Productos recibidos: ${products.length}\n`);

    const first = products[0];
    console.log("🟦 Primer producto:");
    console.log(`ID: ${first.id}`);
    console.log(`Título: ${first.title}`);
    console.log(`Precio: $${first.price}`);
    console.log(`Categoría: ${first.category}`);
  } catch (error) {
    console.error("❌ Error al obtener productos:", error);
  }
}

main();
