import React, { useState,useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import Newsitem from "./Newsitem";

 const News =(props)=> {
const[article, setArticle]=useState([])
const[loading, setLoading]=useState(true)
const[page, setPage]=useState(1)
const[total, setTotal]=useState(0)
 
  const fetchMoreData =async () => {
   setPage(page+1);
  // this.setState({page:this.state.page+1})
  
   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.page_size}`;
  //  this.setState({ loding: true });

   const data = await fetch(url);
  
   const parsedata = await data.json();
setArticle(article.concat(parsedata.articles))
setLoading(false)
setPage(page+1)
setTotal(parsedata.totalResults)
  //  this.setState({ article: this.state.article.concat(parsedata.articles), loding: false,page: this.state.page + 1 ,total : parsedata.totalResults });
  
  };
  
  
  const mount= async()=>{
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.page_size}`;
    props.setProgress(30)
    // this.setState({ loding: true });
    const data = await fetch(url);
    props.setProgress(50)
    const parsedata = await data.json();
    props.setProgress(70)
    setArticle(parsedata.articles)
    setLoading(false)
    setTotal(parsedata.totalResults)
    // this.setState({ article: parsedata.articles, loding: false,total : parsedata.totalResults });
    
    props.setProgress(100)
  }
  useEffect( ()=>{
   mount()
  },[])
  
  // async componentDidMount() {
   
  // }
 

    return (
      <>
     
          {loading && <Loader></Loader>}
          <div width="container ">
          <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== total}
          loader={<Loader/>}
          >
       <div className="container " style={{marginTop:"70px"}}>
            <div className="row ">
            {
              article.map((element) => {
                return (
                  <div
                    className="col-md-4 "
                    key={element.urlToImage}
                  >
                    <Newsitem
                      title={element.title ? element.title.slice(0, 60) : " "}
                      desc={
                        element.description
                          ? element.description.slice(0, 120)
                          : " "
                      }
                      ImageUrl={element.urlToImage ? element.urlToImage : "  "}
                      NewsUrl={element.url ? element.url : " "}
                      time={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
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
    country: "in",
    page_size: 5,
    category: "general"
  };
export default News;