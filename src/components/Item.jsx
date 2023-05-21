import React from 'react'
import './css/Item.css'

const Item = (props) => {

   const {data,del,editTask} = props
   const {title,id} = data
  //  console.log(data)

  return (
    <div className='list-item'>
         <p>{ title }</p>
          <div className='button-container'>
             <button className='btn'  onClick={()=>del(id)}>delete</button>
             <button className='btn'  onClick={()=>editTask(id)}>edit</button>

          </div>
    </div>
  )
}

export default Item