import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}> 
            <div className="header--logo">
                <a href="/">
                    <img src="https://t2.tudocdn.net/178296?w=660&h=660" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                 <a href="/">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="User"/>
                 </a>
            </div>
        </header>
    )
}