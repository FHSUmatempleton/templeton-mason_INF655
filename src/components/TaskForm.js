import { useState, useContext } from "react";
import TaskContext from "./context/TaskContext";
import SearchTask from "./SearchTask";
import Task from "./Task";

/**
 * TaskForm:
 * @returns 
 */
export default function TaskForm()
{
    // State variables
    const [search, setSearch] = useState("");
    
    // taskList subscribes to TaskContext context object
    const { taskList } = useContext(TaskContext);

    // Filter taskList based on search criteria
    const result = taskList.filter((task) => task.title.includes(search));

    if (!result || result.length === 0) {
        return (
            <>
                <SearchTask search={search} setSearch={setSearch} />
                <p>No tasks</p>
            </>
        );
    }
    
    return (
        <div>
            <SearchTask search={search} setSearch={setSearch} />
            {result.map((task) => (
                <Task
                    // to do: comment here...
                    task={task}
                    
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    isChecked={task.isChecked}
                />
            ))}
        </div>
    );
}