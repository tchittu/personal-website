import '../App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import logo from './logo-small.png';

function NavBar() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar className="AppBar">
                <img src={logo} className="App-logo-small" alt="logo" />
                <Link href="/" underline="hover" sx={{color: 'white', padding: '5px'}}>
                    HOME
                </Link>
                <Link href="#/about" underline="hover" sx={{color: 'white', padding: '5px'}}>
                    ABOUT
                </Link>
                <Link href="#/experience" underline="hover" sx={{color: 'white', padding: '5px'}}>
                    EXPERIENCE
                </Link>
                <Link href="#/projects" underline="hover" sx={{color: 'white', padding: '5px'}}>
                    PROJECTS
                </Link>
            </Toolbar>
        </AppBar>
        </Box>
    </div>
  );
}

export default NavBar;
