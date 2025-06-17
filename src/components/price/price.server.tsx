import { getFormatter } from 'next-intl/server';
import { Typography } from '@mui/material';

type PriceComponentProps = {
  amount: number;
};

export default async function Price({ amount }: PriceComponentProps) {
  const format = await getFormatter();

  const formattedAmount = format.number(amount, {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <Typography variant="h6" sx={{ color: 'text.primary' }}>
      {formattedAmount}
    </Typography>
  );
}
