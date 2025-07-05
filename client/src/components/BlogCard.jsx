import { Link } from 'react-router-dom';
import '../styles/BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <h3>{post.title}</h3>
      <p>{post.description.slice(0, 100)}...</p>
      <Link to={`/post/${post._id}`} className="read-more">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
