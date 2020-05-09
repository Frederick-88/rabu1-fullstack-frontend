import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function FetchData() {
    const [data, setData] = useState([])

    
    

    useEffect(()=>{
        axios.get('http://localhost:8000/heroes/get')
        .then(response=>{
            console.log(response.data.data);
            
            // setData({data: response.data})

            
            setData(response.data.data)
        })
    },[])


        return (
            <div>
                <h1>DATA PAHLAWAN NASIONAL</h1>
               {
                data.map(item =>
                    <ul>
                        <h2> Pahlawan </h2>
                <li>{item.name}</li>
                <li>{item.born}</li>
                <li>{item.dead}</li>
                <li>{item.description}</li>
                <li>{item.establishment}</li>
                </ul>
                )
               }
            </div>
        )
        }
