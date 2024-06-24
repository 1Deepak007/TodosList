import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { TbPencilPlus } from "react-icons/tb";
import AddTodo from './subcomponents/AddTodo';
import UpdateTodo from './subcomponents/UpdateTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ListTodos() {
    const [todos, setTodos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({ id: null, description: "", status: "pending" });

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const res = await axios.get('http://localhost:7700/todos');
            setTodos(res.data);
            console.log(res.data);
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

    const openUpdateTodoModal = (todo) => {
        setCurrentTodo({
            id: todo.todo_id,
            description: todo.description,
            status: todo.status
        });
        setShowUpdateModal(true);
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
                                    <span className="text-green-600">{todo.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <AddTodo
                    setShowModal={setShowModal}
                    fetchTodos={fetchTodos}
                />
            )}

            {showUpdateModal && (
                <UpdateTodo
                    setShowUpdateModal={setShowUpdateModal}
                    currentTodo={currentTodo}
                    fetchTodos={fetchTodos}
                />
            )}
            <ToastContainer />
        </div>
    );
}
