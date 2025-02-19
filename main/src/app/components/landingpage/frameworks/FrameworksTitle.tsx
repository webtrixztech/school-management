import React from 'react';
import { Grid2 as Grid } from '@mui/material';
import Typography from '@mui/material/Typography';


const FrameworksTitle = () => {

    return (
        (<Grid container spacing={3} justifyContent="center">
            <Grid
                size={{
                    xs: 12,
                    sm: 10,
                    lg: 8
                }}>
                <Typography variant='h2' fontWeight={700} textAlign="center" sx={{
                    fontSize: {
                        lg: '36px',
                        xs: '25px'
                    },
                    lineHeight: {
                        lg: '43px',
                        xs: '30px'
                    }
                }}>Increase speed of your development and
                    launch quickly with Modernize</Typography>
            </Grid>
        </Grid>)
    );
};

export default FrameworksTitle;
