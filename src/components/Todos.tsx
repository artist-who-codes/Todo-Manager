import { useRouter } from 'next/router'
import React from 'react'
import Error from '@/components/Error'
import { useState, useEffect } from 'react'
import { todotype } from '@/types/todotype'
import Card from './Card'

type Props = {}

const Todos = (props: Props) => {
    const [Task, setTask] = useState('')
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

    async function addTask(task: string) {
        const response = await fetch(`api/${name}`,
            {
                method: 'POST',
                body: JSON.stringify({ task }),
                headers: { 'Content-Type': 'application/json' }
            })
        const data = await response.json()
        setTodos(data)
        getTodos(name)
    }
    return (
        <>
            <div className='my-10 mx-28'>
                <div className='flex text-4xl font-bold'>Hello &nbsp; <p className="text-[#2161AB]">{name}</p>!</div>
                <div className="mt-14 mb-5 text-2xl font-bold"> Here is your List!</div>
                <div className='grid grid-cols-4 gap-3 '>
                    {todos.map((todo) => {
                        return (<Card todo={todo} />)
                    })}
                </div>
                <center className="mt-24">
                    <div className="mb-5 text-2xl font-bold"> Add more Tasks to your List!</div>
                    <input className='shadow-md text-lg w-80 h-10 rounded-lg px-4 py-6 bg-[#BDD2FA] mt-5' type="text" placeholder='Enter your Task here' value={Task} onChange={(e) => { setTask(e.target.value) }}></input><br></br>
                    <button className="bg-[#2161AB] px-3 py-1 mt-5 ml-2 font-md rounded-lg text-white text-end" onClick={() => { addTask(Task) }}>Add to Todos</button>
                </center>
            </div>
        </>
    )
}

export default Todos