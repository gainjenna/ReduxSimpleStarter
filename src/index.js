//es6 lets us access JS mdules (all the code we write in files is siloed, and will have zero
//contact with other files unless explicitly stated)
//find libraray react that has been installed in  node_omdules and assign to variable React
import _ from 'lodash';
import React, {Component} from 'react';
//react knows how to interact w components
//working with dom is now reactdom (two separate libraries)
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videolist';
import VideoDetail from './components/videodetail';

const API_KEY =  'AIzaSyAvz_fB33Nruu0iH4pFU9qyvhMrWuDWbHQ';


// Create a new component(view). This component should produce some HTML
//const is es6 syntax: const declares variable as a final value that will never change or be reassigned
//below is a class, not an instance
//the arrow is just a different way of declaring a function; it also means that the value of "this" is slightly different
//inside the function
//below is a functional component
// const App = () =>{
//   //below is JSX: allows us to write what looks like html but is actually just JS when compiled
//   return (<div><SearchBar /></div>);
// }

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]

      });
      //when key and value are same terms, use es6 to just name variable
    });

  }
  render() {

    const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300);

    return(<div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>);
  }
}
// passing data from parent (app) to child (videolist) is called a prop


//Take this component's generated HTML and put it
//on the page (in the DOM)
//below creates an instance of the class App
//second argument is reference to dom node on page, so it knows where to render
ReactDOM.render(<App/>, document.querySelector('.container'));


//you should have a component for each major functiom, always
//only one component per file
//only the most parent component should be responsible for fetching data, index is the most parent component we have
