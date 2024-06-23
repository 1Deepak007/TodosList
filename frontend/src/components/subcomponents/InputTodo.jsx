import React, { useState } from 'react';
import { TbPencilPlus } from "react-icons/tb";

export default function InputTodo() {

    const [ description, setdescription] = useState("");
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            console.log(response)
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <form action="" onSubmit={onSubmitForm}>
                <label className='me-3 font-bold'>Title</label>
                <input value={description} 
                onChange={(e)=>setdescription(e.target.value)} type="text" id="simple-search" 
                className="bg-gray-50 border w-96 border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline ps-1 p-1.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Go for a walk' required />

                <button type='submit' className='bg-black text-white ps-2 pe-2 pt-1.5 pb-1.5 w-28 rounded-md font-bold hover:bg-green-600'>Add Todo <TbPencilPlus className='inline mb-1'/></button>

            </form>
        </>
    );
}