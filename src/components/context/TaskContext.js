import { useState, createContext } from "react";
import TaskData from "../TaskData";

const TaskContext = createContext();

/* To do: purpose and function here... */
export const TaskProvider = ({ children }) => {
    // To do: comment here...
    const [taskList, setTaskList] = useState(TaskData);
    const [taskID, setTaskID] = useState(4);
    const [taskEdit, setTaskEdit] = useState({
        task: {},
        edit: false
    });

    // To do: commment here...
    const addTask = (newTask) => {
        setTaskID((prev) => {
            return prev + 1;
        });
        newTask.id = taskID;
        setTaskList([...taskList, newTask]);
    };

    // To do: comment here...
    const editTask = (task) => {
        setTaskEdit({ task, edit: true });
    }

    // To do: commment here...
    const updateTask = (id, updTaskList) => {
        setTaskList(taskList.map((task) =>
            task.id === id ? { ...task, ...updTaskList } : task
         ));
    };

    // To do: comment here...
    const deleteTask = (id) => {
         setTaskList(taskList.filter( (task) => task.id !== id ));
    };
    
    // To do: comment here...
    const checkTask = (id) => {
        setTaskList(taskList.map((task) =>
            task.id === id ? { ...task, isChecked: !task.isChecked } : task
         ));
    };

    return (
        // To do: comment here...
        <TaskContext.Provider value={{ taskList, taskEdit, addTask, editTask, updateTask, deleteTask, checkTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;