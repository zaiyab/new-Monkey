import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  render() {
 
     let  img="https://content.api.news/v3/images/bin/7b6356501373db5a91b909f77299361a"
     let title='Image'
     let desc= "News"
    return (
      
     <div>
           <div className='container my-3 py-3'>
                <h1>NewsMonkey - top headlines</h1>
                     <div className='row my-3'>
                            <div className='col-md-4'>
                            <NewsItem title={title} img = {img} desc = {desc}/>
                            </div>
                            <div className='col-md-4'>
                            <NewsItem title={title} img = {img} desc = {desc}/>
                            </div>
                            <div className='col-md-4'>
                            <NewsItem title={title} img = {img} desc = {desc}/>
                            </div>
                   </div>
             </div>
      </div>
    )
  }
}

export default News

