import { Product } from '@app/models/product/product.model';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Price from '@app/components/price/price.server';
import Link from 'next/link';
import { compileRelativePath } from '@app/utils/url.utils';
import { DETAILS_PATH } from '@app/constants/route.constants';

type ProductCardProps = {
  item: Product;
};

export default async function ProductCard({ item }: ProductCardProps) {
  return (
    <Grid
      size={{
        sm: 6,
        lg: 4,
        xs: 12,
      }}
    >
      <Card sx={{ height: '100%' }}>
        <CardActionArea
          sx={{
            height: '100%',
            p: 1,
          }}
          component={Link}
          href={compileRelativePath(DETAILS_PATH, {
            slug: item.name,
          })}
        >
          <CardMedia
            component={Image}
            overrideSrc={item.imageUrl}
            alt={item.name}
            sx={{
              maxHeight: 150,
              justifySelf: 'center',
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
            <Price amount={item.price} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
