import { Box } from '@mui/material';
import useScreenSize from '../../hooks/useScreenSize.ts';
import { GamesRecord } from '../../types/pocketbase-types.ts';

interface GameViewerProps {
  game: GamesRecord;
}

const GameViewer = ({ game }: GameViewerProps) => {
  const { isLargeScreen } = useScreenSize();
  const gameHeight = isLargeScreen ? 650 : window.innerWidth;

  return (
    <Box>
      <iframe
        src={`https://scratch.mit.edu/projects/${game.project_id}/embed`}
        title={game.title}
        width="100%"
        height={gameHeight}
        style={{ border: '0px' }}
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default GameViewer;
