import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { pocketbase } from '../../api/pocketbase.ts';
import useScreenSize from '../../hooks/useScreenSize.ts';
import { ArtViewRecord, ArtViewResponse, LikesResponse } from '../../types/pocketbase-types.ts';

interface ArtListProps {
  arts: ArtViewResponse[];
  likes: LikesResponse[];
}

const ArtList = ({ arts, likes }: ArtListProps) => {
  const { isSmallScreen } = useScreenSize();

  return (
    <ImageList variant="masonry" cols={isSmallScreen ? 1 : 3} gap={8} id="gallery">
      {arts.map((art: ArtViewRecord) => (
        <ImageListItem
          key={art.id}
          data-pswp-id={art.id}
          data-pswp-width={art.image_width}
          data-pswp-height={art.image_height}
          data-pswp-like-id={likes?.filter((value) => value.art_id === art.id)?.[0]?.id}
          data-pswp-number-of-likes={art.likes_count}
          component="a"
          href={pocketbase.files.getURL(art, art.image)}
        >
          <img
            src={pocketbase.files.getURL(art, art.image, {
              thumb: '300x0',
            })}
            alt={art.title}
            width={300}
            loading="lazy"
          />
          <Box className="hidden-caption-content" display="none">
            <Typography variant="h6">{art.title}</Typography>
            <Typography
              variant="body2"
              sx={{
                fontStyle: 'italic',
                fontSize: '0.875rem',
              }}
            >
              ({art.date})
            </Typography>
            <Typography variant="body2">{art.description}</Typography>
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ArtList;
