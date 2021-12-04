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
      subject: { title: "WEB", sub: "World Wide Web!" },
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
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        {/* <Subject title="WEB" sub="world wide web!"></Subject> */}

        <TOC data={this.state.contents}></TOC>
        <Content
          title="HTML"
          desc="HTML is HyperText Markup Language."
        ></Content>
      </div>
    );
  }
}

export default App;
