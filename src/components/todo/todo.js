import React, { useState } from 'react'
import "./todo.css"
const Todo = () => {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const [iseditData, setisEditData] = useState(false);
    const [maineclickkiya, setmaineclickkiya] = useState("")
    
  return (
    <>
        <div>
            <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}}/>
            {!iseditData ? 
            <i className="fa-solid fa-plus" onClick={(e) => {setData([...data, value]); setValue("")} }></i> : 
            <i className="fa-solid fa-pen-to-square" 
            onClick={() => {
                setData(data.map((currElem, index) => {
                    if(index === maineclickkiya){
                        return value;
                    }
                    return currElem;
                }))
                setValue("");
                setisEditData(false);

            }}></i>}
        </div>
        <div>
            {data.map((currElem, index) => {
                return (
                    <div key={index}>
                        <span> {currElem} </span>
                        <i className="fa-solid fa-pen-to-square" 
                        onClick={() =>{
                            setValue("");
                            setisEditData(true);
                            setmaineclickkiya(index);
                        }}>
                        </i>
                    </div>
                )
            })}
        </div>
    </>
    
  )
}

export default Todo