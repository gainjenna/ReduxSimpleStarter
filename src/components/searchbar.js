// //even though we're not using, we need to use it so it can transpile
// import React, {Component} from 'react';
// // const SearchBar = () => {
// //   return <input />
// // };
// //class componenets have interanal record keeping and are aware of how it's changed over time
// //below is a class based componenet using es6 class
// //define a new class called searchbar adn give it all the functionality that react.component has
// class SearchBar extends Component{
// //essentially returning JSX through render method
// //below is syntax for defining methods on a class:
//   constructor(props){
//     super(props);
//
//     this.state = {term: ''};
//   }
//   //okay to reference state, just notdiretcly chnage
//   render() {
//     return (<div className="search-bar">
//       <input
//       value = {this.state.term}
//       onChange={(event) => this.onInputChange(event.target.value)}/>
//
//       </div>);
//   }
// //all browser events are called with an event object, which describes info about the event that occurred
//   // onInputChange(event) {
//   //
//   //
//   // }
//   onInputChange(term){
//     this.setState({term});
//     this.props.onSearchTermChange(term);
//   }
//
// }
//
// //now, any file that imports SearchBar will get the above function
// export default SearchBar;
//
//
//
//
//
// //state is a plain JS object used to record and react to user evebts, each class based component has
// //its own state object, whenever a component state changes, the component rerenders and forces its children to rerender
// //before using state, you need to initialize it by setting it to a plain object inside the class's constructor methos
// //only class based components have state, not functionsl, all class based components have a constructor function that//gets called first every time
// //only change state in constructor function,
// //a controlled component has its value set by state,
