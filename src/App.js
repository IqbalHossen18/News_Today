// import React, { Component } from 'react'
// import Navbar from './components/Navbar'
// import News from './components/News'
// import LoadingBar from 'react-top-loading-bar'
// import {
//   Switch,
//   Route,
// } from "react-router-dom";
// import Slideshow from './components/Slideshow';

// export default class App
//  extends Component {
//   constructor(props){
//     super(props);
//     state ={
//       mode:'light',
//       textclr:'black',
//       btntext:'Light Mode',
//       progress:10
//     }
//   }
//   handlemode = () => {
//     setState((prevState) => ({
//       mode: prevState.mode === 'light' ? 'dark' : 'light',
//       textclr: prevState.textclr === 'black' ? 'white' : 'black',
//       btntext: prevState.mode === 'light' ? 'Dark Mode' : 'Light Mode'
//     }));
//   }
//   pagesize = 6;
//   setProgress=(progress)=>{
//     setState({progress:progress})
//   }
//   apiKey = process.env.REACT_APP_NEWS_API
//   // apiKey = "434668bc6df14e8bbc3c5a0ddf61b777"
//   render() {
//     const lightModeColor = '#BFC9CA';
//     const darkModeColor = '#34495E';
//     return (
//         <> <LoadingBar
//           height={3}
//           color='#FBFF00'
//           progress={progress}
//           // onLoaderFinished={() => setProgress(0)}
//            />
//         <Navbar mode={mode} btntext={btntext} textclr={textclr} handlemode={handlemode}/>
//         <div style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>
//         <div className="container">
//         <Slideshow/>
//         </div>
//         <Switch>
//                 <Route exact path="/"><div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='general' pageSize={pagesize} country='in' category='general' /></div></Route>
//                 <Route exact path="/business"><div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='business'  pageSize={pagesize} country='in' category='business' /></div></Route>
//                 <Route exact path="/entertainment"><div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='entertainment'  pageSize={pagesize} country='in' category='entertainment' /></div></Route>
//                 <Route exact path="/health"><div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='health'  pageSize={pagesize} country='in' category='health' /></div></Route>
//                 <Route exact path="/science"><div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='science'  pageSize={pagesize} country='in' category='science' /></div></Route>
//                 <Route exact path="/sports"><div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='sports'  pageSize={pagesize} country='in' category='sports' /></div></Route>
//                 <Route exact path="/technology"><div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='technology'  pageSize={pagesize} country='in' category='technology' /></div></Route>
//                 <Route exact path="/us"><div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='general'  pageSize={pagesize} country='us' category='general' /></div></Route>
//                 <Route exact path="/in"><div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>  <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='in'  pageSize={pagesize} country='in' category='general' /></div></Route>
//                 {/* <Route exact path="/it">  <News apiKey={apiKey} setprogress={setProgress} key='general'  pageSize={pagesize} country='it' category='general' /></Route> */}
//         </Switch>
//         </div>
//       </>
//     )
//   }
// }
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { Switch, Route } from 'react-router-dom';
import Slideshow from './components/Slideshow';

function App() {
  const [mode, setMode] = useState('light');
  const [textclr, setTextClr] = useState('black');
  const [btntext, setBtnText] = useState('Light Mode');
  const [progress, setProgress] = useState(10);

  const pagesize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const lightModeColor = '#BFC9CA';
  const darkModeColor = '#34495E';

  const handlemode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    setTextClr(prevTextClr => (prevTextClr === 'black' ? 'white' : 'black'));
    setBtnText(prevBtnText => (prevBtnText === 'Light Mode' ? 'Dark Mode' : 'Light Mode'));
  };

  return (
    <>
      <LoadingBar height={3} color='#FBFF00' progress={progress} />
      <Navbar mode={mode} btntext={btntext} textclr={textclr} handlemode={handlemode} />
      <div style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>
        <div className="container">
          <Slideshow />
        </div>
        <Switch>
          <Route exact path="/">
            <div className={`text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>
              <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='general' pageSize={pagesize} country='in' category='general' />
            </div>
          </Route>


          <Route exact path="/business">
            <div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}> 
             <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='business'  pageSize={pagesize} country='in' category='business' />
            </div>
          </Route>


          <Route exact path="/entertainment">
            <div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}> 
             <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='entertainment'  pageSize={pagesize} country='in' category='entertainment' />
            </div>
          </Route>


          <Route exact path="/health">
            <div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>
                <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='health'  pageSize={pagesize} country='in' category='health' />
            </div>
          </Route>


          <Route exact path="/science">

            <div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>
                <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='science'  pageSize={pagesize} country='in' category='science' />
            </div>
          </Route>


          <Route exact path="/sports">

            <div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>
                <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='sports'  pageSize={pagesize} country='in' category='sports' />
            </div>
          </Route>


          <Route exact path="/technology">

            <div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>
                <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='technology'  pageSize={pagesize} country='in' category='technology' />
            </div>
          </Route>


          <Route exact path="/us">

            <div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>
                <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='general'  pageSize={pagesize} country='us' category='general' />
            </div>
          </Route>


          <Route exact path="/in">

            <div className={` text-${textclr}`} style={{ backgroundColor: mode === 'light' ? lightModeColor : darkModeColor }}>
                <News apiKey={apiKey} setprogress={setProgress} mode={mode} textclr={textclr} key='in'  pageSize={pagesize} country='in' category='general' />
            </div>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
