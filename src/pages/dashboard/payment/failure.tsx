import { Box, Typography } from '@mui/material';
import { ServerErrorIllustration } from 'src/assets/illustrations';
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
              mb: 6,
            }}
          >
            Failure
          </Typography>
          <ServerErrorIllustration />
        </Box>
      </Box>
    </DashboardContent>
  );
}
