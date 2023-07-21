import logo from './logo.png';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

function Home() {
  return (
    <div className="App">
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar className="AppBar">
            <Link href="/" underline="hover" sx={{color: 'white', margin: '5px'}}>
                HOME
            </Link>
            <Link href="#/about" underline="hover" sx={{color: 'white', margin: '5px'}}>
                ABOUT
            </Link>
            <Link href="#/experience" underline="hover" sx={{color: 'white', margin: '5px'}}>
                EXPERIENCE
            </Link>
            </Toolbar>
        </AppBar>
        </Box>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Home;
