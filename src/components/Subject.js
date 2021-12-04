import React, { Component } from "react";

class Subject extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <a href="/">{this.props.title}</a>
        </h1>
        {/* 리팩토링 하였다 this.props.title / sub  */} 
        {this.props.sub}
      </header>
    );
  }
}
export default Subject;
