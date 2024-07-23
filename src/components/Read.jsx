import app from '../firebase'
import { getDatabase, ref, get } from 'firebase/database'
import React, { useState } from 'react'

function Read() {

    let [fruitsArray, setFruitsArray] = useState([])

    const fetchData = async () => {
        const db = getDatabase(app)
        const dbRef = ref(db, 'nature/fruits')
        const snapshot = await get(dbRef)
        if (snapshot.exists()) {
            setFruitsArray(Object.values(snapshot.val()))
        }
        else {
            alert('No data available')
        }
    }

    return (
        <div>
            <h1>Read Data</h1>
            <button
                onClick={fetchData}
            >
                Read Data
            </button>
            <div className='list'>
                {fruitsArray.map((fruits, index) => {
                    return (
                        <p key={index}>{index + 1}. {fruits.fruitName} - {fruits.fruitColor}</p>
                    )
                })}
            </div>

        </div>
    )
}

export default Read