import React from 'react'

type Props = {}

const Fail = (props: Props) => {
    return (
        <>
            <div className="text-2xl my-60 text-center font-bold"> Oopsie! Wrong Login! <a className="text-[#1257D9]" href="/">Try again</a></div>
        </>
    )
}

export default Fail