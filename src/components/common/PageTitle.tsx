import { Divider, Typography } from '@mui/material';
import { ReactNode } from 'react';
import useScreenSize from '../../hooks/useScreenSize.ts';

interface PageTitleProps {
  children: ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
  const { isLargeScreen } = useScreenSize();

  return (
    <Divider textAlign="center">
      <Typography
        variant="h2"
        sx={{
          fontSize: isLargeScreen ? '32px' : '24px',
        }}
      >
        {children}
      </Typography>
    </Divider>
  );
};

export default PageTitle;
