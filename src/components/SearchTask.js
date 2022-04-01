import React from "react";
import Card from "./shared/Card";

export default function SearchTask({ search, setSearch }) {
    // To do: comment here...
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <Card>
                <h2>Task Search</h2>
                <form className="searchForm">
                    <input type="text" role="searchbox" id="searchTaskBox" onChange={handleSearch} />
                    <label htmlFor="searchTaskBox">Task Title:</label>
                </form>
            </Card>
        </div>
    )
}