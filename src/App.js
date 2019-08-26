import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import Content from './component/content/content';




class App extends React.Component{
  render(){
    return(
      <div>
        <Header title="WYD"/>
        <Content title_name="Front-End Developer"/>  
       </div>
    )
  };
}

export default App;
