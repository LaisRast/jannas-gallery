import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ScreenSize {
  isSmallScreen: boolean;
  isMediumScreen: boolean;
  isLargeScreen: boolean;
}

const useScreenSize = (): ScreenSize => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  return {
    isSmallScreen: isSmall,
    isMediumScreen: isMedium,
    isLargeScreen: isLarge,
  };
};

export default useScreenSize;
