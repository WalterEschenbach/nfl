import axios from 'axios'
import redditIds from './redditIds'

const getProjection = async (team1slug, team2slug) => {
    const team1Id = redditIds[team1slug]
    const team2Id = redditIds[team2slug]
    let team1 = ""
    let team2 = ""

    await axios({
        method: "GET",
        url: `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/${team1Id}/projection`,

    })
        .then((res) => {
            console.log('projectionRes1:', res)
            team1 = res.data;
        })
        .catch(error => {
            console.log(error)
        })

    await axios({
        method: "GET",
        url: `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/${team2Id}/projection`,

    })
        .then((res) => {
            console.log('projectionRes2:', res)
            team2 = res.data
        })
        .catch(error => {
            console.log(error)
        })

    const teams = [team1, team2]

    return teams
}

export default getProjection;