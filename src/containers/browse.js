import { SelectProfileContainer } from "./profiles"
import { FooterContainer } from "./footer"
import { FirebaseContext } from '../context/firebase'
import { useContext, useEffect, useState } from "react"
import { Card, Loading, Header, Player } from '../components'
import requests from "../service/requests"
import axios from '../service/axios'
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import * as SOURCE from "../constants/source"
import Fuse from 'fuse.js'

export function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('series')
    const [searchTerm, setSearchTerm] = useState('')
    const [background, setBackGround] = useState([])
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const [slideRows, setSlideRows] = useState([])
    // const [trailerUrl,setTrailerUrl]=useState('')

    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setBackGround(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fuse = new Fuse(slideRows, {
            keys: ['data.description', 'data.title', 'data.genre']
        })

        const results = fuse.search(searchTerm).map(({ item }) => item)

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results)
        }
        else {
            setSlideRows(slides[category])
        }
    }, [searchTerm])

    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
            <Header src={background.backdrop_path !== undefined ? `${SOURCE.BASE_IMG_URL}${background.backdrop_path}` : '/images/misc/home-bg.jpg'} dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                        <Header.TextLink
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >
                            Series
                        </Header.TextLink>
                        <Header.TextLink
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >
                            Movies
                        </Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign Out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Watch {background.title || background.name} Now</Header.FeatureCallOut>
                    <Header.Text>
                        {background.overview}
                    </Header.Text>
                    <Header.ButtonLayout>
                        <Header.Button>Play</Header.Button>
                        <Header.Button>My List</Header.Button>
                    </Header.ButtonLayout>
                </Header.Feature>
            </Header>
            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId || item.id} item={item}>
                                    <Card.Image src={`${SOURCE.BASE_IMG_URL}${item.poster_path}` || `/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title || item.name}</Card.SubTitle>
                                        <Card.Text>{item.description || item.overview}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
            <FooterContainer />
        </>
    ) : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}