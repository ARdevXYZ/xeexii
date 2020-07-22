import React from 'react';

class FetchDataFile extends React.Component {

  state = {
    loading: true,
    contentArray: null
  }

  async componentDidMount() {
    const url = "https://raw.githubusercontent.com/ARdevXYZ/JSONDataTest/master/words.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({contentArray: data.words[0], loading: false});
    console.log(data.words[0]);
  }

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
    return (
      <div>
      {this.state.loading || !this.state.contentArray ? (
        <div>loading ...</div>
      ) : (
        <div className="data-fetch-container">
          <div><span className="word-title-class">{this.state.contentArray.title}</span></div>
          <div><span className="lexical-class">{this.state.contentArray.lexicalCategory}</span></div>
          <div><span className="word-definition-class">{this.state.contentArray[this.state.activeIndex]}</span></div>
        </div>

      )}

      </div>
    );

  }
}

export default FetchDataFile;
