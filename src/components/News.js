import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  static defaultProps ={
    country:'in',
    pageSize: 9,
    category:'general'
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalResults:0,
      // stopAutoScroll:false
    };
  }

  // async updatenews (){
  //   const url =
  //     `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9003606ee75c4d059a46ff5ae4e7de89&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let persedata = await data.json();
  //   // console.log(persedata);
  //   this.setState({
  //     articles: persedata.articles,
  //     totalResults: persedata.totalResults,
  //     loading:false
  //   });
  // }
 
  async componentDidMount() {
    this.props.setprogress(10)
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    this.props.setprogress(40)
    let data = await fetch(url);
    let persedata = await data.json();
    this.props.setprogress(70)
    // console.log(persedata);
    this.setState({
      articles: persedata.articles,
      totalResults: persedata.totalResults,
      loading:false
    });
    
    // this.updatenews()
    document.title=`News_Today-${this.capital(this.props.category)}`
    this.props.setprogress(100)
  }
  capital = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  fetchMoreData =async()=>{
    this.setState({page:this.state.page +1})
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let persedata = await data.json();
  // console.log(persedata);
  this.setState({
    articles: this.state.articles.concat(persedata.articles),
    totalResults: persedata.totalResults,
    // loading:false
  })
  // if (this.state.totalResults === this.state.pageSize) {
  //   this.setState({ stopAutoScroll: false });
  // }
}

  // handlepreviousbtn = async()=>{
  //   let url =
  //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9003606ee75c4d059a46ff5ae4e7de89&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  // this.setState({loading:true})
  // let data = await fetch(url);
  // let persedata = await data.json();
  // console.log(persedata);
  // this.setState({
  //   page:this.state.page -1,
  //   articles: persedata.articles,
  //   loading:false
  // });
  // // this.setState({page:this.state.page - 1})
  // // this.updatenews()
  // }

//  handlenextbtn = async()=>{
//   // console.log('next')
//   if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
   
//   }
//   else{
//     let url =
//     `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9003606ee75c4d059a46ff5ae4e7de89&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//   this.setState({loading:true})
//   let data = await fetch(url);
//   let persedata = await data.json();
//   // console.log(persedata);
//   this.setState({
//     page:this.state.page + 1,
//     articles: persedata.articles,
//     loading:false
//   });
//   }
  // this.setState({page:this.state.page + 1})
  // this.updatenews()
// }

  render() {
    let {textclr, mode} =this.props
    return (
      <>
        
          <h1 className={`text-center d-flex justify-content-center`} style={{ margin: "35px 0px",fontWeight:'bold', textDecoration:'underline' }}>
            News_Today--Top {this.capital(this.props.category)} HeadLines
          </h1>
          {/* {this.state.loading && <Spinner/>} */}
          <InfiniteScroll
          style={{height:'none',overflow:'hidden'}}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          // hasMore={!this.state.stopAutoScroll}
          loader={ <Spinner/>}
        >
             <div className="container">
             <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 85)
                        : ""
                    }
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
               {/* <div className='d-flex justify-content-between my-3'>
                   <button id='pagebtn' type="button"  disabled={this.state.page -1 <= 0}onClick={this.handlepreviousbtn} className={`btn btn-${this.props.mode === 'light' ? 'dark':'light'}`}>Previous &larr;</button>
                   <button id='pagebtn' type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handlenextbtn} className={`btn btn-${this.props.mode === 'light' ? 'dark' : 'light'}`}>&rarr; Next</button>
               </div> */}
      </>
    );
  }
}

