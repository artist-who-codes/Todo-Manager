// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Todos from '@/data/Todos'
import { todotype } from '@/types/todotype'

import { useState } from 'react'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let taskId: number = 9
    if (req.method === 'GET') {
        const user = req.query.username
        const todos: todotype[] = []
        Todos.map((Todo) => {
            if (Todo.user === user) {
                todos.push(Todo)
            }
        })
        res.status(200).json(todos)
    }
    else if (req.method === 'POST') {
        taskId = taskId + 1
        console.log(taskId)
        const User = req.query.username as string
        const Task = req.body.task
        const newtask: todotype = {
            id: taskId,
            user: User,
            task: Task,
            completed: false
        }
        Todos.push(newtask)
        res.status(200).json(Todos)
    }
}