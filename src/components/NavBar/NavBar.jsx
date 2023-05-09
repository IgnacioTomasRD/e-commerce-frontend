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
          onClose={() => setOpenNavBarMobile(!openNavBarMobile)}
          ModalProps={{
              keepMounted: true, // Better open performance on mobile
            }}
          sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box',width:0.8,maxWidth:'500px'},
        }}
    >
        <DrawerHeader>
            <IconButton  onClick={() => setOpenNavBarMobile(false)}>
                <ChevronLeftIcon sx = {{ fontSize: '40px' }} />
              </IconButton>
        </DrawerHeader>
        <Divider />
        <NavListDrawer/>
    </Drawer> 
    </>
}

export default NavBar;