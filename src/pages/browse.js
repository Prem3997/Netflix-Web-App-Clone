import { useFetchContent } from "../hooks"
import selectionFilter from "../utils/selection-filter"
import { BrowseContainer } from "../containers/browse"
import requests from "../service/requests"
export default function Browse() {
    // const { series } = useContent('series')
    // const { films } = useContent('films')
    const trending = useFetchContent(requests.fetchTrending)
    const netflixOriginals = useFetchContent(requests.fetchNetflixOriginals)
    const actionAndAdventureSeries = useFetchContent(requests.fetchActionAndAdventureSeries)
    const animationSeries = useFetchContent(requests.fetchAnimationSeries)
    const comedySeries = useFetchContent(requests.fetchComedySeries)
    const crimeSeries = useFetchContent(requests.fetchCrimeSeries)
    const documentarySeries = useFetchContent(requests.fetchDocumentarySeries)
    const dramaSeries = useFetchContent(requests.fetchDramaSeries)
    const familySeries = useFetchContent(requests.fetchFamilySeries)
    const kidsSeries = useFetchContent(requests.fetchKidsSeries)
    const mysterySeries = useFetchContent(requests.fetchMysterySeries)
    const newsSeries = useFetchContent(requests.fetchNewsSeries)
    const realitySeries = useFetchContent(requests.fetchRealitySeries)
    const scifiSeries = useFetchContent(requests.fetchScifiSeries)
    const soapSeries = useFetchContent(requests.fetchSoapSeries)
    const talkSeries = useFetchContent(requests.fetchTalkSeries)
    const warAndPoliticsSeries = useFetchContent(requests.fetchWarAndPoliticsSeries)
    const westernSeries = useFetchContent(requests.fetchWesternSeries)

    const topRatedMovies = useFetchContent(requests.fetchTopRated)
    const actionMovies = useFetchContent(requests.fetchActionMovies)
    const adventureMovies = useFetchContent(requests.fetchAdventureMovies)
    const animationMovies = useFetchContent(requests.fetchAnimationMovies)
    const comedyMovies = useFetchContent(requests.fetchComedyMovies)
    const crimeMovies = useFetchContent(requests.fetchComedyMovies)
    const documentaries = useFetchContent(requests.fetchDocumentaries)
    const dramaMovies = useFetchContent(requests.fetchDramaMovies)
    const familyMovies = useFetchContent(requests.fetchFamilyMovies)
    const fantasyMovies = useFetchContent(requests.fetchFantasyMovies)
    const historyMovies = useFetchContent(requests.fetchHistoryMovies)
    const horrorMovies = useFetchContent(requests.fetchHorrorMovies)
    const musicMovies = useFetchContent(requests.fetchMusicMovies)
    const mysteryMovies = useFetchContent(requests.fetchMysteryMovies)
    const romanceMovies = useFetchContent(requests.fetchRomanceMovies)
    const scifiMovies = useFetchContent(requests.fetchScifiMovies)
    const tvmovieMovies = useFetchContent(requests.fetchTvMovies)
    const thrillerMovies = useFetchContent(requests.fetchThrillerMovies)
    const warMovies = useFetchContent(requests.fetchWarMovies)
    const westernMovies = useFetchContent(requests.fetchWesternMovies)

    const slides = selectionFilter({
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
    })
    return <BrowseContainer slides={slides} />
}