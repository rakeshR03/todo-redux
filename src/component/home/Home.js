import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home(){
     
    return(
        <div className="home-container">
            <nav className='navbar-container'>
                <Link className="link" to="/" >Login</Link>
                <Link className="link" to="/todo" >Todo</Link>
            </nav>
        </div>
    );
}