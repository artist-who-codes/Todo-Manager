import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <div className="font-extrabold mt-14 text-3xl p-6 text-center text-white bg-[#1257D9] sm:mt-10 sm:p-4 sm:text-4xl "> <p className='mx-14'>Todo Manager</p></div>
        </>
    )
}

export default Header