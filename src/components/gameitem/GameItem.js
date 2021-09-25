import React from 'react'
import './gameItem.css'

const GameItem = ({ data }) => {
    const currentDate = new Date(data.commence_time * 1000)

    return (
        <div className="gameItemContainer">
            <div className="team1">{data.teams[0]}</div>
            <div className="summary">
                <ul>
                    <li></li>
                    <li>{currentDate.toLocaleString()}</li>
                </ul>
            </div>
            <div className="team2">{data.teams[1]}</div>
        </div>
    )
}

export default GameItem
