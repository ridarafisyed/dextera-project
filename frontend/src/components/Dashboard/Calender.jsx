import React, { useState } from 'react'
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import {TextField, Grid} from '@mui/material'
import Tasks from './Tasks';



const Calender = () => {
    const [value, setValue] = useState(new Date())
    const [toggle, setToggle] = useState(true);

    
    return (
        <Grid container>
            {toggle ? 
            (<Grid item>
             <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker

                    value={value}
                    shouldDisableDate={isWeekend}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </Grid>): null
            }
            <Grid item p={3}>
                <Tasks/>
            </Grid>
        </Grid>
    )
}

export default Calender
