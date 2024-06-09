
import React from 'react';
import './footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Isamisk Ltd. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
