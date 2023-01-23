import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
    <Main/>
    <Row rowId="1" key="1" title="Trending" fetchUrl={requests.requestTrending}/>
    <Row rowId="2" key="2" title="Upcoming" fetchUrl={requests.requestUpcoming}/>
    <Row rowId="3" key="3" title="Horror" fetchUrl={requests.requestHorror}/>
    <Row rowId="4" key="4" title="Popular" fetchUrl={requests.requestPopular}/>
    <Row rowId="5" key="5" title="Top Rated" fetchUrl={requests.requestTopRated}/>
    </>
  )
}

export default Home