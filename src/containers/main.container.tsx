import { AppBar, Box, Container, Grid } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

type MainLayoutType = Partial<{
  navigation: ReactNode;
  footer: ReactNode;
}>;

export default async function MainContainer({ children, footer, navigation }: PropsWithChildren<MainLayoutType>) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" color="default">
        {navigation}
      </AppBar>
      <Container component="main" sx={{ flex: 1, py: 3 }}>
        <Grid container spacing={2}>
          {children}
        </Grid>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          bgcolor: 'primary.main',
        }}
      >
        <Container>{footer}</Container>
      </Box>
    </Box>
  );
}
