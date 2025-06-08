import { Box } from '@mui/material';
import 'photoswipe/style.css';
import { Helmet } from 'react-helmet-async';
import LoadingError from '../components/common/LoadingError.tsx';
import LoadingSpinner from '../components/common/LoadingSpinner.tsx';
import PageTitle from '../components/common/PageTitle.tsx';
import GamesList from '../components/games/GamesList.tsx';
import { useGames } from '../hooks/useGames.ts';

const Games = () => {
  const { data: games, isLoading: gamesIsLoading, error } = useGames();

  if (gamesIsLoading || !games) return <LoadingSpinner />;

  if (error) return <LoadingError />;

  return (
    <>
      <Helmet>
        <title>Jannas Galerie - Bücher</title>
        <meta
          name="description"
          content="Tauchen Sie ein in Jannas bunte Spielwelt und erleben Sie spielerische Abenteuer voller Kreativität und Spaß."
        />
      </Helmet>

      <Box>
        <PageTitle>Spiele</PageTitle>

        <GamesList games={games} />
      </Box>
    </>
  );
};

export default Games;
