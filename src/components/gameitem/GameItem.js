import React from 'react'
import './gameItem.css'
import { Card, Grid } from '@mui/material'

const GameItem = ({ data }) => {
    const currentDate = new Date(data.commence_time * 1000)

    return (
        <Card style={{ height: "95%" }}>
            <Grid container className="gameItemContainer">
                <Grid item className="team1" xs={3}>{data.teams[0]} </Grid>
                <Grid item xs={6} className="summary">
                    {currentDate.toLocaleString()}
                </Grid>
                <Grid item className="team2" xs={3}>{data.teams[1]}</Grid>
            </Grid>
        </Card>


    )
}

export default GameItem
