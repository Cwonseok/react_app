import React, { Component } from "react";

class TOC extends React.Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={i}>
          {data[i.id]}
          {/* key 값을 넣어주는 이유는 필요로 하여 요청하기 떄문에 오류가 나옴   */}

          <a
            href={"/content/" + data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {data[i].title}
          </a>
          {/* <a href={data[i].id}>{data[i].title}</a> */}
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
