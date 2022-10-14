import logo from './logo.svg';
import Nav from './Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Boxes from './Boxes';
import {useEffect,useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import AddNewbox from './AddNewbox'



function App() {

  const [selectedColor,setColor]=useState(JSON.parse(localStorage.getItem('selectedColor'))||"Red");
    
    const [boxes, setBoxes] = useState(JSON.parse(localStorage.getItem('Boxes'))||[
        {id:12, color:'Purple'},
        {id:1, color:'Red'},
        {id:2, color:'Green'},
        {id:3, color:'Blue'},
        {id:4, color:'Red'},
        {id:5, color:'Green'},
        {id:6, color:'Blue'},
        {id:7, color:'Red'},
        {id:8, color:'Green'},
        {id:9, color:'Blue'},
        {id:10, color:'Purple'},
        {id:11, color:'Orange'},
        {id:13, color:'Blue'}
    ])
    function handleColorSelectionClick(e){
        setColor(e.target.value)
    }

    const handleboxClick=(selectedBox)=>{
        var tempBox =boxes;
        var clickedBox = tempBox.find((box)=>box.id===selectedBox.id)
        let boxIndex = tempBox.indexOf(clickedBox)
        tempBox[boxIndex] = { id:selectedBox.id, color: selectedColor } 
        setBoxes([...tempBox])
    }

    useEffect(()=>{
      localStorage.setItem("Boxes", JSON.stringify(boxes))
    })
    useEffect(()=>{
      localStorage.setItem("selectedColor", JSON.stringify(selectedColor))
    })

  return (
    <Router>
      <main className="App ">
        <Nav selectedColor={selectedColor}/>
        <Header boxCount={boxes.filter((box) => 
          box.color === selectedColor).length} boxes={boxes} selectedColor={selectedColor}/>

        <Routes>
          <Route path='/' element={
            <Boxes key={"Boxes"} boxes={boxes} handleColorSelectionClick={handleColorSelectionClick} 
            handleboxClick={handleboxClick} selectedColor={selectedColor}/>
            }>
            
          </Route>
          <Route path='/AddNewbox' element={
            <AddNewbox />
            
          }>
          </Route>
        </Routes>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;
