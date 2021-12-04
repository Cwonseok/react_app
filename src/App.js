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
      mode: "welcome",
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
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject> */}
        {/* <Subject title="WEB" sub="world wide web!"></Subject> */}

        <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                console.log(e);
                e.preventDefault(); // 태그가 가지고 있는 기본적인 동작방법을 못하게 할때 사용
                // debugger; // 중단점 
              }}
            >
              {" "}
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>

        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
