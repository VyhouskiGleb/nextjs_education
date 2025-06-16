import { productService } from "@app/service/product/product.service";
import ProductsListContainer from "@app/containers/products-list/products-list.container";

const ProductsPage = async () => {

  const products = await productService.getProducts();

  return (
      <ProductsListContainer products={products}/>
  );
}

export default ProductsPage;