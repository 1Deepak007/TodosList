import React from 'react'
// import InputTodo from './subcomponents/InputTodo'
import ListTodos from './ListTodos'

export default function Home() {
    
  return (
    <div className='ms-30 me-30'>
        <h2 className='text-center text-3xl font-serif underline my-4'>Todos</h2>
        {/* <InputTodo/> */}
        <ListTodos/>
    </div>
  )
}