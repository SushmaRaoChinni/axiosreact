import React, { useEffect, useState } from 'react'

import axios from 'axios'

import './App.css'





const Data = () => {

    const [data,setData]=useState([])




    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/todos').then(

            responce=>setData(responce.data)

        )

    })

  return (

    <div className='container'>

    <table>

    <thead>

    <tr>

    <th>UserId</th>

    <th>Id</th>

    <th>Title</th>

    <th>Completed</th>

    </tr>

    </thead>

    <tbody>

    {

        data.map(eachItem=>(

            <tr>

            <td>{eachItem.userId}</td>

            <td>{eachItem.id}</td>

            <td>{eachItem.title}</td>

            <td>{eachItem.completed ? 'true' : 'false'}</td>

            </tr>

        ))

    }

    </tbody>

    </table>

           

    </div>

  )

}




export default Data