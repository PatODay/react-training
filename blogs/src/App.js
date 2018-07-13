import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <h3>{this.props.author}</h3>
        <p>{this.props.body}</p>
        <h5>Comments</h5>
          <h6>{this.props.comments[1]}</h6>
      </div>
    );
  }
}

export default Post;
