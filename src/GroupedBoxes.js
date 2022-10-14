import { useState,useEffect } from "react"

const GroupedBoxes = ({boxes, selectedColor})=>{
    const [groupOfBox, setGroupOfBox] = useState(groupedBox())

    function groupedBox(){
        let setOfBox = []

        let greenBox= boxes.filter((box)=> box.color === selectedColor)

        let groupGreenBoxes = {boxColor:"Green", crew:greenBox, collapsed:selectedColor=== 'Green'? false:true}
    }
}

export default GroupedBoxes