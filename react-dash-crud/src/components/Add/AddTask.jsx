import React, { useState } from 'react'
import './addtask.scss'
import { useSelector, useDispatch } from 'react-redux';
import {addTask} from '../../redux/taskSlice'
import toast from 'react-hot-toast';

const AddTask = ({setOpen}) => {

    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    
  const [errors, setErrors] = useState({
    title: "",
    desc: "",
  });
  const validateForm = () => {
    let valid = true;
    const newErrors = { title: "", desc: "" };

    if (title.trim() === "") {
      newErrors.title = "Title is required";
      valid = false;
    }

    if (title.length > 100) {
      newErrors.title = "Title must be at most 100 characters";
      valid = false;
    }

    if (desc.trim() === "") {
      newErrors.desc = "Description is required";
      valid = false;
    }

    if (desc.length > 500) {
      newErrors.desc = "Description must be at most 500 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


    const dispatch = useDispatch();

    const handleAddTask = (e) =>{
        e.preventDefault()
        if (validateForm()) {
            dispatch(addTask({
                title,
                desc
            }))  
            window.location.reload('/')
            setTimeout(() => {
                 toast.success("Task added Successfully..")
            }, 3000);
            setTitle('')
            setDesc('')
            setOpen(false)
           
          }else{
            toast.error("Oops error!")

          }
             
    }

    
  return (
    <div className="add">
        <div className="modal">

            <span  className ="close" onClick={()=>setOpen(false)}>X</span>
            <h1>Add Task</h1>

            <form onSubmit={handleAddTask}>
                <div className="inputItem">
                    <label htmlFor="title">Title</label>
                    <input 
                      type="text"
                      value={title}
                      onChange={(e)=>setTitle(e.target.value)} 
                      placeholder="Enter Title" 
                    />
                    {errors.title && <div className='error'>{errors.title}</div>}

                </div>
                <div className="inputItem">
                    <label htmlFor="description">Description</label>
                    <input 
                    type="text"
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)} 
                    placeholder="Enter Description" />
                    {errors.desc && <div className='error'>{errors.desc}</div>}

                </div>
                <button type="submit" className='addBtn'>Add</button>
            </form>

        </div>
    </div>
  )
}

export default AddTask