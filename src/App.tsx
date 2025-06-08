import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import theme from './config/theme.ts';
import About from './pages/About.tsx';
import Book from './pages/Book.tsx';
import Books from './pages/Books.tsx';
import Gallery from './pages/Gallery.tsx';
import Game from './pages/Game.tsx';
import Games from './pages/Games.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';

function App() {
  const queryClient = new QueryClient();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/books" element={<Books />} />
                <Route path="/book/:readableId" element={<Book />} />
                <Route path="/games" element={<Games />} />
                <Route path="/game/:readableId" element={<Game />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
