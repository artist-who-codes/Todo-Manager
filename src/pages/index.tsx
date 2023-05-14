import React from 'react'
import Users from '@/data/users'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Image from 'next/image'
import vector from "../../public/vector-1.svg"
type Props = {}

const Login = (props: Props) => {
  //state variables for signing in
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()


  //creating a function for Logging in
  function Login(username: string, password: string) {
    const names = Users.map((user) => {
      return user.user
    })
    if (names.includes(username)) {
      const index = Users.findIndex((User) => User.user === username)
      const user = Users[index]

      if ((username === user.user) && (password === user.password)) {
        router.push(`/${username}`)
      }
      else {
        router.push('/Fail')
      }
    }
    else {
      router.push('/Fail')
    }

  }
  return (
    <>
      <Header />
      <div className='flex '>
        <div className='text-black my-40 ml-52 mr-12'>
          <p className='font-bold text-2xl p-3'>Log In to Access Your List of To Dos</p>
          <div className='p-5'>
            <input type='text' className="bg-[#D5E2FC] my-2 p-3 text-lg rounded-lg" placeholder='Username' onChange={(e) => { setUsername(e.target.value) }}></input><br></br>
            <input type='text' className="bg-[#D5E2FC] my-2 p-3 text-lg rounded-lg" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }}></input><br></br>
            <button className=" font-medium my-5 bg-[#1257D9] rounded-xl text-white px-4 py-2" onClick={() => { Login(username, password) }}>Log In</button>
          </div>
          <p className='p-3'>Dont know the Password?<a className='text-[#1257D9]'> Click here</a></p>
        </div>
        <Image alt="vector" className='w-[40rem]' src={vector}></Image>
      </div >
    </>
  )
}

export default Login