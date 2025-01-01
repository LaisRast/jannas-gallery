import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface LayoutContainerProps {
  children: ReactNode;
}

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <Box
      sx={{
        border: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: 'md',
        height: '100dvh',
        margin: '0 auto',
      }}
    >
      {children}
    </Box>
  );
};

export default LayoutContainer;
