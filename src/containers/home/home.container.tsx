import { Button, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Product } from "@app/models/product/product.model";
import { getTranslations } from "next-intl/server";
import ProductCard from "@app/components/product-card/product-card.server";
import Link from "next/link";

type ProductListContainerProps = {
	products: Product[];
}

const HomeContainer: FC<ProductListContainerProps> = async ({ products }) => {
	const t = await getTranslations();

	return (
		<Grid container size={12} alignItems="stretch" spacing={2}>
			<Grid size={12} sx={{
				display: 'flex',
				justifyContent: 'space-between'
			}}>
				<Typography component='h3' variant="h4" sx={{
				}}>
					{t('home.title')}
				</Typography>
				<Button
					component={Link}
					href={'/rackets'}
					sx={{
						pl: 1
					}}>
						{t('home.showAll')}
				</Button>
			</Grid>
			{products.map(item => (
				<ProductCard key={item.name} item={item}/>
			))}
		</Grid>
	);
};

export default HomeContainer;