import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import './details.scss'

const Details = () => {
 const [task,setTask] = useState({})
 const {id} = useParams()

  useEffect(() => {
    const fetchTask = async () =>{
       try {
         const res = await axios.get(`http://localhost:5000/api/task/${id}`)
         setTask(res.data.task)
       } catch (error) {
        
       }
    }
    fetchTask()
  }, [id]);

  return (
    <div className="details">

           <h2>{task.title}</h2>
           <p>{task.desc}</p>
           <span>{task.createdAt}</span>
        
    </div>
  )
}

export default Details