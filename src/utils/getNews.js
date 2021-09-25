import axios from 'axios'

const getNews = async (team1slug, team2slug) => {

    const team1 = await axios({
        method: "GET",
        url: `https://newsapi.org/v2/everything?qInTitle=${team1slug}&sortBy=publishedAt&language=en&apiKey=996c88849dd842329db86d0373ab01e4`
    })
    const team2 = await axios({
        method: "GET",
        url: `https://newsapi.org/v2/everything?qInTitle=${team2slug}&sortBy=publishedAt&language=en&apiKey=996c88849dd842329db86d0373ab01e4`
    })

    const teams = [team1, team2]

    return teams
}

export default getNews;