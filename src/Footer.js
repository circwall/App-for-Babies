import React from "react";


let date = new Date()
const Footer =()=>{


    return(
        
        <footer className="container mt-5 ">
            <div className=" justify-content-center">
                <div className="">
                    <p> Box Selection App to keep Children busy with 
                        colors and getting used to color spellings <br></br>
                        <span className="text-light bg-dark">{date.getFullYear()}</span>
                    </p>
                </div>
            </div>
        </footer>
    )
};
export default Footer