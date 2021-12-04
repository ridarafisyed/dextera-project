import React from 'react'
import {Typography,Box,  Paper} from '@mui/material'
import {  Table, TableHead, TableBody, TableCell, TableContainer, TableRow} from '@mui/material'

const randomDate = (start, end) =>{
    const getDateTime = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const date = getDateTime.toLocaleDateString()
    const hour = getDateTime.getHours()
    const min = getDateTime.getMinutes()
    
    return date + ' ' + hour+':'+min
}


const Task = () => {
    
    return (
        <Box elevation={3} >
            <Typography 
                component="h3"
                
                variant='h5'

            >
                My Tasks
               
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Subject</TableCell>
                        <TableCell>Detail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>123452</TableCell>
                        <TableCell>{randomDate(new Date(2012, 0, 1), new Date())}</TableCell>
                        <TableCell>Submit Document X</TableCell>
                        <TableCell>Display first 3 links </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>113457</TableCell>
                        <TableCell>{randomDate(new Date(2012, 0, 1), new Date())}</TableCell>
                        <TableCell>Document Y</TableCell>
                        <TableCell>Display more details</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>113455</TableCell>
                        <TableCell>{randomDate(new Date(2012, 0, 1), new Date())}</TableCell>
                        <TableCell>Document Z</TableCell>
                        <TableCell>Note in popup</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>113458</TableCell>
                        <TableCell>{randomDate(new Date(2012, 0, 1), new Date())}</TableCell>
                        <TableCell>Document XY</TableCell>
                        <TableCell>Display First 3 links</TableCell>
                    </TableRow>
                </TableBody>
                </Table>

            </TableContainer>
        </Box>
    )
}

export default Task
