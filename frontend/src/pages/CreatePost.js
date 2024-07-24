import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/posts', { title, content, author });
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} required />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreatePost;
