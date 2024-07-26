import app from '../firebase'
import { getDatabase, ref, get } from 'firebase/database'
import React, { useState, useEffect } from 'react'

function Update() {

    let [fruitsArray, setFruitsArray] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app)
            const dbRef = ref(db, 'nature/fruits')
            const snapshot = await get(dbRef)
            if (snapshot.exists()) {

                const myData = snapshot.val();
                const temp = Object.keys(myData).map((key) => {
                    return {
                        ...myData[key],
                        Fruitid: key
                    }
                })

                setFruitsArray(temp)
            }
            else {
                alert('No data available')
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Read Data</h1>
            <button
            // onClick={fetchData}
            >
                Read Data
            </button>
            <div className='list'>
                {fruitsArray.map((fruits, index) => {
                    return (
                        <p key={index}>{index + 1}. {fruits.fruitName} - {fruits.fruitColor} : {fruits.Fruitid}</p>
                    )
                })}
            </div>

        </div>
    )
}

export default Update