import { productService } from "@app/service/product/product.service";
import { Product } from "@app/models/product/product.model";
import HomeContainer from "@app/containers/home/home.container";

export default async function HomePage() {
  const products: Product[] = await productService.getProducts(0, 5);

  return (
      <HomeContainer products={products}/>
  );
}