import { useState } from 'react';
import axios from '../api/axios';
import '../styles/CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/posts', {
        title,
        description,
        content,
      });

      alert('✅ Post created!');
      console.log(res.data);

      setTitle('');
      setDescription('');
      setContent('');
    } catch (err) {
      console.error('❌ Failed to create post:', err.response?.data || err.message);
      alert('Error creating post');
    }
  };

  return (
    <div className="create-post-container">
      <h2>Create New Blog Post</h2>
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
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default CreatePost;
