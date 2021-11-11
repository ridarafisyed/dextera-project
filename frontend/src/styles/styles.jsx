import * as React from 'react';
import { styled } from '@mui/styles';
import {Button, Typography} from '@mui/material/';

// export const Login_btn = styled(Button)({
//     background: 'primary ',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   });

export const SideBarBtn = styled(Button)({
  fontSize: '0.6em',
  textTransform:'none',
  textAlign:'center',
  width:'8em',
  height:'8em',
  margin:'0.7em',
  borderColor:'#eee',
  padding:'1em',
  '&:hover':{
    backgroundColor: 'white',
  },
})
