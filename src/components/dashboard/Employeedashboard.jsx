 import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import Tasklist from '../tasklist/Tasklist' 

 const Employeedashboard = (props) => {
   return (
     <div>
         <div className='p-10 bg-[#1C1C1C] h-screen'>
          <Header changeUser={props.changeUser} data={props.data}/>
          <TaskListNumber data={props.data}/>
          <Tasklist data={props.data}/>
         </div>
     </div>
   )
 }
 
 export default Employeedashboard
 