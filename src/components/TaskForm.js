import { useState, useContext } from "react";
import TaskContext from "./context/TaskContext";
import SearchTask from "./SearchTask";
import Task from "./Task";

export default function TaskForm() {
    // To do: comment here...
    const { taskList } = useContext(TaskContext);
    const [search, setSearch] = useState("");

    // To do: comment here...
    const result = taskList.filter((task) => task.title.includes(search))

    if (!result || result.length === 0) {
        return <p>No tasks</p>;
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
    )
}