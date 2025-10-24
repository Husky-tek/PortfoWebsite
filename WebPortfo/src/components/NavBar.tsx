import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            James Catbagan
          </Typography>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Github</Button>
          <Button color="inherit">LinkedIn</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}