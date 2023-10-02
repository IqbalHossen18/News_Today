import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  Switch,
  Route,
} from "react-router-dom";
import Slideshow from './components/Slideshow';

export default class App
 extends Component {
  constructor(props){
    super(props);
    this.state ={
      mode:'light',
      textclr:'black',
      btntext:'Light Mode',
      progress:10
    }
  }
  handlemode = () => {
    this.setState((prevState) => ({
      mode: prevState.mode === 'light' ? 'dark' : 'light',
      textclr: prevState.textclr === 'black' ? 'white' : 'black',
      btntext: prevState.mode === 'light' ? 'Dark Mode' : 'Light Mode'
    }));
  }
  pagesize = 6;
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  apiKey = process.env.REACT_APP_NEWS_API
  // apiKey = "434668bc6df14e8bbc3c5a0ddf61b777"
  render() {
    const lightModeColor = '#BFC9CA';
    const darkModeColor = '#34495E';
    return (
        <> <LoadingBar
          height={3}
          color='#FBFF00'
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
           />
        <Navbar mode={this.state.mode} btntext={this.state.btntext} textclr={this.state.textclr} handlemode={this.handlemode}/>
        <div style={{ backgroundColor: this.state.mode === 'light' ? lightModeColor : darkModeColor }}>
        <div className="container">
        <Slideshow/>
        </div>
        <Switch>
                <Route exact path="/"><div className={` text-${this.state.textclr}`} style={{ backgroundColor: this.state.mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={this.apiKey} setprogress={this.setProgress} mode={this.state.mode} textclr={this.state.textclr} key='general' pageSize={this.pagesize} country='in' category='general' /></div></Route>
                <Route exact path="/business"><div className={` text-${this.state.textclr}`} style={{ backgroundColor: this.state.mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={this.apiKey} setprogress={this.setProgress} mode={this.state.mode} textclr={this.state.textclr} key='business'  pageSize={this.pagesize} country='in' category='business' /></div></Route>
                <Route exact path="/entertainment"><div className={` text-${this.state.textclr}`} style={{ backgroundColor: this.state.mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={this.apiKey} setprogress={this.setProgress} mode={this.state.mode} textclr={this.state.textclr} key='entertainment'  pageSize={this.pagesize} country='in' category='entertainment' /></div></Route>
                <Route exact path="/health"><div className={` text-${this.state.textclr}`} style={{ backgroundColor: this.state.mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={this.apiKey} setprogress={this.setProgress} mode={this.state.mode} textclr={this.state.textclr} key='health'  pageSize={this.pagesize} country='in' category='health' /></div></Route>
                <Route exact path="/science"><div className={` text-${this.state.textclr}`} style={{ backgroundColor: this.state.mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={this.apiKey} setprogress={this.setProgress} mode={this.state.mode} textclr={this.state.textclr} key='science'  pageSize={this.pagesize} country='in' category='science' /></div></Route>
                <Route exact path="/sports"><div className={` text-${this.state.textclr}`} style={{ backgroundColor: this.state.mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={this.apiKey} setprogress={this.setProgress} mode={this.state.mode} textclr={this.state.textclr} key='sports'  pageSize={this.pagesize} country='in' category='sports' /></div></Route>
                <Route exact path="/technology"><div className={` text-${this.state.textclr}`} style={{ backgroundColor: this.state.mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={this.apiKey} setprogress={this.setProgress} mode={this.state.mode} textclr={this.state.textclr} key='technology'  pageSize={this.pagesize} country='in' category='technology' /></div></Route>
                <Route exact path="/us"><div className={` text-${this.state.textclr}`} style={{ backgroundColor: this.state.mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={this.apiKey} setprogress={this.setProgress} mode={this.state.mode} textclr={this.state.textclr} key='general'  pageSize={this.pagesize} country='us' category='general' /></div></Route>
                <Route exact path="/in"><div className={` text-${this.state.textclr}`} style={{ backgroundColor: this.state.mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={this.apiKey} setprogress={this.setProgress} mode={this.state.mode} textclr={this.state.textclr} key='in'  pageSize={this.pagesize} country='in' category='general' /></div></Route>
                {/* <Route exact path="/it">  <News apiKey={this.apiKey} setprogress={this.setProgress} key='general'  pageSize={this.pagesize} country='it' category='general' /></Route> */}
        </Switch>
        </div>
      </>
    )
  }
}
