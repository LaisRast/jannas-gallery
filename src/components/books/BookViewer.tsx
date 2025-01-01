import { Box } from '@mui/material';
import { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page } from 'react-pdf';
import { pocketbase } from '../../api/pocketbase.ts';
import useScreenSize from '../../hooks/useScreenSize.ts';
import { BooksRecord } from '../../types/pocketbase-types.ts';

interface BookViewerProps {
  book: BooksRecord;
}

const BookViewer = ({ book }: BookViewerProps) => {
  const [numberOfPages, setNumberOfPages] = useState<null | number>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumberOfPages(numPages);
  };

  const { isLargeScreen } = useScreenSize();
  const bookWidth = isLargeScreen ? 420 : window.innerWidth * 0.9;
  const bookHeight = isLargeScreen ? 560 : bookWidth * 1.3334;
  const containerWidth = isLargeScreen ? '100%' : bookWidth;

  return (
    <Document file={pocketbase.files.getURL(book, book.pdf)} onLoadSuccess={onDocumentLoadSuccess}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '16px auto',
          width: containerWidth,
        }}
      >
        <HTMLFlipBook
          width={bookWidth}
          height={bookHeight}
          size="fixed"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          style={{
            boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.5)',
            overflow: 'hidden',
          }}
          autoSize={true}
        >
          {Array.from(new Array(numberOfPages), (_, index) => (
            <Box key={index}>
              <Page
                key={index}
                pageNumber={index + 1}
                width={bookWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Box>
          ))}
        </HTMLFlipBook>
      </Box>
    </Document>
  );
};

export default BookViewer;
