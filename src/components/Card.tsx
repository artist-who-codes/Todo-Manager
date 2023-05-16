import React, { useState, useEffect } from 'react'
import { todotype } from '@/types/todotype'
import { useRouter } from 'next/router'
import Error from '@/components/Error'

type Props = { todo: todotype }

const Card = ({ todo }: Props) => {
    const [todos, setTodos] = useState<todotype[]>([])
    const router = useRouter()
    const name = router.query.username as string

    async function getTodos(user: string) {
        try {
            const response = await fetch(`/api/${user}`, { method: 'GET' })
            const data: todotype[] = await response.json()
            setTodos(data)
        }
        catch (TypeError) {
            return (<Error />)
        }
    }

    useEffect(() => {
        getTodos(name);
    }, [todos]);


    async function deleteTask(id: number) {
        const response = await fetch(`/api/${todo.user}/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' }
        });

        console.log(id);
        const data = await response.json();
        getTodos(name);

    }


    const [check, setcheck] = useState(todo.completed)
    useEffect(() => {
        setcheck(todo.completed);
    }, [todo.id]);
    return (
        <>
            <div className={`max-sm:my-4 shadow-lg mx-3 p-5 rounded-xl hover:bg-white transition-all duration-700 ease-in-out ${check ? 'bg-[#C9C9C9]' : 'bg-[#BDD2FA]'}`}>
                <div>
                    <label className="max-sm:text-lg max-sm:font-medium text-lg font-bold ">
                        <span className="checkmark"></span>
                        <input type="checkbox" className="max-sm:w-4 max-sm:h-4 form-checkbox m-2 w-4 h-4"
                            checked={check}
                            onChange={() => setcheck(!check)} />
                        {todo.task}
                    </label>
                </div>
                <button className="bg-[#2161AB] px-3 py-1 mt-3 ml-2 font-md max-sm:font-medium max-sm:text-md max-sm:p-2.5 max-sm:mt-5 rounded-lg text-white" onClick={() => deleteTask(todo.id)}>Delete this Task</button>
            </div >
        </>
    )
}

export default Card