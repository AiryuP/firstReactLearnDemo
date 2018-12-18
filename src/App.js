import React, { Component } from 'react';



import EventMethod from './components/EventMethod';
import Binddata from './components/BindData';
import YrImg from './components/YrImg';
import DataBinding from './components/DataBinding';
import Tofrom from './components/Tofrom';

class App extends Component {

  render() {
    return (
      <div className="App padding">

        <div className="genZu">React 学习笔记 </div>

        <div className="titleTxt"> 绑定数据，绑定属性，引入图片，循环数据 </div> 
        <Binddata /> 

        <br /><br /><br /><br />

        <div className="titleTxt"> 引入图片 </div> 
        <YrImg />

        <br /><br /><br /><br />
        <div className="titleTxt">事件与方法</div>
            
        <EventMethod />
        <br /><br /><br /><br />
        <div className="titleTxt">表单事件，ref,数据双向绑定</div>

        <DataBinding />

        <br /><br /><br /><br />
        <div className="titleTxt">深入表单事件</div>

        <Tofrom />


      </div>
    );
  }
}

export default App; 
