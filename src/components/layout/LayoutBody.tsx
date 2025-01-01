import { Container } from '@mui/material';
import { ReactNode } from 'react';

interface LayoutBodyProp {
  children: ReactNode;
}

const LayoutBody = ({ children }: LayoutBodyProp) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginBottom: 2,
        marginTop: 4,
        overflowY: 'auto',
        flex: 1,
      }}
    >
      {children}
    </Container>
  );
};

export default LayoutBody;
