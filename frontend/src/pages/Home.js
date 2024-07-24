import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <Link to="/create">Create Post</Link>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <Link to={`/posts/${post._id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
