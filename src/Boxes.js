import {useState, useEffect} from 'react'
import App from './App.css'

const Boxes = ({boxes, handleColorSelectionClick,handleboxClick,selectedColor}) => {
    
    return(
        <main key={"box"}>
            <select key={selectedColor} onChange={handleColorSelectionClick} value={selectedColor}>
                <option key={"Green"} value="Green">Green</option>
                <option key={"Red"} value="Red">Red</option>
                <option key={"Blue"} value="Blue">Blue</option>
                <option key={"Orange"} value="Orange">Orange</option>
                <option key={"Purple"} value="Purple">Purple</option>
            </select>
            {
                boxes.map((box)=>(
                <div key={"container1"}className='container'>
                    <div key={box.id} className='row justify-content-center mt-3 mb-3 '>
                        <div key={'boxthem'}className='col-4 '>
                            <div key={box} onClick={()=>handleboxClick(box)} className=' justify-content-center mt-3' 
                                style={{cursor:"pointer", backgroundColor:`${box.color}`}}>
                                <div key={"blink"}className=" spinner-grow mt-4 text-dark bg-light" 
                                role="status">{box.color}</div> 
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
        </main>
    )

}
export default Boxes

