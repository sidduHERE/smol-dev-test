import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <p>© 2024 AltLayer. All rights reserved.</p>
                    </div>
                    <div className="col-lg-6">
                        <ul className="social-icons">
                            <li><a href="https://twitter.com/altlayer">Twitter</a></li>
                            <li><a href="https://www.facebook.com/altlayer">Facebook</a></li>
                            <li><a href="https://www.linkedin.com/company/altlayer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;