import { Box, Button, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BooksIcon from '../assets/book-shelf-line.svg?react';
import GamesIcon from '../assets/gamepad-line.svg?react';
import GalleryIcon from '../assets/multi-image-line.svg?react';
import PageTitle from '../components/common/PageTitle.tsx';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Jannas Galerie - Home</title>
        <meta
          name="description"
          content="Willkommen auf Jannas Galerie! Entdecken Sie die inspirierende Kunst von Janna, einer talentierten Künstlerin."
        />
      </Helmet>

      <Box>
        <PageTitle>Willkommen in Jannas Galerie</PageTitle>

        <Typography variant="body1" component="p" textAlign="center" sx={{ margin: 2 }}>
          Entdecken Sie die kreative Welt von Janna, einer talentierten Künstlerin, die ihre Fantasie und Vision in
          einzigartigen Kunstwerken und Geschichten einfängt.
        </Typography>

        <Typography variant="body1" component="p" textAlign="center" sx={{ margin: 2 }}>
          In dieser Galerie können Sie durch die Kunstwerke von Janna stöbern, mehr über ihre kreativen Projekte
          erfahren und ihre inspirierenden Werke genießen.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            gap: 3,
          }}
        >
          <Button variant="contained" component={Link} to="/gallery" startIcon={<GalleryIcon width={34} />}>
            Galerie
          </Button>
          <Button variant="contained" component={Link} to="/books" startIcon={<BooksIcon width={34} />}>
            Bücher
          </Button>
          <Button variant="contained" component={Link} to="/games" startIcon={<GamesIcon width={34} />}>
            Spiele
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
