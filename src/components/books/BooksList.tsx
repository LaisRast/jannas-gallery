import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Link } from 'react-router-dom';
import { pocketbase } from '../../api/pocketbase.ts';
import useScreenSize from '../../hooks/useScreenSize.ts';
import { BooksRecord } from '../../types/pocketbase-types.ts';
import { convertToDateOnly } from '../../utils/dateUtils.ts';

interface BookListProps {
  books: BooksRecord[];
}

const BooksList = ({ books }: BookListProps) => {
  const { isSmallScreen } = useScreenSize();

  return (
    <ImageList variant="standard" cols={isSmallScreen ? 1 : 3} gap={8} id="gallery">
      {(books ?? []).map((book: BooksRecord) => (
        <ImageListItem key={book.id} component={Link} to={`/book/${book.readable_id}`}>
          <img
            src={pocketbase.files.getURL(book, book.cover, {
              thumb: '300x0',
            })}
            alt={book.title}
            loading="lazy"
          />
          <ImageListItemBar title={book.title} subtitle={<span>{convertToDateOnly(book.date)}</span>} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default BooksList;
