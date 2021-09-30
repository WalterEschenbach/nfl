import React, { useEffect, useState } from 'react'
import GameItem from '../gameitem/GameItem'
import fetchGames from '../../utils/fetchGames'
import './gameList.css'
import { Link, useParams } from 'react-router-dom'
import { Container, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

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
    let screenSize = useMediaQuery('(max-width:500px)')

    return (
        <Container disableGutters={screenSize} >
            <Grid container
                justify="center"
                rowSpacing={{ xs: 0, md: 1 }}
                columnSpacing={{ xs: 0, md: 0 }}
                style={{ justifyContent: "center" }}>
                {games && games.map((game) => {
                    return (
                        <Grid item sm={12} md={4} className="gameListContainer" key={game.id}>
                            <Link
                                to={`/game/team1=${game.teams[0]}&team2=${game.teams[1]}`}
                                className="gameListLink">
                                <GameItem data={game} id={id} />
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>

    )
}

export default GameList
