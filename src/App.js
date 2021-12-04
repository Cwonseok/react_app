// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">

//       Hello, React!!
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import "./App.css";

class App extends Component {
  constructor(props) {
    // 초기화 함
    super(props);
    this.state = {
      // 읽기 페이지인지 구분하기 위해 Mode 값을 줌
      mode: "read",
      selected_content_id: 1,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information ..." },
        { id: 2, title: "CSS", desc: "CSS us fofr design ..." },
        {
          id: 3,
          title: "JavaScript",
          desc: "JavaScript is for interactive programming ...",
        },
      ],
    };
  }
  render() {
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          // _desc = this.state.contents[0].desc;
          break;
        }
        i = i + 1;
      }
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
         
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
