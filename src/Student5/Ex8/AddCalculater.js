
import React from 'react'
import { useState } from 'react'

export const AddCalculater = () => {

let [Total,setTotal] =useState(0)

const  onhanleClick =(value) =>{
    setTotal(Total += value)
}


  return (
    <div>

<button onClick ={()=>onhanleClick(1)}>Add1</button>
<button onClick ={()=>onhanleClick(2)}>Add2</button>
<button onClick ={()=>onhanleClick(3)}>Add3</button>
<br/>
Total:{Total}
    </div>
  )
}
