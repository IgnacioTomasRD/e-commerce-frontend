import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InfoIcon from '@mui/icons-material/Info';
import React from "react";

function NavListDrawer(){
    const navLinksMobile = [
        {
            description: "My account",
            path: "#account",
            icon:  <ManageAccountsIcon/>
        },
        {
            description: "Cars",
            path: "#cars",
            icon:  <DirectionsCarIcon/>
        },{
            description: "About us",
            path: "#Home",
            icon:  <InfoIcon />
        }
    ]

    return(
        <Box sx={{ width: '100%' ,bgcolor:'white'}}>
            <nav>
            
            <List disablePadding>
            {
                navLinksMobile.map( (nav, index) => {
                    return (
                        <React.Fragment key={`navLinkMobile-${index}`}>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href={nav.path}>
                                <ListItemIcon   sx={{ minWidth: 30 }}>
                                    {nav.icon}
                                </ListItemIcon>
                                <ListItemText >{nav.description}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        </React.Fragment>
                    )})
            }   
                </List>
            </nav>
        </Box>
    )
}

export default NavListDrawer;