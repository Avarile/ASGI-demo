import { Box, Typography } from '@mui/material';
import { OrderCompleteIllustration } from 'src/assets/illustrations';
import { DashboardContent } from 'src/layouts/dashboard';

export default function Page() {
  return (
    <>
      <View />
    </>
  );
}

function View() {
  return (
    <DashboardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              color: 'lightgreen',
              mb: 6,
            }}
          >
            Success
          </Typography>
          <OrderCompleteIllustration />
        </Box>
      </Box>
    </DashboardContent>
  );
}
