import React, { useEffect, useState } from 'react'
import GameItem from '../gameitem/GameItem'
import fetchGames from '../../utils/fetchGames'
import './gameList.css'
import { Link, useParams } from 'react-router-dom'

const GameList = () => {
    const [games, setGames] = useState(null)

    useEffect(() => {

        async function fetchData() {
            const g = await fetchGames()
            setGames(g)
            console.log('games:', g)
        }

        fetchData()
    }, [])

    let { id } = useParams()

    return (
        <div>
            {games && games.map((game) => {
                return (
                    <Link key={game.id} to={`/game/team1=${game.teams[0]}&team2=${game.teams[1]}`}>
                        <GameItem data={game} id={id} />
                    </Link>
                )
            })}
        </div>

    )
}

export default GameList
