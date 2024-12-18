import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
const Todos = () => {
    const [initial , setInitial] = useState();
    const [data , setData] = useState([]);


    const getInput = (e) => {
        setInitial(e.target.value)
    }
    const getData = (e) => {
        e.preventDefault()
        let store = [...data,initial]
        setData(store)
        setInitial("")

    }
    const deleteTask =(index)=>{
      console.log(index);
      const filterData = data.filter((item,id)=>{
        return id!== index;
      })
      setData(filterData)
    }

  return (
    <div className="container">
    <div className="inputTask">
      <input type="text" placeholder="Enter your task" onChange={getInput} value={initial}/>
      <button onClick={getData}>Add Task</button>
    </div>
    {data.map((element,index)=>{
      return (
        <div className="task">
           <p>{element}</p>
           <FontAwesomeIcon id='deleteIcon' onClick={()=>deleteTask(index)} icon={faTrash} />
        </div>
      )
    })}
  </div>
  )
}

export default Todos