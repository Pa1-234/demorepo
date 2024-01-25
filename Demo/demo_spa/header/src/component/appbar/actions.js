import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Colors } from "../../public/styles/theme";
import { ActionIconsContainerDesktop , ActionIconsContainerMobile ,MyList} from "../../public/styles/appbar";
import React, { useState, useEffect } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Actions({ matches }) {

  const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check for user data in localStorage on initial mount
    const storedUserData = localStorage.getItem('userData');
    const userData = storedUserData ? JSON.parse(storedUserData) : null;
    setUserData(userData);
  
    // Add the event listener to handle user logins
    const handleUserLoggedIn = (event) => {
      const storedUserData = localStorage.getItem('userData');
      const userData = storedUserData ? JSON.parse(storedUserData) : null;
      setUserData(userData);
    };
  
    window.addEventListener('userLoggedIn', handleUserLoggedIn);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('userLoggedIn', handleUserLoggedIn);
    };
  }, []); // Empty dependency array to run the effect only on mount
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('userData');
    // Clear user data from component state
    setUserData(null);
  };
  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <a style={{ textDecoration: 'none' }} href="/cart"><ShoppingCartIcon /></a> 
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon 
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.white,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          {userData ? (
        <div>
          <p>Welcome, {userData.username}!</p>
          <button onClick={handleLogout}><LogoutIcon/></button>
        </div>
      ) : (
          <a href="/signin"><ListItemIcon 
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.white,
            }}
          >
            <PersonIcon />
          </ListItemIcon></a>
        )}
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
}
