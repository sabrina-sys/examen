import {useState} from "react";
import Data from "../service/data"
import dotIcon from "../img/dot.svg"
import editIcon from "../img/edit.svg"
import deleteIcon from "../img/delete.svg"
import saveIcon from "../img/save.svg"

const Task = (props) => {
    const [state, setState] = useState(false);
    const [task, setTask] = useState(props.task);
    const [alert, setAlert] = useState(false);

    const onEdit = () => {
        setState(!state);
    };

    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit= (event) => {
        if(task === "" || Data.isExist(task)){
            setAlert(true);
        }else{
            props.updateData(props.task, task);
            setState(false);
        }
        event.preventDefault();
    };

    const remove = () => {
        props.removeData(task);
    };

    return(
        <li key = {props.task} className = "task">
            {!state ? (
                <div className = "task-list">
                    <img src = {dotIcon} height = "10px"></img>
                        <span className = "task-name">{props.task}</span>
                        <button onClick = {onEdit}>
                            <img src = {editIcon} height = "20px"></img>
                        </button>

                        <button onClick = {remove}>
                            <img src = {deleteIcon} height = "20px"></img>
                        </button>
                    <img src = {dotIcon} height = "10px"></img>
                </div>
            ) : (
                <label>
                    <input className = {alert ? "input-alert" : null}
                    onChange = {handleChange}
                    value = {task} />
                    <button className = "button-save" onClick = {handleSubmit}>
                        <img src = {saveIcon} height = "12px"></img>ç
                        Guardar
                    </button>
                </label>
            )}
        </li>
    );
};

export default Task;