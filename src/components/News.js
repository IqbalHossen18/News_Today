import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types';
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const { country, category, pageSize, apiKey, setprogress, mode, textclr } = props;

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capital = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  useEffect(() => {

    const fetchData = async () => {
      setprogress(15)
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

      setLoading(true);


      try {
        const data = await fetch(url);
        setprogress(35)
        const persedata = await data.json();

        setprogress(65)
        setTotalResults(persedata.totalResults);
        setArticles(persedata.articles);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
      document.title = `News_Today-${capital(category)}`;
      setprogress(100)
    };
    
    fetchData();
    
  }, [country, category]);
  // apiKey, pageSize, page,setprogress
  const fetchMoreData = async () => {

    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;
    
    const data = await fetch(url);
    const persedata = await data.json();

    setArticles(articles.concat(persedata.articles));
    setTotalResults(persedata.totalResults);
  };

  return (
    <>
      <h1 className={`text-center d-flex justify-content-center`} style={{ margin: "35px 0px", fontWeight: 'bold', textDecoration: 'underline' }}>
        News_Today--Top {capital(category)} HeadLines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        style={{ height: 'none', overflow: 'hidden' }}
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description.slice(0, 85) : ""}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    textclr={textclr}
                    mode={mode}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
};

export default News;
