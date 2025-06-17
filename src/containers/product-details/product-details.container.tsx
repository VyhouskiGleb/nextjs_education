"use server"

import { Product } from "@app/models/product/product.model";
import { Grid, Typography } from "@mui/material";
import Price from "@app/components/price/price.server";

type ProductDetailsContainerProps = {
	item: Product
}

export default async function ProductDetailsContainer({ item }: ProductDetailsContainerProps) {
	return (
		<Grid container spacing={2}>
			<Grid size={12}>
				<Grid container spacing={2} sx={{
					backgroundColor: 'background.paper',
					p: 2
				}}>
					<Grid size={{
						xs: 12,
						md: 5
					}}>
						<img
							src={item.imageUrl}
							alt={item.name}
							style={{
								width: '100%',
								height: 'auto',
								maxHeight: 300,
								objectFit: 'contain'
							}}
						/>
					</Grid>
					<Grid size={{
						xs: 12,
						md: 7
					}}>
						<Grid container spacing={2}>
							<Grid size={12}>
								<Typography variant="subtitle1" color="text.secondary">
									{item.model}
								</Typography>
								<Typography variant="caption" color="text.secondary">
									{item.year}
								</Typography>
							</Grid>
							<Grid size={12}>
								<Typography variant="h5">
									{item.name}
								</Typography>
							</Grid>
							<Grid size={12}>
								<Typography variant="body2" color="text.secondary">
									{item.description}
								</Typography>
							</Grid>
							<Grid size={12}>
								<Price amount={item.price}/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}