import React, { useState, useContext, useEffect } from "react";
import TaskContext from "./context/TaskContext";
import Card from "./shared/Card";

export default function AddTask({ handleAdd }) {
    //  Set up empty states (default states) for the input fields
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    // To do: comment here...
    const { addTask, taskEdit, updateTask } = useContext(TaskContext);

    // To do: comment here...
    const handleTaskTitleChange = (event) => {
        setTaskTitle(event.target.value);
    }

    // To do: comment here...
    const handleTaskDescChange = (event) => {
        setTaskDescription(event.target.value);
    }

    // To do: comment here...
    const handleSubmit = (event) => {
        event.preventDefault();

        if (taskTitle.length !== 0) {
            const newTask = {title: taskTitle, description: taskDescription, isChecked: false};

            if (taskEdit.edit) {
                updateTask(taskEdit.task.id, newTask);
            } else {
                addTask(newTask);
            }

            // clear fields
            setTaskTitle("");
            setTaskDescription("");
        }
    };

    useEffect(() => {
        if (taskEdit.edit) {
            setTaskTitle(taskEdit.task.title);
            setTaskDescription(taskEdit.task.description);
        }
    }, [taskEdit]);

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Add a task to the Task List</h2>
                <div>
                    <input type="text" className="inputbox" id="taskTitle" value={taskTitle} onChange={handleTaskTitleChange} />
                    <label htmlFor="taskTitle">Task Title:</label>
                    <input type="text" id="taskDescription" className="inputbox" value={taskDescription} onChange={handleTaskDescChange} />
                    <label htmlFor="taskDescription">Task Description:</label>
                </div>
                <input className="btn" type="submit" value="Add task" />
            </form>
        </Card>
    )
}