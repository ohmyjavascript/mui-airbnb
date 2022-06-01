import React from 'react';
import './App.css';
import Header from './components/Header';
import OptionsTab from './components/OptionsTab';
import LocationCards from './components/LocationCards';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { mobileDisplay } from 'themes/commonStyles';
import FooterMenu from 'components/FooterMenu';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          overflow: 'auto',
          height: '100vh',
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box>
          <Box sx={mobileDisplay}>
            <Footer />
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <FooterMenu />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
