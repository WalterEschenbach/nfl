import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import getRedditRSS from '../../utils/getRedditRSS'
import getNews from '../../utils/getNews'
import ArticleItem from '../articleitem/ArticleItem'


const Game = () => {
    const [teamRSS, setTeamRSS] = useState(null)
    let { id } = useParams()
    let team1 = id.split("&")[0].split("=")[1]
    let team2 = id.split("&")[1].split("=")[1]
    console.log("team1", team1)
    console.log("team2", team2)

    useEffect(() => {
        async function getData() {
            const teams = await getNews(team1, team2)
            setTeamRSS(teams)
        }
        getData()
    }, [team1, team2])


    console.log("teamRSS", teamRSS)
    console.log('id:', id)
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {/* <div style={{ height: "50vh", display: 'flex' }}>
                <div style={{ width: "4rem", height: "100%", textAlign: "center" }}> <h1 style={{ writingMode: " vertical-rl", textOrientation: "upright" }}>{team1.split(" ").pop()}</h1></div>
                <div style={{ overflowY: "scroll" }}>
                    {teamRSS && teamRSS[0]?.data.articles.map(article => {
                        return <ArticleItem key={article.content} title={article.title} url={article.url} img_url={article.urlToImage} />
                    })}
                </div>
            </div>
            <div style={{ height: "50vh", display: 'flex' }}>
                <div style={{ width: "4rem", height: "100%" }}> <h1 style={{ writingMode: " vertical-rl", textOrientation: "upright" }}>{team2.split(" ").pop()}</h1></div>
                <div style={{ overflowY: "scroll" }}>
                    {teamRSS && teamRSS[1]?.data.articles.map(article => {
                        return <ArticleItem key={article.content} title={article.title} url={article.url} img_url={article.urlToImage} />
                    })}
                </div>
            </div> */}

        </div>
    )
}

export default Game
