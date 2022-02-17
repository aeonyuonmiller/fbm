import React from 'react';
import "./Post.css";

export default function Post({ author, date, message }) {
    return <div className="post">
        <div className="post-content">
            <h5>{author}</h5>
            <sub>{date}</sub>
            <p>{message}</p>
        </div>
    </div>;
}
