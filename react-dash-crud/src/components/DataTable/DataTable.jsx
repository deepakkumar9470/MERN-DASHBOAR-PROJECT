import React from 'react'
import './table.scss'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../../redux/taskSlice';
import axios from 'axios';
import {toast} from 'react-hot-toast';

const DataTable = ({taskData}) => {
 const dispatch = useDispatch()

  const handleDelete = async (id) =>{
    console.log(id)
    // dispatch(deleteTask(id))
    await axios.delete(`http://localhost:5000/api/task/${id}`)
    toast.success("Task has been deleted Successfully..")

    window.location.reload('/')

  }

  return (


<div className="tableContainer">
      <table className="table">
        <thead className='thead'>
          <tr>
            <th>Id</th>
            <th>Title 2</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskData?.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.desc}</td>
              <td className='actionRow'>               
                  <Link to={`edit/${item._id}`}>
                  <img src="/icons/edit.svg" alt="" />
                  </Link>
                
                   <img onClick={()=>handleDelete(item._id)} src="/icons/trash.svg" alt="trash"/>            
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable