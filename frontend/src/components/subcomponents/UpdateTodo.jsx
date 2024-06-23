import React, { useEffect, useState } from 'react'

export default function UpdateTodo({id,closeModel}) {
    const[detail,setdetails] = useState({
        description:''
    });

    useEffect(()=>{
        const fetchtask = async() => {
            try {
                const response = await fetch(`http://localhost:5000/api/tasks/${id}`)
                setdetails(response.data)
            } 
            catch (error) {
                console.log('Error fetching task',error)
            }
        }
        fetchtask();
    },[id]);


    

  return (
    <div className="model">
      <div className="model-content">
        <span className='close' onClick={closeModel}>&times;</span>
      </div>
    </div>
  )
}
