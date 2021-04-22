import React from 'react';
import './login.css';
import companylogo from '../resources/logo.png';

const login = () => {
    return (
    <div className="logincss">
        <img src={companylogo} alt="Companylogo"></img>
        <button onClick={() => alert('Hello')}>Login</button>
    </div>    
    )}

export default login;