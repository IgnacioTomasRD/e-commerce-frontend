import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InfoIcon from '@mui/icons-material/Info';
import React from "react";

function NavListDrawer({navLinksMobile}){

    return(
        <Box sx={{ width: '100%' ,bgcolor:'white'}}>
            <nav>
            
            <List disablePadding>
            {
                navLinksMobile.map( (nav, index) => {
                    return (
                        <React.Fragment key={`navLinkMobile-${index}`}>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href={nav.path} onClick={nav.onClick}>
                                <ListItemIcon   sx={{ minWidth: 30 }}>
                                    {nav.icon('black')}
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{sx: {fontSize:'1.5rem',ml:1}}} >{nav.title}</ListItemText>
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