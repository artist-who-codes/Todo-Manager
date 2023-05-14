import type { NextApiRequest, NextApiResponse } from 'next'
import Todos from '@/data/Todos'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = parseInt(req.query.id as string, 10)
    const todo = Todos.find((todo) => todo.id === id)
    if (todo != undefined) {
        const index = Todos.indexOf(todo)
        console.log(index)
        Todos.splice(index, 1)
        res.status(200).json(Todos)
    }
    else { }
}