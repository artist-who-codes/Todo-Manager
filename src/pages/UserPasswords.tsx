import React from 'react'
import Users from '@/data/users'

type Props = {}

const UserPasswords = (props: Props) => {
    return (
        <>
            <div className='max-sm:mt-60 m-28'>
                {Users.map((user) => {
                    return (
                        <center className='p-5 text-2xl font-bold'>
                            <p>Username: <a className='text-[#2161AB]'>{user.user}</a></p>
                            <p>Password: <a className='text-[#2161AB]'>{user.password}</a></p>
                        </center>
                    )
                })}
            </div>
        </>)

}
export default UserPasswords