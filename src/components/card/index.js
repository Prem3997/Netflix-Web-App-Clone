import { useState, useContext, createContext } from "react"
import {
    Container, Group, Title, SubTitle, Text, Feature, FeatureTitle, FeatureClose,
    FeatureText, Rating, Content, Meta, Entities, Item, Image, FeatureCategory, Maturity
} from './styles/card'
import * as SOURCE from '../../constants/source'
import { tvGenres, movieGenres } from "../../constants/genre"
import { useFetchRating } from "../../hooks"

export const FeatureContext = createContext()

export default function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>
}

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)
    return <Item
        onClick={
            () => {
                setItemFeature(item)
                setShowFeature(true)
            }
        }
        {...restProps}>{children}</Item>
}

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>
}

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />
}

Card.Feature = function CardFeature({ children, category, ...restProps }) {
    const { showFeature, setShowFeature, itemFeature } = useContext(FeatureContext)
    const is_MediaType_Undedfined = itemFeature.media_type === undefined
    const mediaType=is_MediaType_Undedfined ? category === 'series' ? 'tv' : 'movie' : itemFeature.media_type
    showFeature ? itemFeature.rating = useFetchRating(itemFeature.id, mediaType) : null
    return showFeature ? (
        <Feature {...restProps} src={`${SOURCE.BASE_IMG_URL}${itemFeature.backdrop_path}`}>
            <Content>
                <FeatureTitle>{itemFeature.title || itemFeature.name}</FeatureTitle>
                <FeatureText>{itemFeature.description || itemFeature.overview}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="close" />
                </FeatureClose>
                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Rating vote_average={itemFeature.vote_average}>
                        {itemFeature.vote_average}
                    </Rating>
                    <Maturity rating={itemFeature.rating}>
                        {itemFeature.rating!==undefined? itemFeature.rating : "NR"}
                    </Maturity>
                    {itemFeature.genre_ids.map((id) => (
                        <FeatureCategory key={id} fontWeight="bold">
                            {mediaType === "tv" ?
                                tvGenres.filter((genre) => genre.id === id).map((item) => (
                                    item.name
                                ))
                                : movieGenres.filter((genre) => genre.id === id).map((item) => (
                                    item.name
                                ))}

                        </FeatureCategory>
                    ))}
                </Group>
                {children}
            </Content>
        </Feature>
    ) : null
}