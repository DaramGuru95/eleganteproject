import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme();

// Color Palette
theme.palette = {
  primary: {
    main: '#E03C31',
  },
  secondary: {
    main: '#101820',
  },
  navtext:{
    main:'#fff'
  },
  input:{
    main:'#1018200D'
  },
 
  // Add more colors if needed
};

// Typography
theme.typography.h1 = {
    fontSize: '6.5rem',
    fontWeight: 550,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 1.167,
  };
  
  theme.typography.h2 = {
    fontSize: '3.75rem',
    fontWeight: 550,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 1.2,
  };
  
  theme.typography.h3 = {
    fontSize: '3rem',
    fontWeight: 400,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 1.167,
  };
  
  theme.typography.h4 = {
    fontSize: '2.125rem',
    fontWeight: 400,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 1.235,
  };
  
  theme.typography.h5 = {
    fontSize: '1.5rem',
    fontWeight: 400,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 1.334,
  };
  
  theme.typography.h6 = {
    fontSize: '1.25rem',
    fontWeight: 500,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 1.6,
  };
  
  theme.typography.subtitle1 = {
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 1.5,
  };
  
  theme.typography.subtitle2 = {
    fontSize: '0.875rem',
    fontWeight: 550,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 1.57,
  };
  
  theme.typography.body1 = {
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 1.5,
  };
  
  theme.typography.body2 = {
    fontSize: '0.875rem',
    fontWeight: 400,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 1.43,
  };
  
  theme.typography.button = {
    fontSize: '0.875rem',
    fontWeight: 500,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 1.75,
    textTransform: 'uppercase',
  };
  
  theme.typography.caption = {
    fontSize: '0.75rem',
    fontWeight: 400,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 1.66,
  };
  
  theme.typography.overline = {
    fontSize: '0.625rem',
    fontWeight: 400,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: 2.66,
    textTransform: 'uppercase',
  };
  
  // Font Family
  theme.typography.fontFamily ='Open Sans, sans-serif';
  
  // Spacing and Breakpoints
  theme.spacing(2); // Spacing in multiples of 8px
  
  theme.breakpoints.values = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  };
  
  // Responsive Font Sizes
  responsiveFontSizes(theme);



// Responsive Font Sizes
responsiveFontSizes(theme);

// Custom Component Styling (optional)


export default theme;
