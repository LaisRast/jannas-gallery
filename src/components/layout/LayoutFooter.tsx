import { Box, Typography } from '@mui/material';

const LayoutFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        padding: 2,
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="body2">Große Kunst, geschaffen von großen kleinen Händen</Typography>
    </Box>
  );
};

export default LayoutFooter;
