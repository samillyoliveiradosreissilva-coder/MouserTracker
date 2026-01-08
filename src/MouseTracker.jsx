import { useState } from "react"

function MouseTracker({ render }){
    const [coordenada, setCoorddenada] = useState({x: 0, y: 0})
    document.addEventListener("mousemove", (e) => {
    setCoorddenada({
        x: e.clientX,
        y: e.clientY
    })
    })
    return render(coordenada)
}

export default MouseTracker;