import React,{useState} from "react";
import { makeStyles } from "@material-ui/core";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  left:{
    minWidth:'220px'
  }
});


function Header() {
  const classes = useStyles();
  const [state,setState] = useState({
    openDrawer:false
  });
  
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
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          style={{ "color": "white" }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">React Navbar Example</Typography>
      </Toolbar>
      <Drawer anchor="left" open = {state.openDrawer} onClose={toggleDrawer}>
        {list}
      </Drawer>
    </AppBar>

  );
}
export default Header;