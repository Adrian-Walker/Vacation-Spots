import React from "react"
import vacationSpots from "./vacations"

function Card(props) {
    return (
        <div>
            <h2>Vacation City: {vacationSpots.place}</h2>
            <h2>Price: {vacationSpots.price}</h2>
            <h2>Best Time To Go: {vacationSpots.timeToGo}</h2>
            <hr></hr>
        </div>
    )
}
export default Card
