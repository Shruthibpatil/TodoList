//Display

import React from 'react'

const List = ({todo,setTodo,setEditTodo}) => {

    // const handleComplete=(todos)=>{
    //     setTodo(
    //         todo.map((item)=>{
    //             if(item.id===todo.id){
    //                 return{...item,completed:!item.completed}
                    
    //             }
    //             return item;
    //         })
    //     )
            
    //     }


    const handleDelete=({id})=>{
        setTodo(todo.filter((todos)=>todos.id !==id))
    }

    const handleEdit=({id})=>{ 
        const findTodo=todo.find((todos)=>todo.id===id);
        setEditTodo(findTodo)
    };
  return (
    <div>
        {/* display list of object by using map  */}

      {todo.map((todos)=>(
         <li className='list-item' key={todos.id}>
         <input type="text" 
         value={todos.title}
          className={`list ${todos.completed ?"complete" : ""}`}
          onChange={(event)=>event.preventDefault()} />

         <div className='font-awesome'>

            {/* Complteted todo list */}
            {/* <button className='button-complete' onClick={()=>handleComplete(todos)}>
            <i className="fa-regular fa-circle-check"></i>
            </button> */}

            {/* Edit todolist */}
            <button className='button-edit' onClick={() =>handleEdit(todos)}>
                <i class="fa-sharp fa-solid fa-pen-to-square"></i>
            </button>

            {/* delete todolist */}
            <button className='button-delete' onClick={()=>handleDelete(todos)}>
            <i class="fa-sharp fa-solid fa-trash"></i>
            {/* <i class="fa-regular fa-trash"></i> */}
            </button>
         </div>
     </li>
      )
       
      )}
    </div>
  )
}

export default List
