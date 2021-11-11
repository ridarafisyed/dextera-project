// import React, { useState } from 'react';
// import { Typography,Box, Button, Grid} from '@mui/material';
// import { SideBar_btn, SideBar_title } from '../../../styles/styles';
// // import {PlusOne} from '@mui/icons-material';
// import {BarChart, GroupAdd, KeyboardArrowDown, Task, MoneyOff, MonetizationOn, FileCopy, HourglassBottom, AssignmentTurnedIn, Map, AddCircle, Money} from '@mui/icons-material';


// const Buttons = () => {
//     const [revToggle, setRevToggle] = useState(true);
//     const [empToggle, setEmpToggle] = useState(true);
//     const revHandler = e => {
//         setRevToggle(!revToggle)
//     }
//     const empHandler = e => {
//         setEmpToggle(!empToggle)
//     }
//     return (
//         <>
        
//             <Button variant='text' fullWidth  
//             endIcon={<KeyboardArrowDown/>} 
//             sx={{padding:'0.3em',marginTop:'0.5em',textTransform:'none'}}
//             onClick={e => revHandler(e)}
//                 > 
//                 Revenue 
//             </Button>
        
//         {revToggle? (
//             <Box>
//             <SideBar_btn variant="outlined">
//             <Grid>
//                     <Grid item><BarChart fontSize='medium'/></Grid>
//                     <Grid item>Revenue In</Grid>
//                 </Grid>
//             </SideBar_btn>
//             <SideBar_btn variant="outlined">
//                 <Grid>
//                     <Grid item><BarChart fontSize='medium'/></Grid>
//                     <Grid item>Revenue Out</Grid>
//                 </Grid>
//             </SideBar_btn>
//             <SideBar_btn variant="outlined">
//                 <Grid>
//                     <Grid item><GroupAdd fontSize='medium'/></Grid>
//                     <Grid item>New Customers</Grid>
//                 </Grid>
//             </SideBar_btn>
//         </Box>
//         ): null}

        
//             <Button variant='text' fullWidth 
//             endIcon={<KeyboardArrowDown/>} 
//             sx={{padding:'0.5em',marginTop:'0.5em',textTransform:'none'}}
//             onClick={e => empHandler(e)}
//                 > 
//                 Employee Performance 
//             </Button>
        
//         {empToggle? (
//             <Box>
//             <SideBar_btn variant="outlined">
//             <Grid>
//                     <Grid item><AddCircle fontSize='medium'/></Grid>
//                     <Grid item>New Accounts</Grid>
//                 </Grid>
//             </SideBar_btn>
//             <SideBar_btn variant="outlined">
//                 <Grid>
//                     <Grid item><Map fontSize='medium'/></Grid>
//                     <Grid item>Map</Grid>
//                 </Grid>
//                 </SideBar_btn>
//             <SideBar_btn variant="outlined">
//                 <Grid>
//                     <Grid item><AssignmentTurnedIn fontSize='medium'/></Grid>
//                     <Grid item>Task Completed</Grid>
//                 </Grid>
//             </SideBar_btn>
//             <SideBar_btn variant="outlined">
//             <Grid>
//                     <Grid item><HourglassBottom fontSize='medium'/></Grid>
//                     <Grid item>Billable Hour</Grid>
//                 </Grid>
//             </SideBar_btn>
//             <SideBar_btn variant="outlined">
//             <Grid>
//                     <Grid item><FileCopy fontSize='medium'/></Grid>
//                     <Grid item>Billable v Non-Billable</Grid>
//                 </Grid>
//             </SideBar_btn>
//             <SideBar_btn variant="outlined">
//             <Grid>
//                     <Grid item><MoneyOff fontSize='medium'/></Grid>
//                     <Grid item>Spending</Grid>
//                 </Grid>
//             </SideBar_btn>
//             <SideBar_btn variant="outlined">
//             <Grid>
//                     <Grid item><MonetizationOn fontSize='medium'/></Grid>
//                     <Grid item>Profit & Lost</Grid>
//                 </Grid>
//             </SideBar_btn>
//             <SideBar_btn variant="outlined">
//             <Grid>
//                     <Grid item><Task fontSize='medium'/></Grid>
//                     <Grid item>Tasks</Grid>
//                 </Grid>
//             </SideBar_btn>
//         </Box>
//         ): null}
        
//         </>
//     )
// }

// export default Buttons