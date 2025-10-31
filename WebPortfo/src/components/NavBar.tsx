import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ bgcolor: "#000080" }}>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
            James Catbagan
          </Typography>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
          <Button color="inherit" component="a" href="https://github.com/Husky-tek" target="_blank" rel="noopener noreferrer">Github</Button>
          <Button color="inherit" component="a" href="https://www.linkedin.com/in/james-catbagan/" target="_blank" rel="noopener noreferrer">Linkedin</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}