import axios from 'axios'
import redditIds from './redditIds'

const fetchGames = () => {
    return axios({
        method: "GET",
        url: "https://odds.p.rapidapi.com/v1/odds?sport=americanfootball_nfl&region=us&mkt=totals",
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_NFL_API_KEY,
            'x-rapidapi-host': 'odds.p.rapidapi.com'
        }

    }).then(games => {
        const { data } = games.data;

        let gameValues = Object.values(data);
        gameValues.forEach(game => {
            game["reddit"] = []
            let teamValues = Object.values(game.teams)
            teamValues.forEach(team => {
                game["reddit"].push(redditIds[team])
            })
        })
        console.log('gameKeys:', gameValues)
        console.log("%cdata:", 'color: green', typeof data)
        return data;
    }).catch(error => {
        console.log(error)
    })

}

export default fetchGames
