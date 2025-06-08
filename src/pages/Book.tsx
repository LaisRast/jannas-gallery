import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { pdfjs } from 'react-pdf';
import { useParams } from 'react-router-dom';
import BookViewer from '../components/books/BookViewer.tsx';
import LoadingError from '../components/common/LoadingError.tsx';
import LoadingSpinner from '../components/common/LoadingSpinner.tsx';
import PageTitle from '../components/common/PageTitle.tsx';
import { useBookByReadableId } from '../hooks/useBookByReadableId.ts';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const Book = () => {
  const { readableId } = useParams();
  const { data: book, isLoading: bookIsLoading, error } = useBookByReadableId({ readableId: readableId ?? '' }); // temporary solution

  if (bookIsLoading || !book) return <LoadingSpinner />;

  if (error) return <LoadingError />;

  return (
    <>
      <Helmet>
        <title>Jannas Galerie - {book.title}</title>
        <meta name="description" content={book.title} />
      </Helmet>
      <Box>
        <PageTitle>{book.title}</PageTitle>

        <BookViewer book={book} />
      </Box>
    </>
  );
};

export default Book;
