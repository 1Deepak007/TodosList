import React, { useState } from 'react';
import axios from 'axios';
import { TbPencilPlus } from "react-icons/tb";
import { ImCancelCircle } from "react-icons/im";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddTodo({ setShowModal, fetchTodos }) {
    const [newDescription, setNewDescription] = useState("");
    const [status, setStatus] = useState('pending');

    const addTodo = async (e) => {
        e.preventDefault();
        try {
            const newTodo = { description: newDescription, status: status };
            await axios.post('http://localhost:7700/todos', newTodo);
            fetchTodos();
            setNewDescription("");
            setShowModal(false);
            toast.success("Todo added successfully.");
        } catch (error) {
            console.log(error);
            toast.error("Error adding todo.");
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-40 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h1 className="text-lg font-bold mb-4">Add New Todo</h1>
                <form onSubmit={addTodo}>
                    <label className='me-3 font-bold'>Title</label>
                    <input
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        type="text"
                        className="bg-gray-50 border w-full border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline ps-1 p-1.5 mb-4"
                        placeholder='Go for a walk'
                        required
                    />
                    <label className='me-3 font-bold'>Status</label>
                    <select 
                        name="status" 
                        id="status" 
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="bg-gray-50 border w-full border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline ps-1 p-1.5 mb-4"
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-red-500 text-white ps-2 pe-2 pt-1.5 pb-1.5 w-28 rounded-md font-bold hover:bg-red-600 mr-2"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel <ImCancelCircle className='inline mb-1' />
                        </button>
                        <button
                            type="submit"
                            className='bg-black text-white ps-2 pe-2 pt-1.5 pb-1.5 w-28 rounded-md font-bold hover:bg-green-600'
                        >
                            Add Todo <TbPencilPlus className='inline mb-1' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
