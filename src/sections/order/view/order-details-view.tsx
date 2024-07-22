import type { IOrderItem } from 'src/types/order';

import { useCallback, useState } from 'react';

import { DashboardContent } from 'src/layouts/dashboard';
import { MotivationIllustration } from 'src/assets/illustrations';
import { Box, Typography } from '@mui/material';
// ----------------------------------------------------------------------

type Props = {
  order?: IOrderItem;
};

export function OrderDetailsView({ order }: Props) {
  const [status, setStatus] = useState(order?.status);

  const handleChangeStatus = useCallback((newValue: string) => {
    setStatus(newValue);
  }, []);

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
          <MotivationIllustration />
        </Box>
      </Box>
    </DashboardContent>
  );
}
