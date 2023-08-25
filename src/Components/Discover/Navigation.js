import React from 'react';
import { Box, Link } from '@mui/material';

const Navigation = () => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} gap={3}>
           
                <Link href="#" sx={linkStyles} underline="none" className="active">Special Offers</Link>
                <Link href="#" sx={linkStyles} underline="none">Trending</Link>
                <Link href="#" sx={linkStyles} underline="none">New In</Link>
           
        </Box>
    );
};

const linkStyles = {
    textDecoration: 'none',
    color: '#000',
    position: 'relative',
    fontSize: '16px',
    fontWeight:'500',
    '&.active': {
        color: '#000',
        '&::before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '3px',
            backgroundColor: 'transparent',
            bottom: '-5px',
            transformOrigin: 'center',
            transform: 'translateX(-50%)',
            zIndex: -1,
            backgroundImage: 'linear-gradient(45deg, transparent 33%, #FFAA4D 33%, #FFAA4D 66%, transparent 66%)',
            animation: '$squiggle 2s linear infinite',
        },
    },
    '@keyframes squiggle': {
        '0%': {
            transform: 'translateX(-50%) translateY(0)',
        },
        '100%': {
            transform: 'translateX(-50%) translateY(-10px)',
        },
    },
};

export default Navigation;
