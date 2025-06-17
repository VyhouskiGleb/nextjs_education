import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { Product } from '@app/models/product/product.model';
import { getTranslations } from 'next-intl/server';
import ProductCard from '@app/components/product-card/product-card.server';

type ProductListContainerProps = {
  products: Product[];
};

const ProductsListContainer: FC<ProductListContainerProps> = async ({ products }) => {
  const t = await getTranslations();

  return (
    <Grid container size={12} alignItems="stretch" spacing={2}>
      <Grid size={12}>
        <Typography component="h3" variant="h4">
          {t('products.title')}
        </Typography>
      </Grid>
      {products.map((item) => (
        <ProductCard key={item.name} item={item} />
      ))}
    </Grid>
  );
};

export default ProductsListContainer;
