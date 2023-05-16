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
            <div className='m-20 sm:my-10 sm:mx-28 transition-all duration-700 ease-in-out'>
                <div className='flex text-3xl font-bold'>Hello&nbsp;<p className="text-[#2161AB]">{name}</p>!</div>
                <div className="mt-14 mb-5 text-2xl sm:text-2xl font-bold"> Here is your List!</div>
                <div className=''>
                    <div className='sm:grid sm:grid-cols-4 sm:gap-3 '>
                        {todos.map((todo) => {
                            return (
                                <div className='FI'><Card todo={todo} /></div>)
                        })}
                    </div>
                </div>
                <center className="mt-24 max-sm:mt-20">
                    <div className="mb-5 max-sm:text-2xl text-2xl font-bold"> Add more Tasks to your List!</div>
                    <input className='shadow-md max-sm:text-lg max-sm:py-6 max-sm:rounded-xl text-lg h-10 rounded-lg px-4 py-6 bg-[#BDD2FA] mt-5' type="text" placeholder='Enter your Task here' value={Task} onChange={(e) => { setTask(e.target.value) }}></input><br></br>
                    <button className="bg-[#2161AB] px-3 py-1 mt-3 ml-2 font-md max-sm:font-medium max-sm:text-lg max-sm:py-2 max-sm:mt-5 rounded-lg text-white" onClick={() => { addTask(Task) }}>Add to Todos</button>
                </center>
            </div>
        </>
    )
}

export default Todos