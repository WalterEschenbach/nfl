const { parse } = require('rss-to-json');

const getRedditRSS = async (team1slug, team2slug) => {
    const team1 = await parse(`https://www.reddit.com/r/${team1slug}/.rss`);
    const team2 = await parse(`https://www.reddit.com/r/${team2slug}/.rss`);

    const teams = [team1, team2]

    return teams
}

export default getRedditRSS;