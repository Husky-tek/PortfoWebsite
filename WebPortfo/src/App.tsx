    import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Navbar from './components/NavBar';
    import Projects from './components/projects';
    import Blog from './Blog'
    import BlogPost from './components/BlogPost';
    import { Box, Typography } from '@mui/material';
    import background from './assets/placeholder.png'
    
    const Home = () => (
      <Box
        sx={{
          height: 'calc(100vh - 64px)', // Full viewport height minus the AppBar
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" sx={{ mb: 2, textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          James Catbagan
        </Typography>
        <Typography variant="h5" sx={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Full-Stack Developer
        </Typography>
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