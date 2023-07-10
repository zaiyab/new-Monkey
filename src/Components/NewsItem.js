import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {urlimg,title,desc,newsurl,originallength,date} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
            <img src={urlimg} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}{originallength.length>45?'....':''}</h5>
              <p className="card-text">{desc}....</p>
              <p><strong>Publish Date: </strong>{date}</p>
              <a href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
         </div>
</div>
      
      </div>
    )
  }
}

export default NewsItem
