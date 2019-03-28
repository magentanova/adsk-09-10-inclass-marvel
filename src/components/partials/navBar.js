import React from 'react';
import { Link } from 'react-router-dom';

export default props => 
    <div className="nav-bar">
        <Link to="home">home</Link>
        <Link to="characters">characters</Link>
        <a target="_blank" href="#">search</a>
        <a target="_blank" href="#">whatever</a>
    </div>