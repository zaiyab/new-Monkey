import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import load from "./load.gif";
import InfiniteScroll from "react-infinite-scroll-component";


// document.title = `${capitalizeFirstLetter(
//   props.cat
// )} - NewsMonkey`; 
const News =(props)=> {
  
   const [articles,setArticles] = useState([])
   const [loading,setLoading] = useState(false)
   const [page,setPage]= useState(1)
   const [rescount,setRescount]= useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
 

 const updateNews = async()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=${props.apiKey}&&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true)
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(45);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setRescount(parsedData.setRescount)
    setLoading(false)
  
    props.setProgress(100);
  }

useEffect(()=>{
 
  updateNews();
//eslint-disable-next-line
},[])
 
  const imageHandle = (url) => {
    if (loading) {
      return load;
    } else if (url) {
      return url;
    } else {
      return "https://placehold.co/600x400";
    }
  };

  const fetchMoreData = async () => {
 
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=${props.apiKey}&&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page + 1 );
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
   
   
  };

    return (
      <>
        {/* {this.state.loading && <Spinner />} */}
        <div className="container my-3 py-3">
          <h1 className="text-center" style={{marginTop:"80px"}}>
            Top headlines - {capitalizeFirstLetter(props.cat)}
          </h1>
         
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !==rescount}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row my-3">
                {articles.map((elements) => {
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
                        urlimg={imageHandle(elements.urlToImage)}
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
