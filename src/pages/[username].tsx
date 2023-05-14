import React from 'react'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import Todos from '@/components/Todos'

type Props = { name: string }

const Home = (props: Props) => {
    const router = useRouter()
    const name = router.query.username
    return (
        <>
            <Header />
            <Todos />

        </>
    )
}

export default Home