
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './createPost.css'; 

const API_URL = import .meta.env.VITE_API_URL || 'http://localhost:3000';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = { title, content, author };

    setIsLoading(true);
    axios.post(API_URL, newPost)
      .then(() => {
        setIsLoading(false);
        alert('🎉 Post published successfully!');
        setTimeout(() => {
          navigate('/'); 
        }, 200); 
    
      })
      .catch(error => {
        setIsLoading(false);
        console.error('Error creating post:', error);
        alert(`Error creating post: ${error.message}`);
      });
  };


  return (
    <div className="create-post-container">
      <div className="form-wrapper">
        <h1 className="form-title">Create New Post</h1>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter an engaging title..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your amazing blog post here..."
              rows="10"
              required
            />
             
            <small className="char-count">{content.length} / 5000</small>
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter your name (optional)..."
            />
          </div>

          <button type="submit" className="btn-publish" disabled={isLoading}>
            {isLoading ? 'Publishing...' : 'Publish Post'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreatePost;