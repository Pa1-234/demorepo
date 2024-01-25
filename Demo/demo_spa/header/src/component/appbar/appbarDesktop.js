import React, { useState } from "react";
import { AppBar, Box, Button, Link, ListItem, ListItemButton, ListItemIcon, ListItemText, Tab,Tabs, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from "@mui/icons-material/Search";
import { AppbarContainer ,AppbarHeader,MyList } from "../../public/styles/appbar";
import Actions from "./actions";
export default function AppbarDesktop({ matches }) {
    const theme = useTheme();
    const [value,setValue] = useState(0);
    
    return(  
        <AppBar position="sticky" sx={{bgcolor:"#c83576"}}>
        <AppbarContainer>
      <a href="/" style={{ textDecoration: 'none' }}><AppbarHeader variant="h4">Fashion</AppbarHeader></a>
      <MyList type="row">
      <Link href="/" style={{ textDecoration: 'none' }}>
        <ListItem  sx={{ color: "white" }}>
        <ListItemText primary="Home" />
        </ListItem>
       </Link>
       <Link href="#" style={{ textDecoration: 'none' }} >
        <ListItem  sx={{ color: "white" }}>
        <ListItemText primary="Categories" />
        </ListItem>
       </Link>
       <Link href="/product" style={{ textDecoration: 'none' }}>
        <ListItem  sx={{ color: "white" }}>
        <ListItemText primary="Products" />
        </ListItem>
       </Link>
       <Link href="#" style={{ textDecoration: 'none' }}>
        <ListItem  sx={{ color: "white" }}>
        <ListItemText primary="About us" />
        </ListItem>
       </Link>
       <Link href="#" style={{ textDecoration: 'none' }}>
        <ListItem  sx={{ color: "white" }}>
        <ListItemText primary="Contact us" />
        </ListItem>
       </Link>
        
        <ListItemButton >
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
          </MyList>
       <Actions matches={matches} />   
    </AppbarContainer>
    </AppBar>
    )
};
