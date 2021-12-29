import React, {Component} from "react";
import {Link} from 'react-router-dom';
function Footer() {
    return(
        <div>
            <footer className="list-footer-item">
                <p>© 2021 All rights reserved NiceBook Inc</p> &nbsp;&nbsp;
                <ul className="list-inline">
                    <li class="list-inline-item"><Link href="#">About Us</Link> | </li>
                    <li class="list-inline-item"><Link href="#">Privacy Notice</Link> | </li>
                    <li class="list-inline-item"><Link href="#">Terms of Service</Link> | </li>
                    <li class="list-inline-item"><Link href="#">United States (English)</Link></li>
                </ul>
            </footer>
        </div>
    )
}
export default Footer;
