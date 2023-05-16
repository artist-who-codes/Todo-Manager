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
      <div className='md:flex'>
        <div className='text-black m-20 sm:my-40 sm:ml-52 sm:mr-12'>
          <p className='font-bold text-2xl sm:text-2xl p-3'>Log In to Access Your List of To Dos</p>
          <div className='sm:p-5 max-sm:grid max-sm:justify-center max-sm:m-10'>
            <input type='text' className="bg-[#D5E2FC] text-xl p-3 rounded-xl sm:my-2 sm:p-3 sm:text-lg sm:rounded-lg" placeholder='Username' onChange={(e) => { setUsername(e.target.value) }}></input><br></br>
            <input type='password' className="bg-[#D5E2FC] text-xl p-3 rounded-xl sm:my-2 sm:p-3 sm:text-lg sm:rounded-lg" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }}></input><br></br>
            <button className="font-medium bg-[#1257D9] text-white max-sm:rounded-2xl max-sm:p-2 max-sm:text-xl max-sm:w-24 max-sm:mx-20 sm:rounded-xl sm:my-5 sm:px-4 sm:py-2" onClick={() => { Login(username, password) }}>Log In</button>
          </div>
          <p className='p-3 max-sm:text-center max-sm:text-xl'>Dont know the Password?<a href="/UserPasswords" className='text-[#1257D9]'> Click here</a></p>
        </div>
        <Image alt="vector" className='hidden md:block md:w-[40rem]' src={vector}></Image>
      </div >
    </>
  )
}

export default Login