import React from 'react';
import './LoginModal.css'

const LoginModal = () => {
    return <form id="login">
        <h5>Login</h5>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
  </form>;
};

export default LoginModal;
