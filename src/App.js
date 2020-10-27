import React, { Component } from 'react';
import TOC from './components/TOC.js'
import Content from './components/Content.js'
import Subject from './components/Subject.js'
import './App.css';

// main같은 거
class App extends Component {
  constructor(props) {
    super(props); // component의 constructor에 props를 넣어서 사용하겠다.
                // state의 값을 초기화??
    this.state = {
      mode:"welcome",
      selected_content_id:2,
      subject:{title:'귤', sub:'pretty tangerine'}, // property
      welcome:{title:'안녕하세요!', desc:'이 사이트는 귤과의 추억을 남기는 곳 입니다.'},
      contents: [
        {id:1, title:'madcamp', desc:"귤을 처음 만난 곳"},
        {id:2, title:'birthday', desc:"귤이 나에게 마음을 활짝 연 날"},
        {id:3, title:'yesterday', desc:"귤이랑 꽁냥꽁냥한 날"},
      ]
    }
  }

  render() {
    var _title, _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    } else if (this.state.mode === "read") {
      for (var i=0; i<this.state.contents.length; i++) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode: "welcome"})
          }.bind(this)}
          ></Subject>

        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id: Number(id)
            })
          }.bind(this)}
          data={this.state.contents}></TOC>

        <Content title={_title} content={_desc}></Content>
      </div>
    );
  }
}

export default App;
