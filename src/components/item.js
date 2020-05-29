import React from 'react'

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.item.likes,
      value: props.item.value
    };
    
  } 
  toggleLike = (e) => {
    console.log(this.state.likes)
    this.setState((state) => {
      return{likes: Number(state.likes) + 1}
    });
  }
  deleteTask = (e) => {
    e.preventDefault();
    console.log('The button was clicked.');
  }
  upVote(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }
  downVote(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }
  render() {
    return (
    <div className="card">
      <div className="card-content">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="">{this.state.value}</p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item buttons">
              <button className="button" onClick={this.toggleLike}>{this.state.likes} Heart</button>
              <button className="button" onClick={this.deleteTask}>Delete</button>
              <button className="button" onClick={this.upVote}>Upvote</button>
              <button className="button" onClick={this.downVote}>Downvote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

function button (props) {
  var button = document.createElement('button')
  button.onClick = props.onClick
  return button
}