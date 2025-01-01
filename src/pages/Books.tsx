import { Box } from '@mui/material';
import 'photoswipe/style.css';
import { Helmet } from 'react-helmet-async';
import BooksList from '../components/books/BooksList.tsx';
import LoadingError from '../components/common/LoadingError.tsx';
import LoadingSpinner from '../components/common/LoadingSpinner.tsx';
import PageTitle from '../components/common/PageTitle.tsx';
import { useBooks } from '../hooks/useBooks.ts';

const Books = () => {
  const { data: books, isLoading: booksIsLoading, error } = useBooks();

  if (booksIsLoading || !books) return <LoadingSpinner />;

  if (error) return <LoadingError />;

  return (
    <>
      <Helmet>
        <title>Jannas Galerie - Bücher</title>
        <meta
          name="description"
          content="Entdecken Sie Jannas kreative Bücher und lassen Sie sich von ihrer Fantasie inspirieren."
        />
      </Helmet>

      <Box>
        <PageTitle>Bücher</PageTitle>

        <BooksList books={books} />
      </Box>
    </>
  );
};

export default Books;
