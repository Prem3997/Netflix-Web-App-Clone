# Netflix Clone

- **A Netflix Clone App with TMDB movies and series. User can able to view the overview, rating, vote average and category and Trailer of the movies and series*

---

## Quick Links

[Demo](#demo)

- [Live Site Demo](#live-site-demo)
- [Project Screenshots](#project-screenshots)

[Tech Stack](#tech-stack)

[Implementation Hightlights](#Implementation-Highlights)

- [User Stories](#user-stories)

[Getting Started](#getting-started)

- [Prerequisites](#prerequisites)

  - [Tools & Versions](#tools-&-versions)

- [Runing Project](#running-project)

- [Building Application](#building-application)

[Deployment](#deployment)

[Author](#author)


---

## Demo

### Live Site Demo

Demo: [Link](https://netflix-clone-90752.web.app/)

### Project Screenshots

- Home Page

![image](https://user-images.githubusercontent.com/37274588/123246768-c748fe80-d503-11eb-9319-08bbaa160a07.png)

- Jumbotron Component

![image](https://user-images.githubusercontent.com/37274588/123246903-f2335280-d503-11eb-9e3f-e8f03a521805.png)

- Accordion Component

![image](https://user-images.githubusercontent.com/37274588/123246988-05462280-d504-11eb-90bd-2b6b69cbf77b.png)

- Footer Component

![image](https://user-images.githubusercontent.com/37274588/123247049-15f69880-d504-11eb-8ef8-d79a1c3c73a1.png)

- Sign Up Page

![image](https://user-images.githubusercontent.com/37274588/123247176-3cb4cf00-d504-11eb-8ffd-51e92ed61711.png)

- Sign In Page

![image](https://user-images.githubusercontent.com/37274588/123247268-5524e980-d504-11eb-992d-a71dc365ea3b.png)

- Profile Page

![image](https://user-images.githubusercontent.com/37274588/123247343-6e2d9a80-d504-11eb-8aa2-15009bdeca07.png)

- Landing Page

![image](https://user-images.githubusercontent.com/37274588/123247418-843b5b00-d504-11eb-8a54-13bade3f181f.png)

- Collection of Movies and Series

![image](https://user-images.githubusercontent.com/37274588/123247535-a0d79300-d504-11eb-8288-23a016c0780a.png)

- Feature Component (Overview,Vote Average, Rating, Category)

![image](https://user-images.githubusercontent.com/37274588/123247869-ec8a3c80-d504-11eb-8370-dc9bf2dd6b4c.png)

- Trailer Component

![image](https://user-images.githubusercontent.com/37274588/123248009-0f1c5580-d505-11eb-8761-8f4b3e210495.png)


---

## Tech Stack

- [React](https://github.com/facebook/react) 
- [Redux](https://github.com/reduxjs/redux)
  - web client & client data management
- [Node.js](https://github.com/nodejs)
  - Web server & services in service oriented architecure
- [Styled Components](https://github.com/styled-components/styled-components)
  - Visual primitives for the component age.
  - Use the best bits of ES6 and CSS to style your apps without stress 
- [Firebase](https://firebase.google.com/)
  - Firebase helps you build and run successful apps 
- [Axios](https://github.com/axios/axios)
  - Promise based HTTP client for the browser and node.js
- [Fuse.js](https://github.com/krisk/fuse)
  - Fuse.js is a lightweight fuzzy-search, in JavaScript, with zero dependencies. 
- [react-youtube](https://github.com/tjallingt/react-youtube)
  - Simple React component acting as a thin layer over the YouTube IFrame Player API  
- [movie-trailer](https://github.com/lacymorrow/movie-trailer)
  - Fetch Youtube trailers for any movie
  - Return one or many trailer URLs
  - Use anywhere, browser or Node - UMD (Browser Support)
  - Async/await, Promise and Callback APIs
- [tmdb](https://developers.themoviedb.org/3 )
  - A list of Movies and Series Database

---

## Implementation Highlights

- single page application web client with React & Redux & context
- home page with one recommended movie or series on loading is displayed
- service oriented architecure backend
- scrape raw movie data or a series data from tmdb database through api calls
- provides processed tmdb movies data with our movie service API
- persisted search for movie's database for optimized searching capability using fuse.js
- provides youtube trailer link for tmdb movies data with our movie-trailer service API
- firebase for user's database and authentication.

### User Stories

- users can register and log in to their account
- attractive home page where users can able to register themselves for new account
- users can able to sign in and sign out from the application
- landing page has collections of movies and series for recommendations, Trendig Now, Top Rated
- landing page recomends a random movie or series on each reload
- users can search for movies and series through a set of 13 categories each
- users can select and view details of a movie and series such as vote average, ratings, category and a overview.
- users can able to play the selected movie or series trailer when clicked on play button (if availble in movie-trailer db)

## Getting Started

### Prerequisites

**!important** .env file is required for setting up environment variables for this project  
 an example of .env file is located at root directory
**!important** firebase.prod.js is required for setting up firebase environment for authentication, variables for this project  
 an example of firebase.prod.js file is located at src/lib directory
**!important** request api key is required for setting up tmdb database. variables for this project  
 an example of request.js file is located at src/service directory
 

#### Tools & Versions

| Tools             | Versions |
| ------------------| -------- |
| react             | 6.1.0    |
| npm               | 6.1.0    |
| axios             | 0.21.1   |
| firebase          | 8.6.7    |
| fuse.js           | 6.4.6    |
| movie-trailer     | 17.0.2   |
| react-youtube     | 7.13.1   |
| styled-components | 17.0.2   |


### Running Project

- install dependencies

```terminal
npm install
```
- start the project

```terminal
npm start
```
Application will be serving on http://localhost:3000


### Building Application

- Build

```terminal
npm run build
```
Application will be built on build folder
---

## Deployment

- refer firebase docs for deployment

```terminal
firebase login
```
Firebase will ask for your login details

- deploy to firebase

```terminal
firebase deploy
```

---

## Author

- Prem Balaji B

---

## License

- Licencesed under PremBalaji B

---
