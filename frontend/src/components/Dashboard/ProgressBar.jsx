import React,{useState} from 'react'
import { LinearProgress, Box , Grid, Typography} from '@mui/material';

const ProgressBar = () => {
    const [progress, setProgress] = useState(69);
    return (
        <Box paddingLeft={3} paddingRight={3}>
        <Grid container >
          <Grid item xs={1}>
            <Typography>{progress}%</Typography>
          </Grid>
          <Grid item xs={11}mt={2}>
            <LinearProgress variant="determinate" value = {progress} />
          </Grid>
          </Grid>
        </Box>
    )
}

export default ProgressBar
