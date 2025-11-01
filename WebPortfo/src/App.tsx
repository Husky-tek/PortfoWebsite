    import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Navbar from './components/NavBar';
    import Projects from './components/projects';
    import Blog from './Blog'
    import BlogPost from './components/BlogPost';
    import { Box, Card, Typography } from '@mui/material';
    import background from './assets/stars.jpg'
    import Grid from '@mui/material/Grid';
    
     
    
    const Home = () => (
      <Box
        sx={{
          height: 'calc(100vh - 70px)', 
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: 'white',
          textAlign: 'center',
          p: { xs: 5, md: 3 }, // Add padding
        }}
      >

        <Card sx={{backgroundColor: 'rgba(0,0,0,0.5)', p: { xs: 2, md: 4 } }}>
          <Typography variant='h2' sx={{ mb: 2 }}>Hello,</Typography>
          <Typography variant='h2' >I'm James Catbagan</Typography>
          <Typography variant='body1' > </Typography>
        </Card>
        
        
      </Box>
    );

    function App() {
      return (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
          </Routes>
        </div>
      );
    }

    export default App;