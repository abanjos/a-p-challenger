import React, { Component } from 'react';

class PaginationButton extends Component {
  constructor(props){
    super(props)
  }

  render() {

    return (      
      <button onClick={this.props.onClickHandler} className="PaginationButton">
        {this.props.text}
      </button>
    )
  }
}

export default PaginationButton