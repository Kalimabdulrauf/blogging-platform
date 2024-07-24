import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/posts/${id}`);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p><strong>Author:</strong> {post.author}</p>
            <button onClick={handleDelete}>Delete</button>
            <Link to="/">Back</Link>
        </div>
    );
}

export default Post;
