import axios from 'axios'

const getNews = async (team1slug, team2slug) => {

    const team1 = await axios({
        method: "GET",
        url: `https://newsapi.org/v2/everything?qInTitle=${team1slug}&sortBy=publishedAt&language=en`,
        headers: {
            "x-api-key": process.env.REACT_APP_NEWS_API_KEY
        }
    }).catch(error => {
        console.log(error)
    })
    const team2 = await axios({
        method: "GET",
        url: `https://newsapi.org/v2/everything?qInTitle=${team2slug}&sortBy=publishedAt&language=en`,
        headers: {
            "x-api-key": process.env.REACT_APP_NEWS_API_KEY
        }
    }).catch(error => {
        console.log(error)
    })

    const teams = [team1, team2]

    return teams
}

export default getNews;