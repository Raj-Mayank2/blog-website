import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import axios from '../api/axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/posts');
        setPosts(res.data);
      } catch (err) {
        console.error('Failed to fetch posts:', err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="home-container">
      <h2>Latest Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => <BlogCard key={post._id} post={post} />)
      )}
    </div>
  );
};

export default Home;
