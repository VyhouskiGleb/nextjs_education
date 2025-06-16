import { productService } from "@app/service/product/product.service";
import { decodeUrlParam, encodeUrlParam } from "@app/utils/url.utils";
import { notFound } from "next/navigation";
import { PageProps } from "@app/models/router.model";
import { Product } from "@app/models/product/product.model";
import ProductDetails from "@app/components/product-details/product-details.server";

type Params = {
    slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
    const products: Product[]  = await productService.getProducts(0, 5);

    return products.map((product: Product): Params => ({
        slug: encodeUrlParam(product.name),
    }))
}

export default async function ProductsPage({
    params
}: PageProps<Params>) {
    const { slug } = await params;

    const product: Product  = await productService.getProductByKey('name', decodeUrlParam(slug));

    // todo -> сделать кастомный 404 темплейт
    if (!product) {
        return notFound();
    }

    return (
        <ProductDetails item={product} />
    );
}