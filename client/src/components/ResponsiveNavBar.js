import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, TextField, Stack, Container, AppBar, Toolbar, Box, Grid, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

function ResponsiveNavBar( { translationFunction }) {
  const { t, i18n } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('titles.appHeader')}
          </Typography>
          <Button color="inherit" onClick={translationFunction} size="small" >
            {i18n.language === 'en' ? 'Traducir al Español' : 'Translate to English'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ResponsiveNavBar;