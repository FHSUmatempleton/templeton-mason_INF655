import React, { useEffect, useRef } from "react";
import Card from "./shared/Card";

export default function SearchTask({ search, setSearch })
{
    // Define persistent ref object
    const searchInput = useRef(null);
    
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    // have input remain in focus after render
    useEffect(() => {
        searchInput.current.focus();
    },[]);

    return (
        <div>
            <Card>
                <h2>Task Search</h2>
                <form className="searchForm">
                    <input  ref={searchInput} type="text" role="searchbox" id="searchTaskBox" value={search} onChange={handleSearch} />
                    <label htmlFor="searchTaskBox">Task Title:</label>
                </form>
            </Card>
        </div>
    );
}