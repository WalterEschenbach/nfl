import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getNews from '../../utils/getNews'
import getProjection from '../../utils/getProjection'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



// const Game = () => {
//     const [teamNews, setTeamNews] = useState(null)
//     const [teamProjection, setTeamProjection] = useState(null)

//     let { id } = useParams()
//     let team1 = id.split("&")[0].split("=")[1]
//     let team2 = id.split("&")[1].split("=")[1]

//     useEffect(() => {
//         async function getData() {
//             const news = await getNews(team1, team2)
//             const projection = await getProjection(team1, team2)
//             setTeamNews(news)
//             setTeamProjection(projection)
//         }
//         getData()
//     }, [team1, team2])


//     console.log("teamNews", teamNews)
//     console.log("teamProjection", teamProjection)
//     console.log('id:', id)

//     let renderGame = teamProjection && (
//         <div style={{ display: "flex", flexDirection: "column" }}>
//             <div style={{ height: "50vh", display: 'flex' }}>
//                 <div style={{ width: "4rem", height: "100%", textAlign: "center" }}> <h1 style={{ writingMode: " vertical-rl", textOrientation: "upright" }}>{team1.split(" ").pop()}</h1></div>
//                 <div style={{ overflowY: "scroll" }}>
//                     <ul>
//                         <li><h3>Chance to Win Division:</h3>{teamProjection[0]?.chanceToWinDivision}</li>
//                         <li>{teamProjection[0]?.projectedWins}</li>
//                         <li>{teamProjection[0]?.projectedLosses}</li>
//                     </ul>
//                 </div>
//             </div>
//             <div style={{ height: "50vh", display: 'flex' }}>
//                 <div style={{ width: "4rem", height: "100%" }}> <h1 style={{ writingMode: " vertical-rl", textOrientation: "upright" }}>{team2.split(" ").pop()}</h1></div>
//                 <div style={{ overflowY: "scroll" }}>
//                     {/* {teamNews && teamNews[1]?.data.articles.map(article => {
//                         return <ArticleItem key={article.content} title={article.title} url={article.url} img_url={article.urlToImage} />
//                     })} */}
//                 </div>
//             </div>

//         </div>
//     )


//     return (
//         teamProjection ? renderGame : <div>Loading</div>
//     )
// }


export default function Game() {
    const [expanded, setExpanded] = useState({ "panel1": true, "panel2": false });
    const [teamNews, setTeamNews] = useState(null)
    const [teamProjection, setTeamProjection] = useState(null)

    let { id } = useParams()
    let team1 = id.split("&")[0].split("=")[1]
    let team2 = id.split("&")[1].split("=")[1]

    useEffect(() => {
        async function getData() {
            const news = await getNews(team1, team2)
            const projection = await getProjection(team1, team2)
            setTeamNews(news)
            setTeamProjection(projection)
        }
        getData()
    }, [team1, team2])


    console.log("teamNews", teamNews)
    console.log("teamProjection", teamProjection)
    console.log('id:', id)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return teamProjection && (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>
                        {team1.split(" ").pop()}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <h3>Chance to Win Division:</h3>
                        <h5>{teamProjection[0]?.chanceToWinDivision}</h5>
                        <h5>{teamProjection[0]?.projectedWins}</h5>
                        <h5>{teamProjection[0]?.projectedLosses}</h5>
                    </div>


                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>{team2.split(" ").pop()}</Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <h3>Chance to Win Division:</h3>
                        <h5>{teamProjection[1]?.chanceToWinDivision}</h5>
                        <h5>{teamProjection[1]?.projectedWins}</h5>
                        <h5>{teamProjection[1]?.projectedLosses}</h5>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}