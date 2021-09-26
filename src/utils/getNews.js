import axios from 'axios'

const getNews = async (team1slug, team2slug) => {
    //const proxyUrl = "https://cors-anywhere.herokuapp.com/"

    const team1 = await axios({
        method: "GET",
        url: `https://site.api.espn.com/apis/site/v2/sports/football/nfl/news?limit=50&page=1`,

    })
        .then((res) => {
            console.log('res:', res)
        })
        .catch(error => {
            console.log(error)
        })
    const team2 = await axios({
        method: "GET",
        url: `https://site.api.espn.com/apis/site/v2/sports/football/nfl/news?limit=50&page=1`,

    }).catch(error => {
        console.log(error)
    })

    const teams = [team1, team2]

    return teams
}

export default getNews;