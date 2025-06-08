import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Link } from 'react-router-dom';
import { pocketbase } from '../../api/pocketbase.ts';
import useScreenSize from '../../hooks/useScreenSize.ts';
import { GamesRecord } from '../../types/pocketbase-types.ts';
import { convertToDateOnly } from '../../utils/dateUtils.ts';

interface GamesListProps {
  games: GamesRecord[];
}

const GamesList = ({ games }: GamesListProps) => {
  const { isSmallScreen } = useScreenSize();

  return (
    <ImageList variant="standard" cols={isSmallScreen ? 1 : 2} gap={8} id="gallery">
      {(games ?? []).map((game: GamesRecord) => (
        <ImageListItem key={game.id} component={Link} to={`/game/${game.readable_id}`}>
          <img
            src={pocketbase.files.getURL(game, game.thumbnail, {
              thumb: '300x0',
            })}
            alt={game.title}
            loading="lazy"
          />
          <ImageListItemBar title={game.title} subtitle={<span>{convertToDateOnly(game.date)}</span>} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GamesList;
