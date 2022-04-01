import { useState, createContext } from "react";
import TaskData from "../TaskData";

const TaskContext = createContext();

/**
 * TaskProvider:
 * @param {*} param0 
 * @returns 
 */
export const TaskProvider = ({ children }) => {
    
    // State variables
    const [taskList, setTaskList] = useState(TaskData);
    const [taskID, setTaskID] = useState(4);
    const [taskEdit, setTaskEdit] = useState({
        task: {},
        edit: false
    });

    /**
     * addTask: appends newTask to taskList and increment taskID
     * @param {*} newTask 
     */
    const addTask = (newTask) => {
        setTaskID((prev) => {
            return prev + 1;
        });
        newTask.id = taskID;
        setTaskList([...taskList, newTask]);
    };
    
    /**
     * editTask: sets task edit prop
     * @param {*} task 
     */
    const editTask = (task) => {
        setTaskEdit({ task, edit: true });
    }

    /**
     * updateTask: set task with param id to match updTask entries
     * @param {*} id 
     * @param {*} updTask 
     */
    const updateTask = (id, updTask) => {
        setTaskList(taskList.map((task) =>
            task.id === id ? { ...task, ...updTask } : task
         ));
    };

    /**
     * deleteTask: removes task from taskList with matching param id
     * @param {*} id 
     */
    const deleteTask = (id) => {
         setTaskList(taskList.filter( (task) => task.id !== id ));
    };
    
    /**
     * checkTask: toggles isChecked prop of task with matching param id
     * @param {*} id 
     */
    const checkTask = (id) => {
        setTaskList(taskList.map((task) =>
            task.id === id ? { ...task, isChecked: !task.isChecked } : task
         ));
    };

    return (
        // Context provider
        <TaskContext.Provider value={{ taskList, taskEdit, addTask, editTask, updateTask, deleteTask, checkTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;