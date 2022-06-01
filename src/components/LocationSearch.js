import React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// react icons
import { IoSearchCircleSharp } from 'react-icons/io5';
import { flexCenter } from 'themes/commonStyles';
import { pink } from '@mui/material/colors';

const LocationSearch = () => {
  return (
    <Paper sx={{ borderRadius: 20, ml: 15 }} elevation={3}>
      <Stack
        sx={{ borderRadius: 20, pl: 2 }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Button>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.primary,
              fontWeight: 'bold',
            }}
          >
            Anywhere
          </Typography>
        </Button>
        <Button>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.primary,
              fontWeight: 'bold',
            }}
          >
            Any week
          </Typography>
        </Button>
        <Button sx={flexCenter}>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.primary,
              fontWeight: 'bold',
            }}
          >
            Add Guest
          </Typography>
          <Box sx={{ ml: 1, mt: 1, mr: 1 }}>
            <IoSearchCircleSharp color={pink[500]} size={32} />
          </Box>
        </Button>
      </Stack>
    </Paper>
  );
};

export default LocationSearch;
