import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../api/axios';

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {
    try {
      const res = await axios.get(`/posts/${id}`);
      setPost(res.data);
    } catch (err) {
      console.error('Failed to fetch post:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await axios.delete(`/posts/${id}`);
      alert('Post deleted');
      navigate('/');
    } catch (err) {
      console.error('Delete error:', err);
      alert('Error deleting post');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="post-details-container">
      <h2>{post.title}</h2>
      <p style={{ color: '#666' }}>{post.description}</p>
      <hr />
      <p>{post.content}</p>

      <div style={{ marginTop: '2rem' }}>
        <Link to={`/edit/${post._id}`}>
          <button style={{ marginRight: '1rem' }}>✏️ Edit</button>
        </Link>
        <button onClick={handleDelete}>🗑 Delete</button>
      </div>
    </div>
  );
};

export default PostDetails;
