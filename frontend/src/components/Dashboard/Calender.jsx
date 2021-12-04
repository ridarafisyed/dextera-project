import React, { useState } from 'react'
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import {TextField, Box} from '@mui/material';

const Calender = () => {
    const [value, setValue] = useState(new Date())
       
    return (
        <Box>
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
        </Box>
    )
}

export default Calender
