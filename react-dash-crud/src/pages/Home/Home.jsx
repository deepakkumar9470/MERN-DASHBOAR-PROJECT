import React,{useState,useEffect} from 'react'
import './home.scss'
import DataTable from '../../components/DataTable/DataTable'
import Search from '../../components/Search/Search'
import Header from '../../components/Header/Header'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { tasksList } from '../../redux/taskSlice'
// import {  } from '../../redux/taskSlice';

const Home = () => {
  // const task = useSelector((state) => state.task);
  // console.log(task)
  const dispatch = useDispatch();
  const [open,setOpen] = useState(false)
  const [taskData,setTaskData] = useState([])
  // useEffect(() => {
  //   dispatch(tasksList(task));
  // }, []);



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
    <>
      <Header title="Dashboard"/>
      <Search/>
      <DataTable taskData={taskData}/>
    </>
  )
}

export default Home