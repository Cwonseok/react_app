import React, { Component } from "react";

class Subject extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        {/* 리팩토링 하였다 this.props.title / sub  */}
        {this.props.sub}
      </header>
    );
  }
}
export default Subject;
