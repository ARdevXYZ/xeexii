import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

let contentArray = [{
  textContent: "Quote One"
},
{textContent: "Quote Two"},
{textContent: "Quote Three"},
{textContent: "Quote Four"}
];

class ContentModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  tick =() => {
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
      <ul className = "list-group">
        <li className = "list-group-item">
          {this.props.contentArray[this.state.activeIndex].textContent}
          <button className = "button-class" onClick={this.tick}>
            Change Content
          </button>
        </li>
      </ul>
    );
  }
}

ReactDOM.render(
  <ContentModule contentArray = {contentArray} />,
  document.getElementById('sectionOne')
);
