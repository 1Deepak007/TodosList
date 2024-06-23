import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { TbBackground, TbPencilPlus } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import { FaRegClock } from "react-icons/fa";

export default function ListTodos() {
    const [todos, setTodos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({ id: null, description: "" });
    const [newDescription, setNewDescription] = useState("");
    const [status, setstatus] = useState(null);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const res = await axios.get('http://localhost:7700/todos');
            setTodos(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:7700/todos/${id}`);
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const addTodo = async (e) => {
        e.preventDefault();
        try {
            const body = { description: newDescription };
            await axios.post('http://localhost:7700/todos', body);
            fetchTodos();
            setNewDescription("");
            setShowModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const openUpdateTodoModal = (todo) => {
        setCurrentTodo({
            id: todo.todo_id,
            description: todo.description,
        });
        setNewDescription(todo.description);
        setShowUpdateModal(true);
    };

    const updateTodo = async (e) => {
        e.preventDefault();
        try {
            const body = { description: newDescription };
            await axios.put(`http://localhost:7700/todos/${currentTodo.id}`, body);
            fetchTodos();
            setShowUpdateModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='mx-60'>
            <button
                type='button'
                className='bg-black text-white ps-2 pe-2 pt-1.5 pb-1.5 w-28 rounded-md font-bold hover:bg-green-600'
                onClick={() => setShowModal(true)}
            >
                Add Todo <TbPencilPlus className='inline mb-1' />
            </button>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Update</th>
                            <th scope="col" className="px-6 py-3">Delete</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.todo_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {todo.description}
                                </th>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => openUpdateTodoModal(todo)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        <FaEdit className='size-5' />
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => deleteTodo(todo.todo_id)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        <MdDeleteForever className='size-6' />
                                    </button>
                                </td>
                                <td className='px-6 py-4'>
                                    <button onClick={()=>('')}><FaRegClock /></button>       {/*   status:pending */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add new Todo Modal */}
            {showModal && (
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
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-red-500 text-white ps-2 pe-2 pt-1.5 pb-1.5 w-28 rounded-md font-bold hover:bg-red-600 mr-2"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
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
            )}

            {/* Update Todo Modal */}
            {showUpdateModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-40 overflow-y-auto h-full w-full">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <h1 className="text-lg font-bold mb-4 inline">Update Todo</h1>
                        <form onSubmit={updateTodo} className='mt-5'>
                            <label className='me-3 font-bold'>Update Title</label>
                            <input
                                value={newDescription}
                                onChange={(e) => setNewDescription(e.target.value)}
                                type="text"
                                className="bg-gray-50 border w-full border-gray-300 text-black font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline ps-1 p-1.5 mb-4"
                                placeholder={currentTodo.description}
                                required
                            />
                            <label className="me-3 font-bold">Update Status</label>
                            <select >
                                <optgroup>
                                    <option value="pending">pending</option>
                                    <option value="completed">completed</option>
                                </optgroup>
                            </select>
                            <div className="flex justify-end mt-4">
                                <button
                                    type="button"
                                    className='bg-black text-white me-2 ps-2 pe-2 pt-1.5 pb-1.5 w-28 rounded-md font-bold hover:bg-red-600'
                                    onClick={() => setShowUpdateModal(false)}
                                >
                                    Cancel <ImCancelCircle className='inline mb-1 size-5' />
                                </button>
                                <button
                                    type="submit"
                                    className='bg-black text-white ps-2 pe-2 pt-1.5 pb-1.5 w-28 rounded-md font-bold hover:bg-green-600'
                                >
                                    Update <GrUpdate className='inline mb-1' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
