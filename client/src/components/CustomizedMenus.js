import React,{useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as Scroll} from 'react-scroll'
import {Link} from 'react-router-dom';




const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },

  },
 

}));


export default function CustomizedMenus() {

  const [anchorEl, setAnchorEl] = useState(null);
 

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 


 

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="none"
        style={{ color: 'white',
          backgroundColor: '#FFE061', }}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
       Menu
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple component={Link} to={'/'}>
          <HomeIcon />
          Acceuil
        </MenuItem>
        <Scroll to="More" smooth={true}>
        <MenuItem onClick={handleClose} disableRipple >
          <AddIcon/>
          nos services
        </MenuItem>
        </Scroll>
        <MenuItem onClick={handleClose} disableRipple>
          <BookIcon/>
          Blog
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple component={Link} to={'/SignIn'}>
         <AddIcon/>
          Se connecter/S'inscire
        </MenuItem>
      </StyledMenu>
    </div>
  );
}