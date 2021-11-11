import React, { useState } from 'react';

import { Typography,Box, Button,Paper, Grid} from '@mui/material';
import { SideBarBtn, SideBarTitle } from '../../styles/styles'
import {BarChart, GroupAdd, KeyboardArrowDown, Task, MoneyOff, MonetizationOn, FileCopy, HourglassBottom, AssignmentTurnedIn, Map, AddCircle, Money} from '@mui/icons-material';

import Calender from './Calender';
import Tasks from './Tasks';

const Dashboard = () => {
  
    const [revToggle, setRevToggle] = useState(true);
    const [empToggle, setEmpToggle] = useState(true);
    
    const revHandler = e => {
        setRevToggle(!revToggle)
    }
    const empHandler = e => {
        setEmpToggle(!empToggle)
    }
    return (
        <>
          <Grid item xs={2} >
          <Paper elevation={3} sx={{minHeight:'84vh'}}>
                <Button variant='text' fullWidth  
                endIcon={<KeyboardArrowDown/>} 
                sx={{padding:'0.3em',marginTop:'0.5em',textTransform:'none'}}
                onClick={() => revHandler(revToggle)}> 
                    Revenue 
                </Button>
            
            {revToggle? (
                <Box>
                <SideBarBtn variant="outlined">
                <Grid>
                        <Grid item><BarChart fontSize='medium'/></Grid>
                        <Grid item>Revenue In</Grid>
                    </Grid>
                </SideBarBtn>
                <SideBarBtn variant="outlined">
                    <Grid>
                        <Grid item><BarChart fontSize='medium'/></Grid>
                        <Grid item>Revenue Out</Grid>
                    </Grid>
                </SideBarBtn>
                <SideBarBtn variant="outlined">
                    <Grid>
                        <Grid item><GroupAdd fontSize='medium'/></Grid>
                        <Grid item>New Customers</Grid>
                    </Grid>
                </SideBarBtn>
            </Box>
            ): null}

            
            <Button variant='text' fullWidth 
            endIcon={<KeyboardArrowDown/>} 
            sx={{padding:'0.5em',marginTop:'0.5em',textTransform:'none'}}
            onClick={() => empHandler(empToggle)}
                > 
                Employee Performance 
            </Button>
        
            {empToggle? (
                <Box>
                <SideBarBtn variant="outlined">
                <Grid>
                        <Grid item><AddCircle fontSize='medium'/></Grid>
                        <Grid item>New Accounts</Grid>
                    </Grid>
                </SideBarBtn>
                <SideBarBtn variant="outlined">
                    <Grid>
                        <Grid item><Map fontSize='medium'/></Grid>
                        <Grid item>Map</Grid>
                    </Grid>
                    </SideBarBtn>
                <SideBarBtn variant="outlined">
                    <Grid>
                        <Grid item><AssignmentTurnedIn fontSize='medium'/></Grid>
                        <Grid item>Task Completed</Grid>
                    </Grid>
                </SideBarBtn>
                <SideBarBtn variant="outlined">
                <Grid>
                        <Grid item><HourglassBottom fontSize='medium'/></Grid>
                        <Grid item>Billable Hour</Grid>
                    </Grid>
                </SideBarBtn>
                <SideBarBtn variant="outlined">
                <Grid>
                        <Grid item><FileCopy fontSize='medium'/></Grid>
                        <Grid item>Billable v Non-Billable</Grid>
                    </Grid>
                </SideBarBtn>
                <SideBarBtn variant="outlined">
                <Grid>
                        <Grid item><MoneyOff fontSize='medium'/></Grid>
                        <Grid item>Spending</Grid>
                    </Grid>
                </SideBarBtn>
                <SideBarBtn variant="outlined">
                <Grid>
                        <Grid item><MonetizationOn fontSize='medium'/></Grid>
                        <Grid item>Profit & Lost</Grid>
                    </Grid>
                </SideBarBtn>
                <SideBarBtn variant="outlined">
                <Grid>
                        <Grid item><Task fontSize='medium'/></Grid>
                        <Grid item>Tasks</Grid>
                    </Grid>
                </SideBarBtn>
            </Box>
            ): null}
        
            </Paper>
          </Grid>  
          <Grid item xs={10}>
              <Paper elevation={3} sx={{minHeight:'84vh'}}  >
                <Calender/>
                <Task/>
            </Paper>
          </Grid>
        </>
    )
}

export default Dashboard
