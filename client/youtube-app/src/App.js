import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import CategoryId from './components/categories';
import CountriesId from './components/countries'


const API_KEY ='AIzaSyBYbWYL7ULb3BkTP2i6WAUuQW3PuUcYrWQ';



class App extends Component {
  constructor(props) {
    super (props); 

    this.state ={
      videos:[],
      selectedVideo: '',
      categoryId: 0,
      countries:'US',
      categName:'',
      flag:''
    };   

    this.categ = this.categ.bind(this);
    this.countryId = this.countryId.bind(this);
    this.fetchVideos(this.state.countries,this.state.categoryId);
    this.fetchServer();
  }

  categ(categ,categName) {
    this.setState({
      categoryId:categ,
      categName:categName
    })

    this.fetchVideos(this.state.countries,categ);
  } 

  countryId(country,Cflag) {
    this.setState({
      countries:country,
      flag:Cflag
    })
    console.log('countries');
    this.fetchVideos(country, this.state.categoryId);
  }
  fetchServer() {
    console.log('yey');
  }  

  fetchVideos(countries,categoryId) {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=${countries}&videoCategoryId=${categoryId}&key=AIzaSyBYbWYL7ULb3BkTP2i6WAUuQW3PuUcYrWQ`)
    .then(res => res.json())
    .then(data => this.setState({
      videos:data.items,
      selectedVideo:''
    }))
    .then(console.log(this.state.videos))
    .then(fetch('http://localhost:3100/videos1',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        videos:this.state.videos
      })
    })
    )
  }   

  render() {
    return (
      <div>
      <h1>SpyTube</h1>
        <div className="categ-player">
          <div className="video-player">
        <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="categories">
            <CountriesId countrySelect={this.countryId}/>
            <CategoryId categ={this.categ} categName={this.state.categName}/>
          </div>
        </div>
        <VideoList onSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} categories={this.state.categ} categName={this.state.categName}/>
      </div>
    );
  }  
}

export default App;
