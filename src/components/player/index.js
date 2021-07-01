import { useState, useContext, createContext } from 'react'
import YouTube from 'react-youtube';
import ReactDom from 'react-dom'
import { Container, Button, Overlay, Inner, Close } from './styles/player'
import { FeatureContext } from '../card';
import movieTrailer from "movie-trailer";

export const PlayerContext = createContext()

export default function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false)
    const [trailerUrl, setTrailerUrl] = useState("");

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer, trailerUrl, setTrailerUrl }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ ...restProps }) {
    const { showPlayer, setShowPlayer, trailerUrl, setTrailerUrl } = useContext(PlayerContext)
    const { itemFeature } = useContext(FeatureContext)
    movieTrailer(itemFeature.title || itemFeature.name || "")
        .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    return showPlayer ? ReactDom.createPortal(
        <Overlay {...restProps} onClick={() => setShowPlayer(false)} data-testid="player">
            <Inner>
                {/* <video id="netflix-player" controls>
                    <source src={src} type="video/mp4" />
                </video> */}
                <YouTube videoId={trailerUrl} opts={opts} />
                <Close />
            </Inner>
        </Overlay>, document.body
    ) : null
}

Player.Button = function PlayButton({ ...restProps }) {
    const { setShowPlayer } = useContext(PlayerContext)

    return <Button {...restProps} onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
        Play
    </Button>
}

