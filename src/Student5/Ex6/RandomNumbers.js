import React from 'react'
import {useState} from 'react'

export const RandomNumbers = () => {
let [randomNumber, setRandomNumber] = useState(0)

const generateRandomNumber = () =>{


    setRandomNumber(Math.floor(Math.random() *11))

}



  return (
    <div>
    <div> Random Numbers :{ randomNumber} </div>

<button onClick ={() => generateRandomNumber()}>Generate</button>

    </div>
  )
}
