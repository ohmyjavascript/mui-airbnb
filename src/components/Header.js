import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// components
import Logo from './Logo';
import LocationSearch from './LocationSearch';
import ProfileSettings from './ProfileSettings';
import { flexBetweenCenter, dFlex, mobileDisplay } from 'themes/commonStyles';
import MobileSearch from './MobileSearch';

const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Box sx={mobileDisplay}>
            <Logo />
          </Box>

          <React.Fragment>
            <Box sx={mobileDisplay}>
              <LocationSearch />
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MobileSearch />
            </Box>
          </React.Fragment>
          <Box sx={mobileDisplay}>
            <ProfileSettings />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
