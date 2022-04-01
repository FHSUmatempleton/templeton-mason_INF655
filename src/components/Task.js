import { useContext } from "react";
import TaskContext from "./context/TaskContext";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";

export default function Task({ task, id, title, description, isChecked }) {
    const { editTask, deleteTask, checkTask } = useContext(TaskContext);

    return (
        <Card>
            <input className="item" type="checkbox" checked={isChecked} onChange={ () => checkTask(id) }></input>
            <div style={isChecked ? {textDecoration: "line-through"} : null} className="text-display">{title}</div>
            <div style={isChecked ? {textDecoration: "line-through"} : null}>{description}</div>
            <button onClick={() => editTask(task)} className="edit">
                <FaEdit />
            </button>
            <button onClick={() => deleteTask(id)} className="delete">
                <FaTrashAlt />
            </button>
        </Card>
    )
}

Task.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    isChecked: PropTypes.bool
};