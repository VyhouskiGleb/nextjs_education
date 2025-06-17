import { Button, Toolbar } from '@mui/material';
import Link from 'next/link';
import { STATIC_ROUTES } from '@app/constants/route.constants';
import { getTranslations } from 'next-intl/server';

// todo ->  надо сделать клиентскую компоненту для мобильного отображения
export default async function Header() {
  const t = await getTranslations();

  return (
    <Toolbar>
      {Object.entries(STATIC_ROUTES).map(([key, href]) => (
        <Button
          key={key}
          component={Link}
          href={href}
          sx={{
            pl: 1,
          }}
        >
          {t(key)}
        </Button>
      ))}
    </Toolbar>
  );
}
