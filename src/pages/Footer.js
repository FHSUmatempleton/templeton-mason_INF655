import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function footer() {
    return (
        <div className="footer">
            <h1>Get connected with our social networks</h1>
            <div className="links">
                <FaFacebook size={30} />
                <FaInstagram size={30} />
                <FaTwitter size={30} />
                <FaLinkedin size={30} />

                {/* To do: comment here... */}
                <Link to="/about" style={{ color: "white" }}>
                    <FaInfoCircle size={30} />
                </Link>
            </div>
        </div>
    )
}