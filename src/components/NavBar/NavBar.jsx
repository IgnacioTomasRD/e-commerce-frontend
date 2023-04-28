import { Divider, Drawer, IconButton, styled } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function NavBar({openNavBarMobile,setOpenNavBarMobile}){
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    return <>

    <Drawer 
          variant="persistent"
          open={openNavBarMobile}
          hideBackdrop= {true}
          onClose={() => setOpenNavBarMobile(!openNavBarMobile)}
          ModalProps={{
              keepMounted: true, // Better open performance on mobile.
              hideBackdrop: true
            }}
          sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box',width:1},
        }}
    >
        <DrawerHeader>
            <IconButton  onClick={() => setOpenNavBarMobile(false)}>
                <ChevronLeftIcon sx = {{ fontSize: '10vw' }} />
              </IconButton>
        </DrawerHeader>
        <Divider />
        <NavListDrawer/>
    </Drawer> 
    </>
}

export default NavBar;