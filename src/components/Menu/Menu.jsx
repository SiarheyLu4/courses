import { NavLink } from "react-router-dom";
import styled from "styled-components";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

export const Menu = () => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            <Ul>
              <li>
                <HeaderLink to='/'>Courses</HeaderLink>
              </li>
              <li>
                <HeaderLink to='/:id'>Course</HeaderLink>
              </li>
            </Ul>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
`
const HeaderLink = styled(NavLink)`
  color: white;
  font-size: 24px;
  padding: 20px;
  text-decoration: none;
  &.active {
    color: black;
    text-decoration: underline;
  }
`