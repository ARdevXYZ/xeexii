import React from 'react';
import './App.css';
import Navigation from './Navigation';
import ReactDOM from 'react-dom';
import FetchDataFile from './FetchDataFile';

let contentArray = [{
  slideContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
},
{slideContent: "Pellentesque ligula enim, ultrices ut ligula sed, finibus blandit elit. Nunc id nisi pretium, scelerisque augue eget, laoreet enim."},
{slideContent: "Donec dignissim, arcu sit amet ullamcorper mattis, lacus lacus sagittis elit, vitae vulputate mi ante ut eros."},
{slideContent: "Nullam varius nec mauris ac iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}
];

class ContentModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  changeSlide =() => {
    let activeIndex = this.state.activeIndex;
    if (activeIndex === this.props.contentArray.length -1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    this.setState({
      activeIndex
    });
  }

  render() {
    return(
      <main className="main-container" role="main">
      <Navigation />

       <div className="flex-slider-container">

         <div className="flex-slider-content">
           <span className="quote-span fade-in" id="h1Id">
           {this.props.contentArray[this.state.activeIndex].slideContent}
                 <FetchDataFile />

           </span>
         </div>

       </div>

       <div className="slider-control-container">
         <button className = "button-class" onClick={this.changeSlide}>
           Change Content
         </button>
       </div>
     </main>

    );
  }
}

ReactDOM.render(
  <ContentModule contentArray = {contentArray} />,
  document.getElementById('sectionOne')
);

class App extends React.Component {

  render() {
    return(
        <div id="sectionOne"></div>
    );
  }
}

export default App;
