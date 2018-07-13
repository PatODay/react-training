import React, {Component} from 'react';

class Author extends Component {
  render () {
    return (
      <div>
      <h2>Written by: </h2>
        <p>{this.props.author}</p>
      </div>
    )
  }
}

export default Author
