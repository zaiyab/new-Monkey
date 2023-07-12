import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import load from "./load.gif";
import InfiniteScroll from "react-infinite-scroll-component";
import { async } from "q";

// document.title = `${capitalizeFirstLetter(
//   props.cat
// )} - NewsMonkey`; 
const News =(props)=> {
  articles = [];

   const [articles,setArticles] = useState([])
   const [loading,setLoading] = useState(flase)
   const [page,setPage]= useState(1)
   const [rescount,setRescount]= useState(0)

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 const updateNews = async()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=${props.apiKey}&&page=${this.state.page}&pagesize=${props.pageSize}`;
    this.setState({ loading: true });
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(45);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setRescount(parsedData.setRescount)
    setLoading(false)
    this.setState({
      articles: parsedData.articles,
      rescount: parsedData.totalResults,
      loading: false,
    });
    props.setProgress(100);
  }

  const componentDidMount= async()=> {
    this.updateNews();
  }

  imageHandle = (url) => {
    if (this.state.loading) {
      return load;
    } else if (url) {
      return url;
    } else {
      return "https://placehold.co/600x400";
    }
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=${props.apiKey}&&page=${this.state.page}&pagesize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
    });
   
  };

    return (
      <>
        {/* {this.state.loading && <Spinner />} */}
        <div className="container my-3 py-3">
          <h1 className="text-center">
            Top headlines - {capitalizeFirstLetter(props.cat)}
          </h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.rescount}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row my-3">
                {this.state.articles.map((elements) => {
                  return (
                    <div className="col-md-4" key={elements.url}>
                      <NewsItem
                        date={
                          elements.publishedAt
                            ? elements.publishedAt.slice(0, 10)
                            : null
                        }
                        source={elements.source.name}
                        author={elements.author ? elements.author : "Unknown"}
                        originallength={elements.title}
                        title={
                          elements.title ? elements.title.slice(0, 45) : null
                        }
                        urlimg={this.imageHandle(elements.urlToImage)}
                        desc={
                          elements.description
                            ? elements.description.slice(0, 88)
                            : null
                        }
                        newsurl={elements.url}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }



News.defaultProps = {
  country: "us",
  pageSize: 15,
  cat: "general",
};


export default News;

// !this.state.loading &&
