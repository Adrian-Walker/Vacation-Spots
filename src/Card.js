import React from "react"
import vacationSpots from "./vacations"

function Card(props) {
    return (
        <div>
            <h2>Vacation City: {props.place}</h2>
            <h2>Price: {props.price}</h2>
            <h2>Best Time To Go: {props.timeToGo}</h2>
            <hr />
        </div>
    )
}
export default Card
