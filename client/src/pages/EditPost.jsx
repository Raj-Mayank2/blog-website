import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../api/axios';
import '../styles/CreatePost.css'; // reuse styles

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/posts/${id}`);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setContent(res.data.content);
      } catch (err) {
        console.error('Failed to load post for editing:', err);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/posts/${id}`, { title, description, content });
      alert('✅ Post updated!');
      navigate(`/post/${id}`);
    } catch (err) {
      console.error('Update failed:', err);
      alert('❌ Failed to update post');
    }
  };

  return (
    <div className="create-post-container">
      <h2>Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your blog content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
          required
        ></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
