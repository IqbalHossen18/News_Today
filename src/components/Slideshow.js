import React  from "react";

const Slideshow =()=> {
    return (
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ds-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                id='slideimg'
               src="https://c8.alamy.com/comp/J0J5HH/3d-illustration-of-a-globe-and-the-word-news-over-black-background-J0J5HH.jpg"
 
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{fontWeight:'bold' , color:'color',textShadow:'1px 3px black'}}>News is a part of our Knowladge</h1>
                <p style={{fontWeight:'bold' , color:'color', fontSize:'25px',textShadow:'1px 3px black'}}>
                Stay up-to-date with a broad spectrum of global news and current events.
                </p>
              </div>
            </div>
            <div className="carousel-item" >
              <img 
                id='slideimg'
                src="https://thumbs.dreamstime.com/b/businessman-using-tablet-laptop-analyzing-sales-data-economic-growth-graph-chart-business-strategy-digital-marketing-154742021.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{fontWeight:'bold' , color:'color',textShadow:'1px 3px black'}}>Business</h1>
                <p style={{fontWeight:'bold' , color:'color', fontSize:'25px',textShadow:'1px 3px black'}}>
                Explore the latest business developments and financial insights.
                </p>
              </div>
            </div>
            <div className="carousel-item" >
              <img 
                id='slideimg'
                src="https://media.istockphoto.com/id/1336906460/photo/media-concept-multiple-television-screens.jpg?s=612x612&w=0&k=20&c=UADwGBrVEBLSVirl7wWvliVXjXC_j112Qwerm-cDKyY="
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{fontWeight:'bold' , color:'color',textShadow:'1px 3px black'}}>Entertainment</h1>
                <p style={{fontWeight:'bold' , color:'color', fontSize:'25px',textShadow:'1px 3px black'}}>
                Dive into the world of entertainment with the latest news and trends.
                </p>
              </div>
            </div>
            <div className="carousel-item" >
              <img 
                id='slideimg'
                src="https://media.istockphoto.com/id/91598774/photo/global-healthcare.jpg?s=612x612&w=0&k=20&c=vTBXO2ruqd9IZZ8bIBb2pD2HVGkYENXW7siMORm46us="
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{fontWeight:'bold' , color:'color',textShadow:'1px 3px black'}}>Health</h1>
                <p style={{fontWeight:'bold' , color:'color', fontSize:'25px',textShadow:'1px 3px black'}}>
                Stay healthy and informed with the latest health news and insights.
                </p>
              </div>
            </div>
            <div className="carousel-item" >
              <img 
                id='slideimg'
                src="https://media.istockphoto.com/id/1309776503/photo/female-medical-research-scientist-looks-at-biological-samples-before-analysing-it-under.jpg?s=612x612&w=0&k=20&c=U2weZr2beZqnJIf5DBgoQZG-e8gCEk--OcVDdmF3T7I="
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{fontWeight:'bold' , color:'color',textShadow:'1px 3px black'}}>Science</h1>
                <p style={{fontWeight:'bold' , color:'color', fontSize:'25px',textShadow:'1px 3px black'}}>
                Explore the wonders of science through our latest news and discoveries.
                </p>
              </div>
            </div>
            <div className="carousel-item" >
              <img 
                id='slideimg'
                src="https://www.insidesport.in/wp-content/uploads/2020/04/aaa-1.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{fontWeight:'bold' , color:'color',textShadow:'1px 3px black'}}>Sports</h1>
                <p style={{fontWeight:'bold' , color:'color', fontSize:'25px',textShadow:'1px 3px black'}}>
                Stay in the game with the latest sports news and updates.
                </p>
              </div>
            </div>
            <div className="carousel-item" >
              <img 
                id='slideimg'
                src="https://img95.699pic.com/photo/40046/5212.jpg_wh300.jpg "
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{fontWeight:'bold' , color:'color',textShadow:'1px 3px black'}}>Technology</h1>
                <p style={{fontWeight:'bold' , color:'color', fontSize:'25px',textShadow:'1px 3px black'}}>
                Stay ahead in the tech world with the latest technology news and innovations.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
}

export default Slideshow