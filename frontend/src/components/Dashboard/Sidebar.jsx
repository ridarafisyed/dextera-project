import React from 'react';
import { Paper} from '@mui/material'
import Buttons from './components/Button';


const Sidebar = () => {
    return (
        <>
            <Paper elevation={3} sx={{minHeight:'84vh'}}>
                {/* <MenuList>
                    <MenuItem>
                        
                    </MenuItem>
                </MenuList> */}
                <Buttons/>
            </Paper>
        </>

        
    )
}

export default Sidebar
