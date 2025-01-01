import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../components/common/PageTitle.tsx';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Jannas Galerie - Über die Künstlerin</title>
        <meta
          name="description"
          content="Erfahren Sie mehr über Janna, ein kreatives Mädchen mit einer Leidenschaft für Kunst und Design."
        />
      </Helmet>

      <Box>
        <PageTitle>Über die Künstlerin</PageTitle>

        <Typography variant="body1" component="p" sx={{ margin: 1, fontStyle: 'italic', marginTop: 3 }}>
          "Alle lieben alle und alle lieben dich und ich liebe dich"
        </Typography>
        <Typography variant="body2" component="p" sx={{ margin: 1, fontStyle: 'italic', textAlign: 'right' }}>
          - Janna, Mai 2023
        </Typography>

        <Typography variant="body1" component="p" sx={{ margin: 2 }}>
          Janna ist ein kreatives kleines Mädchen mit einer Leidenschaft für Zeichnen, Basteln und vieles mehr. Seit sie
          sehr klein war, hat sie ihre Fantasie auf Papier zum Leben erweckt. Ihre Werke zeigen eine außergewöhnliche
          Mischung aus Farben, Formen und Geschichten, die ihren einzigartigen Blick auf die Welt widerspiegeln.
        </Typography>
        <Typography variant="body1" component="p" sx={{ margin: 2 }}>
          Auf dieser Website präsentiert sie ihre Kunstwerke, die sie mit viel Liebe und Hingabe erschafft. Jedes Bild
          und jede Bastelarbeit ist ein kleiner Einblick in die Welt, wie sie sie sieht – voller Freude, Neugier und
          Entdeckergeist.
        </Typography>
        <Typography variant="body1" component="p" sx={{ margin: 2 }}>
          Es ist eine Freude, ihre kreativen Fortschritte zu sehen, und wir hoffen, dass diese Galerie auch Ihnen
          gefällt und Sie genauso viel Freude an ihren Kunstwerken haben wie wir.
        </Typography>
      </Box>
    </>
  );
};

export default About;
