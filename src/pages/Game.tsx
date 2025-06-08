import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import LoadingError from '../components/common/LoadingError.tsx';
import LoadingSpinner from '../components/common/LoadingSpinner.tsx';
import PageTitle from '../components/common/PageTitle.tsx';
import GameViewer from '../components/games/GameViewer.tsx';
import { useGameByReadableId } from '../hooks/useGameByReadableId.ts';

const Game = () => {
  const { readableId } = useParams();
  const { data: game, isLoading: gameIsLoading, error } = useGameByReadableId({ readableId: readableId ?? '' }); // temporary solution

  if (gameIsLoading || !game) return <LoadingSpinner />;

  if (error) return <LoadingError />;

  return (
    <>
      <Helmet>
        <title>Jannas Galerie - {game.title}</title>
        <meta name="description" content={game.title} />
      </Helmet>
      <Box>
        <PageTitle>{game.title}</PageTitle>

        <GameViewer game={game} />
      </Box>
    </>
  );
};

export default Game;
