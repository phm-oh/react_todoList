import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




function App() {

  

  // const showToastMessage = (text) => {
  //   toast(text, {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     });
// };


  const [task,setTask] = useState([
    {id:1 ,title: 'งานวิจัยปโท Data Minig'},
    {id:2 ,title: 'เตรียมสอน react'},
    {id:3 ,title: 'เตียมสอน flutter'},
    {id:4 ,title: 'เขียนเกมส์ Unity'},
    
  ]);

  const [title , setTitle] = useState("")
  const [editId,setEditId] = useState(null)


  function deleteTask(id){
    // console.log(id)
    const result = task.filter(item=>item.id  !==id)
    // console.log(result)
    setTask(result)
  }

  function saveTask(e){
      e.preventDefault()
      // console.log('บันทึกข้อมูล');
      if(!title){
          //  alert('กรุณาป้อนข้อมูล');
        //  showToastMessage('กรุณาป้อนข้อมูล') 
        toast.error('กรุณาป้อนข้อมูล')
         
      }   else if(editId) {
        //update data
        // console.log('update data');
        const updateTask =  task.map((item)=>{
          if(item.id === editId){
            return {...item,title:title}
          }
          return item;
        })

        console.log(updateTask);
        setTask(updateTask);
        setEditId(null)

      }
      else {
        // เพิ่มรายการใหม่
        const newTask = {
          id:Math.floor(Math.random()*1000),
          title:title
        }   
        setTask([...task,newTask])
        setTitle("")
        toast.success('ป้อนข้อมูลสำเร็จ')
      }
  }

  function editTask(id){
       console.log(id)
      setEditId(id)
     const editTask = task.find((item) =>item.id === id)
     console.log(editTask); 
     setTitle(editTask.title);

  }

  return (
    <div className="App">
     <ToastContainer />
      <Header />
      <div className="container">
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask}  editId={editId}/>
        
          <section>
                {
                  task.map((data)=>(
                     <Item key={data.id}  data={data}  del={deleteTask} editTask={editTask}/>
                  ))
                }
          </section>


      </div>
    </div>
  );
}

export default App;
