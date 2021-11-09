import React from 'react';

import { Grid } from '@mui/material'

import Sidebar from './Sidebar';
import MainSection from './MainSection'

const index = () => {
    return (
        <>
          <Grid item xs={2} >
              <Sidebar/>
          </Grid>  
          <Grid item xs={10}>
            <MainSection/>
          </Grid>
        </>
    )
}

export default index
