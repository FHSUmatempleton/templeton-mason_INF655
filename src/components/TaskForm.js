import { useState } from "react";
import Task from "./Task";
import TaskData from "./TaskData";

export default function TaskForm() {
    //  Set up empty states (default states) for the input fields
    const [taskList, setTaskList] = useState(TaskData);
    const [taskID, setTaskID] = useState(3)
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleTask = (event) => {
        event.preventDefault();

        setTaskID((prev) => {
            return prev + 1;
        })

        setTaskList([...taskList, {id: taskID, title: taskTitle, description: taskDescription}]);
    };
    
    
    if (!taskList) {
        return <p>No tasks</p>;
    }
    return (
        <span>
            {taskList.map((task) => (
                <Task id={task.id} title={task.title} description={task.description} />
            ))}
            <form onSubmit={handleTask}>
                <label>Title:
                    <input type="text" id="title" onChange={event => setTaskTitle(event.target.value)} />
                </label>

                <label>Description:
                    <input type="text" id="description" onChange={event => setTaskDescription(event.target.value)} />
                </label>

                <input type="submit" value="Add task" />
            </form>
        </span>
    )
}