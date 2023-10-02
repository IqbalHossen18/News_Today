import React  from 'react'
const Newsitem =(props)=>{
    let {title, description, imgurl,newsurl,author,date,source,mode,textclr,} =props;
    const itemclr1 = '#EAFAF1'
    const itemclr2 = '#283747'
    return (
      <>
      <div id="card" style={{backgroundColor:mode === 'light' ? itemclr1:itemclr2}} className={`card text-${textclr}`}>
          <span style={{right:'0%',zIndex:'1'}} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">{source}</span>
                    <img style={{height:'250px'}} src={!imgurl?'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg':imgurl} className="card-img-top" alt="..."/>
                    {/* <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p style={{fontWeight:'bold'}} className="card-text"><small className="text-muted">Author: {!author?"Unknown":author} , Time: {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl}  target="_blank" rel="noopener noreferrer" className="btn btn-info d-flex align-self-end">Read More</a>
                    </div> */}
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', height: '280px' }}>
                      <h5 className="card-title">{title}...</h5>
                      <p className="card-text">{description}...</p>
                      <p style={{ fontWeight: 'bold'}} className="card-text">
                        <small className="text-muted text-light">Author: {!author ? "Unknown" : author}, Time: {new Date(date).toGMTString()}</small>
                      </p>
                      <div style={{ flex: '1' }}></div>
                      <a style={textclr === 'black'?{backgroundColor:'#34495E',color:'white', fontWeight:'bold'}:{backgroundColor:'#CACFD2',fontWeight:'bold'}} href={newsurl} target="_blank" rel="noopener noreferrer" className={`btn`}>Read More</a>
                    </div>
          </div>
      </>
    )
}

export default Newsitem 