import { Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations();
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {t('footer.label')}
    </Typography>
  );
}
