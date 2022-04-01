import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation">
            <Card>
                <p>
                    <Link to="/">Home</Link>
                </p>
            </Card>

            <Card>
                <p>
                    <Link to="/about">About</Link>
                </p>
            </Card>
        </div>
    )
}