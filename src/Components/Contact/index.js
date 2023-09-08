import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React from 'react';
import Logo from "../../../src/assets/header/ColouredELogo-01.svg";
import twitter from '../../assets/contact/twitter.svg'
import fb from '../../assets/contact/fb.svg'
import insta from '../../assets/contact/insta.svg'
import payment from '../../assets/contact/payment.png'
import cpyright from '../../assets/contact/cpyright.svg'
import { topnavlinks } from '../Header/topnavlinks';



export default function Contact() {
    return (
        <Box width={'100%'} display={'flex'} gap={{ xs: 3, lg: 10 }} height={'45vh'} flexWrap={{ xs: 'wrap', lg: 'nowrap' }} justifyContent={'center'}  >
            <Box display={'flex'} flexDirection={'column'} gap={1}>
                <img src={Logo} alt='logo' width={'231px'} height={'89px'} />
                <Box display={'flex'} gap={3}>
                    <img src={twitter} alt='logo' width={'30px'} height={'30px'} />
                    <img src={fb} alt='logo' width={'30px'} height={'30px'} />
                    <img src={insta} alt='logo' width={'30px'} height={'30px'} />
                </Box>
                <img src={payment} alt='logo' width={'70px'} height={'20px'} />
                <Box display={'flex'} flexDirection={'column'}>
                    <img src={cpyright} alt='logo' width={'120px'} height={'50px'} />
                    <Typography variant='caption'>Site Developed by Daram Guraiah</Typography>
                </Box>

            </Box>
            <Box>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>Shop</Typography>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {
                        topnavlinks.map((nav) => <li key={nav.id}> <Typography variant='caption'>{nav.link}</Typography></li>)
                    }
                </ul>

            </Box>
            <Box>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>Useful Links</Typography>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {
                        topnavlinks.map((nav) => <li key={nav.id}> <Typography variant='caption'>{nav.link}</Typography></li>)
                    }
                </ul>

            </Box>
            <Box>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>Customer Service</Typography>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {
                        topnavlinks.map((nav) => <li key={nav.id}> <Typography variant='caption'>{nav.link}</Typography></li>)
                    }
                </ul>

            </Box>
            <Box width={'40vh'} display={'flex'} flexDirection={'column'} gap={2}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>Subscribe to our newsletter</Typography>
                <Box sx={{ borderRadius: 5, border: '1px solid black' }}>
                    <Typography variant='subtitle2' sx={{ ml: 2, py: 0.5 }}>Name</Typography>
                </Box>
                <Box sx={{ borderRadius: 5, border: '1px solid black' }}>
                    <Typography variant='subtitle2' sx={{ ml: 2, py: 0.5 }}>Email</Typography>
                </Box>
                <Box>
                    <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }} />} label={<Typography variant='caption'>I agree to all marketing communications</Typography>} />
                </Box>
                <Box sx={{ borderRadius: 5, border: '1px solid black', backgroundColor: '#000', cursor: 'pointer' }} alignSelf={'flex-end'} padding={0.5} paddingX={1} margin={3}>
                    <Typography variant='button' sx={{ color: '#fff' }}>Submit</Typography>
                </Box>
            </Box>
        </Box>
    )
}
