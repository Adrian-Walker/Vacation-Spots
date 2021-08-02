import React from "react"
import vacationSpots from "./vacations"

function Card(props) {
    return (
        <div className="vacations">
            <h2 className="city">Vacation City: {props.place}</h2>
            <h2 className="price">Price: {props.price}</h2>
            <h2 className="time">Best Time To Go: {props.timeToGo}</h2>
            <hr />
        </div>
    )
}
export default Card
