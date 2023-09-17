import React, { useEffect, useState } from 'react'
import './edittask.scss'
import {useDispatch } from 'react-redux';
import {updateTask} from '../../redux/taskSlice'
import {useParams,useNavigation} from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-hot-toast';
const EditTask = () => {

    const [taskData,setTaskData] = useState([])
    const [inputs,setInputs] = useState({
        title: "",
        desc : ""
    })

    const dispatch = useDispatch();
    const {id} = useParams()
    const navigate = useNavigation()
    const [errors, setErrors] = useState({
      title: "",
      desc: "",
    });
    const validateForm = () => {
      let valid = true;
      const newErrors = { title: "", desc: "" };
  
      if (inputs.title.trim() === "") {
        newErrors.title = "Title is required";
        valid = false;
      }
  
      if (inputs.title.length > 100) {
        newErrors.title = "Title must be at most 100 characters";
        valid = false;
      }
  
      if (inputs.desc.trim() === "") {
        newErrors.desc = "Description is required";
        valid = false;
      }
  
      if (inputs.desc.length > 500) {
        newErrors.desc = "Description must be at most 500 characters";
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };
  

    const handleInputChange = (e) =>{
        const {name,value}  = e.target
        setInputs({...inputs, [name] :value})
      
       }
      

  useEffect(() => {
    const fetchTask = async () =>{
       try {
         const res = await axios(`http://localhost:5000/api/task/${id}`)
         setInputs(res.data.task)
       } catch (error) {
        
       }
    }
    fetchTask()
  }, [id]);

    const handleUpdateTask = async (e,id) =>{
      e.preventDefault()
        // dispatch(updateTask({
        //     title: inputs.title,
        //     desc: inputs.desc
        // }))
        if (validateForm()) {
          
          await axios.put(`http://localhost:5000/api/task/${id}`,
          {
           title :inputs.title,
           desc : inputs.desc
         })
         setInputs([])  
         toast.success("Task updated Successfully..")
         navigate('/')
        }else{
          toast.error("Oops error!")
        }
       
          
    }


   
  return (
    <div className="edit">
      
            <form onSubmit={handleUpdateTask}>
            <h1>Edit Task</h1>
                <div className="inputItem">
                    <label htmlFor="title">Title</label>
                    <input 
                    type="text" 
                    name="title"
                    value={inputs.title}
                    onChange={handleInputChange} 
                    placeholder="Enter Title" />
                  {errors.title && <div className='error'>{errors.title}</div>}

                </div>
                <div className="inputItem">
                    <label htmlFor="description">Description</label>
                    <input 
                     type="text"
                     name="desc"
                     value={inputs.desc}
                     onChange={handleInputChange} 
                     placeholder="Enter Description" />
                  {errors.title && <div className='error'>{errors.title}</div>}
 
                </div>
                <button className='addBtn'>Edit</button>
            </form>

     
    </div>
  )
}

export default EditTask