import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function footer() {
    return (
        <div className="footer">
            <h1>Get connected with our social networks</h1>
            <div className="links">
                <FaFacebook size={30} />
                <FaInstagram size={30} />
                <FaTwitter size={30} />
                <FaLinkedin size={30} />
            </div>
        </div>
    )
}