import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    tasks : []
}


const taskSlice = createSlice({
    name : "task",
    initialState ,

    reducers: {

          tasksList : (state,action) =>{

            state.tasks = action.payload

          } ,
          addTask : (state,action) =>{

            state.tasks.push(action.payload)

          } ,
          updateTask : (state,action) =>{
            const {id,title,desc} = action.payload;
            const existingTask = state.tasks.find((item)=> item.id === id)
            if(existingTask){
                existingTask.title = title;
                existingTask.desc = desc;
            }

          } ,
          deleteTask : (state,action) =>{
            const idToRemove = action.payload;
            return state.tasks.filter((item)=> item.id !== idToRemove)
          }
    }
});


export const {addTask,updateTask,deleteTask,tasksList} = taskSlice.actions

export default taskSlice.reducer