import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/shared/Card";

export default function User() {
    // To do: comment here...
    const params = useParams();

    return (
        <Card>
            <h1>Welcome to Task Manager, {params.name}.</h1>
            <p>User ID: {params.id}</p>
        </Card>
    )
}