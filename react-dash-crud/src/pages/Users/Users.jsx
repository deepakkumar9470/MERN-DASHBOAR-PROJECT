import React, { useEffect, useState } from 'react'
import './users.scss'
import DataTable from '../../components/DataTable/DataTable'
import Search from '../../components/Search/Search'
import Header from '../../components/Header/Header'
import AddTask from '../../components/Add/AddTask'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { tasksList } from '../../redux/taskSlice'

const Users = () => {
  // const task = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [open,setOpen] = useState(false)
  const [taskData,setTaskData] = useState([])
  // useEffect(() => {
  //   dispatch(tasksList());
  // }, [dispatch]);

  // console.log(task)
  useEffect(() => {
    const fetchTask = async () =>{
       try {
         const res = await axios(`http://localhost:5000/api/task`)
         console.log(res)
         setTaskData(res.data.tasks)
       } catch (error) {
        
       }
    }
    fetchTask()
  }, []);
 
 
  return (
    <div>
      <button onClick={()=>setOpen(true)}>Add User</button>
      <Header title="Users List"/>
      <Search/>
      <DataTable taskData={taskData}/>
      {open && <AddTask setOpen={setOpen} />}
    </div>
  )
}

export default Users