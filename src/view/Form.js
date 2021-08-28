import { useState, useEffect } from "react";
import Task from "./Task";
import Data from "../service/data";

function Form(){
    const [data, setData] = useState(Data.getTasks);
    const [state, setState] = useState("");
    const [message, setMessage] = useState("");
    const [reload, setReload]  = useState(false);

    useEffect(() => {
        setData(Data.getTasks);
    }, [reload]);

    const handleChange = (event) => {
        setState(event.target.value);
    };

    const handleSubmit = (event) => {
        if(Data.isExist(state)){
            setMessage("La tarea ya existe");
        }else{
            if(state === ''){
                setMessage("No hay tarea por añadir: Inserte tarea");
            }else{
                setMessage("");
                setState("");
                setOneData(state);
            }
        }
        event.preventDefault();
    };

    const setOneData = (task) => {
        Data.setOneTask(task);
        setData(Data.getTasks);
    }

    const removeDAta = (task) => {
        Data.removeTask(task);
        setData(Data.getTasks);
    }

    const updateData = (task, newTask) => {
        Data.updateTask(task, newTask);
        reloadComponent();
    }

    const reloadComponent = () => {
        setReload(!reload);
    }

    return(
       <div className = "App-header">
           <header className = "App-header">
                <h2>LKMX - FrontEnd</h2>
                <div className = "card">
                <h4>To Do List</h4>
                    <div className = "head">
                        <form onSubmit = {handleSubmit}>
                            <input type = "text" value = {state} placeholder = "Escribe una tarea" onChange = {handleChange} />
                            <button className = "button-add" type = "submit">Agregar</button>
                        </form>
                        {message === "" ? <p></p> : <p className = "alert">{message}</p>}
                    </div>
                    <div className = "body">
                        <ul className = "list">
                            {data.lenght === 0 ? (
                                <li className = "list_empty">
                                    <small className = "label empty_info_label"> No hay tareas </small>
                                </li>
                            ) : (
                                data.map((task) => (
                                    <Task key = {task} task = {task} removeData = {removeDAta} updateData = {updateData} />
                                ))
                            )}
                        </ul>
                    </div>
                </div>
           </header>
       </div> 
    );
}
export default Form;