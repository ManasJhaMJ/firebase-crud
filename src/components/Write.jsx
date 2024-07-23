import app from '../firebase'
import { getDatabase, ref, set, push } from 'firebase/database'
import React, { useState } from 'react'

function Write() {

    let [inputValue1, setInputValue1] = useState('')
    let [inputValue2, setInputValue2] = useState('')


    const saveData = async () => {
        const db = getDatabase(app)
        const newDocRef = push(ref(db, 'nature/fruits'))
        set(newDocRef, {
            fruitName: inputValue1,
            fruitColor: inputValue2
        }).then(() => {
            alert('Data saved successfully')
        }).catch((error) => {
            alert("error: ", error.message)

        })
    }

    return (
        <div>
            <h1>Write Data</h1>
            <h2>Fruit Name</h2>
            <input type="text" value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
            />
            <h2>Fruit Color</h2>
            <input type="text" value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
            />
            <br />
            <br />
            <button onClick={saveData}>Save Data</button>
        </div>
    )

}

export default Write