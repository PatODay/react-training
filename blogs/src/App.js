import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
  render() {
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ]
    // let allAuthors = [
    //   <Author body={this.props.author[0]} />,
    //   <Author body={this.props.author[1]} />,
    //   <Author body={this.props.author[2]} />
    // ]

    // @type {Array}

    let allAuthors = this.props.author.map( (author, index) => (
       <Author author={author} key={index} />
     ))
    return (
      <div class="App">
        <h1>{this.props.title}</h1>
        {allAuthors}
          <div>
            <p>{this.props.body}</p>
          </div>
        <h3>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
