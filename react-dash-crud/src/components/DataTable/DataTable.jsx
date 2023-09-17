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
        <thead className='thead' style={{background:'#282A3A',color:'white'}}>
          <tr style={{border:'1px solid #9DB2BF'}}>
            <th style={{border:'1px solid #EEEEEE'}}>Id</th>
            <th style={{border:'1px solid #EEEEEE'}}>Title 2</th>
            <th style={{border:'1px solid #EEEEEE'}}>Description</th>
            <th style={{border:'1px solid #EEEEEE'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskData.length && taskData?.map((item, index) => (
            <tr key={index} style={{border:'1px solid #EEEEEE'}}>
              <td style={{border:'1px solid #EEEEEE'}}>{item._id}</td>
              <td style={{border:'1px solid #EEEEEE'}}>{item.title}</td>
              <td style={{border:'1px solid #EEEEEE'}}>{item.desc}</td>
              <td className='actionRow'>               
                  <Link to={`edit/${item._id}`}>
                   <img src="/icons/edit.svg" alt="edit" />
                  </Link>
                  <Link to={`view/${item._id}`}>
                   <img src="/icons/eye.svg" alt="view" />
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