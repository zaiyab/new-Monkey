import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


export class News extends Component {

  articles = [
    {
      "source": {
        "id": "google-news-au",
        "name": "Google News (Australia)"
      },
      "author": "Code",
      "title": "Ashes cricket 2023: Australia v England live scores, Headingley weather, stream - Code",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMirAFodHRwczovL3d3dy5jb2Rlc3BvcnRzLmNvbS5hdS9jcmlja2V0L2FzaGVzLTIwMjMtZm9sbG93LWFsbC10aGUtYWN0aW9uLWZyb20tZGF5LWZvdXItYXQtaGVhZGluZ2xleS1hcy1hdXN0cmFsaWEtdGFrZXMtb24tZW5nbGFuZC9uZXdzLXN0b3J5L2MxMzhhMzZlODU4ODBlZmUyNTUyYmZmZGJiYzdiNWNj0gEA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-07-09T14:37:30+00:00",
      "content": null
    },
    {
      "source": {
        "id": "news-com-au",
        "name": "News.com.au"
      },
      "author": null,
      "title": "‘Very sad’: Fans fume at Ashes-inspired act",
      "description": "The Jonny Bairstow dismissal is permeating throughout all levels of cricket, and it&rsquo;s just getting silly now.",
      "url": "https://www.news.com.au/sport/cricket/no-place-in-our-game-english-cricket-team-apologises-for-sad-ashesinspired-dismissal/news-story/9fa7048ea275658c0aa22ae9fa141d82",
      "urlToImage": "https://content.api.news/v3/images/bin/7b6356501373db5a91b909f77299361a",
      "publishedAt": "2023-07-09T11:51:00Z",
      "content": "The Jonny Bairstow dismissal is permeating throughout all levels of cricket, and it’s just getting silly now.\r\nAlex Carey’s stumping of Bairstow on the final day of a frenetic second Test at Lord’s h… [+2415 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  static defaultProps = {

    country: "us",
    pageSize: 9,
    cat: "general"
  }


  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      rescount: 0
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=fc4524215a4d46da8f00d7a2bfb3d968&page=1&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true })

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, rescount: parsedData.totalResults, loading: false })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}sy=${this.props.cat}&apiKey=fc4524215a4d46da8f00d7a2bfb3d968&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`
    this.setState({ loading: true })

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({

      articles: parsedData.articles,
      page: this.state.page - 1,
      rescount: parsedData.totalResults
      , loading: false
    })
  }

  handleNextClick = async () => {
    if (Math.ceil(this.state.rescount / this.props.pageSize) <= this.state.page) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=fc4524215a4d46da8f00d7a2bfb3d968&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
      this.setState({ loading: true })
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        rescount: parsedData.totalResults,
        loading: false

      })
    }

  }

  render() {

    return (

      <div>
        {this.state.loading && <Spinner />}
        <div className='container my-3 py-3'>
          <h1 className='text-center'>Top headlines - {this.props.cat}</h1>
          <div className='row my-3'>
            {!this.state.loading && this.state.articles.map((elements) => {
              return <div className='col-md-4' key={elements.url}>
                <NewsItem date={elements.publishedAt ? elements.publishedAt.slice(0, 10) : null} author={elements.author ? elements.author : 'Unknown'} originallength={elements.title} title={elements.title ? elements.title.slice(0, 45) : null} urlimg={elements.urlToImage ? elements.urlToImage : 'https://placehold.co/600x400'} desc={elements.description ? elements.description.slice(0, 88) : null} newsurl={elements.url} />
              </div>
            })}
          </div>
        </div>
        <div className='container my-2 d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark mx-1" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={Math.ceil(this.state.rescount / this.props.pageSize) <= this.state.page} className="btn btn-dark mx-1" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

