import React from "react"

import Card from "./Card"
import vacationSpots from "./vacations"
// import vacations from "./vacations"

function App() {
    const trips = vacationSpots.map(vacations => <Card key ={vacations.id}place={vacations.place} price = {vacations.price} timeToGo={vacations.timeToGo}/>)

    return (
        <div>
            {trips}
        </div>
    )
}

export default App
