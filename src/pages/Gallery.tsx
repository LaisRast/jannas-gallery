import { Box } from '@mui/material';
import 'photoswipe/style.css';
import { Helmet } from 'react-helmet-async';
import LoadingError from '../components/common/LoadingError.tsx';
import LoadingSpinner from '../components/common/LoadingSpinner.tsx';
import PageTitle from '../components/common/PageTitle.tsx';
import ArtList from '../components/gallery/ArtList.tsx';
import { useArt } from '../hooks/useArt.ts';
import { usePhotoswipe } from '../hooks/usePhotoswipe.ts';
import { useVisitorLikes } from '../hooks/useVisitorLikes.ts';

const Gallery = () => {
  const { data: arts, isLoading: artsIsLoading, error: artsError } = useArt();

  const { data: likes, isLoading: likesIsLoading, error: likesError } = useVisitorLikes();
  usePhotoswipe({ arts });

  if (artsIsLoading || likesIsLoading || !arts || !likes) return <LoadingSpinner />;

  if (artsError || likesError) return <LoadingError />;

  return (
    <>
      <Helmet>
        <title>Jannas Galerie - Kunstwerke</title>
        <meta
          name="description"
          content="Entdecken Sie faszinierende Kunstwerke in Jannas Galerie und lassen Sie sich inspirieren."
        />
      </Helmet>
      <Box>
        <PageTitle>Galerie</PageTitle>
        <ArtList arts={arts} likes={likes} />
      </Box>
    </>
  );
};

export default Gallery;
