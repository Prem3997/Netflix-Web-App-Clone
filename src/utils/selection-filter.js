export default function selectionFilter({
    trending,
    netflixOriginals,
    actionAndAdventureSeries,
    animationSeries,
    comedySeries,
    crimeSeries,
    documentarySeries,
    dramaSeries,
    familySeries,
    kidsSeries,
    mysterySeries,
    newsSeries,
    realitySeries,
    scifiSeries,
    soapSeries,
    talkSeries,
    warAndPoliticsSeries,
    westernSeries,
    topRatedMovies,
    actionMovies,
    adventureMovies,
    animationMovies,
    comedyMovies,
    crimeMovies,
    documentaries,
    dramaMovies,
    familyMovies,
    fantasyMovies,
    historyMovies,
    horrorMovies,
    musicMovies,
    mysteryMovies,
    romanceMovies,
    scifiMovies,
    tvmovieMovies,
    thrillerMovies,
    warMovies,
    westernMovies
}) {
    return {
        series: [
            {
                title: 'Trending Now',
                data: trending.slice(1, 10)
            },
            {
                title: 'Netflix Originals',
                data: netflixOriginals.slice(1, 10)
            },
            {
                title: 'Action & Adventure',
                data: actionAndAdventureSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Animation',
                data: animationSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Comedy',
                data: comedySeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Crime',
                data: crimeSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Documentary',
                data: documentarySeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Drama',
                data: dramaSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Family',
                data: familySeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Kids',
                data: kidsSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Mystery',
                data: mysterySeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'News',
                data: newsSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Reality',
                data: realitySeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Science Fiction',
                data: scifiSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Soap',
                data: soapSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Talk',
                data: talkSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'War And Politics',
                data: warAndPoliticsSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Western',
                data: westernSeries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
        ],
        films: [
            {
                title: 'Top Rated',
                data: topRatedMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Action',
                data: actionMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Adventure',
                data: adventureMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Animation',
                data: animationMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Comedy',
                data: comedyMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Crime',
                data: crimeMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Documentaries',
                data: documentaries.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Drama',
                data: dramaMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Family',
                data: familyMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Fantasy',
                data: fantasyMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'History',
                data: historyMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Horror',
                data: horrorMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Music',
                data: musicMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Mystery',
                data: mysteryMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Romance',
                data: romanceMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Science Fiction',
                data: scifiMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'TV Movie',
                data: tvmovieMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Thrilller',
                data: thrillerMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'War',
                data: warMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
            {
                title: 'Western',
                data: westernMovies.sort(() => Math.random() - Math.random()).slice(1, 10)
            },
        ],
    }
}