import { Box, Pagination } from '@mui/material';

interface ArtPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

const ArtPagination = ({ page, totalPages, onPageChange, isLoading = false }: ArtPaginationProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '16px',
      }}
    >
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, value) => onPageChange(value)}
        color="primary"
        siblingCount={1}
        boundaryCount={1}
        disabled={isLoading}
      />
    </Box>
  );
};

export default ArtPagination;
