import React from 'react'

function TodoList(props) {
    console.log(props)
    const {mytodolist}=props;
    console.log(mytodolist)
  return (
    <div>
        {mytodolist.map((item)=>{
            return <p>{item.id}.{item.title}</p>;
        })}
    </div>
  )
}

export default TodoList