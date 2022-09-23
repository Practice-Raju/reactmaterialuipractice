import React,{useState} from "react";
import { makeStyles } from "@mui/styles";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Avatar,
  Box,
  Tooltip,
  Menu,
  MenuItem

} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles({
  left:{
    minWidth:'220px'
  }
});


function NavBar() {
  const classes = useStyles();
  const [state,setState] = useState({
    openDrawer:false
  });
  // specific to user profile
  const [anchorElUser, setAnchorElUser] = useState(null);
  const profileSettings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // these below two are for drawer related ones
  const toggleDrawer =()=>{
    setState({...state, openDrawer:!state.openDrawer})
  }
  const list = (
    <List className={classes.left}>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
  )
  return (
    <AppBar position='static' style={{"backgroundColor":'rgb(64,157,120)'}}>
      <Toolbar>
        <IconButton
          style={{ "color": "white" }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >React Navbar Example</Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Murugaraju" src="/static/images/avatar/saitama-pic.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {profileSettings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      </Toolbar>
      <Drawer anchor="left" open = {state.openDrawer} onClose={toggleDrawer}>
        {list}
      </Drawer>
    </AppBar>

  );
}
export default NavBar;