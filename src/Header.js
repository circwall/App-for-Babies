import App from "./App.css";

const Header =({selectedColor, boxCount,boxes})=>{
    let tempGee= boxes.map((box)=>box)
    
    return(
        <header className="pt-4 container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8 justify-content-center">
                    <h1 className="text-white">Box Selection App </h1>
                    <h4 className="text-center ">
                    There are <span  style={{backgroundColor:`${selectedColor}`}} className=" three">{boxCount}</span> boxes with {selectedColor} color</h4>
                </div>
            </div>                          
        </header>
    )
} 
export default Header