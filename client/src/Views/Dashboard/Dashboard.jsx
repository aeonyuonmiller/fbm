import React from 'react';
import Post from '../../components/Post/Post';
import "./Dashboard.css";

export default function Dashboard() {
  return <>
    <div className="dashboard-bg"/>
    <div className="dashboard">
      <div className="posts">
        <Post author="Luzie" date="11.05.1989" message="ok" />
        <Post author="Dangermami" date="11.05.2022" message="Whatevz" />
      </div>
      <form>
        <h5>Share news with the mob</h5>
        <input type="text" placeholder="Your Message" />
        <button>Post</button>
      </form>
    </div>
  </>;
}
