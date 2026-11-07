import './index.css'
import React, { useState } from 'react'

function ToDo() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a Shower", "Walk the Dog"])
    const [newTask, setNewTask] = useState("")
    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }
    return(
        <div className="to-do-card">
            <div className="to-do-list">    
                <h1>To-Do-List</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Enter a new task"
                        value={newTask}
                        onChange={handleInputChange}/>
                    <button
                        className="TaskAddButton"
                        onClick={addTask}>
                        Add 
                    </button>
                </div>
                <ol>
                    {tasks.map((task,index) => 
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button
                                className="deleteButton"
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button
                                className="MoveUp"
                                onClick={() => moveTaskUp(index)}>
                                Increase Priority
                            </button>
                            <button
                                className="MoveDown"
                                onClick={() => moveTaskDown(index)}>
                                Decrease Priority
                            </button>
                        </li>
                    )}
                </ol>
            </div>
            </div>
        )
    }

export default ToDo