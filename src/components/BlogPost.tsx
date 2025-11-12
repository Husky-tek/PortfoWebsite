import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import posts from './Blog/blogposts.json';

interface Post {
  id: number;
  title: string;
  date: string;
  content: string;
}

export default function BlogPost() {
  // Get the postId from the URL
  const { postId } = useParams<{ postId: string }>();
  const postInfo = (posts as Post[]).find(p => p.id.toString() === postId);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (postInfo) {
      fetch(postInfo.content)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(text => {
          setContent(text);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching post content:", error);
          setContent("Failed to load post content.");
          setLoading(false);
        });
    } else {
      setContent("Post not found.");
      setLoading(false);
    }
  }, [postInfo]);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}><CircularProgress /></Box>;
  }

  if (!postInfo || content === "Post not found.") {
    return <Typography>Post not found.</Typography>;
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Paper sx={{ p: { xs: 2, md: 4 }, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {postInfo?.title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {postInfo?.date}
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>{content}</Typography>
      </Paper>
    </Box>
  );
}