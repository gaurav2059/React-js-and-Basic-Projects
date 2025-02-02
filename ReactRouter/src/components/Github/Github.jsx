import React from 'react'
import { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData ()
    // const [data, setData] = useState([])
    // useEffect(() => {

    //     fetch("https://api.github.com/users/gaurav2059")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         }
    //         )
    // }, [])

    return (
        <div className='text-center m-4 bg-green-600 text-blue-900 p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/gaurav2059")
   const data = await response.json()
   return data
}
