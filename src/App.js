import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import About from './components/about';
import Project from './components/project';
import jobs from './components/jobs';
import Footer from './components/footer';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      jobs
    }
  }
  render(){
    const {jobs} = this.state;
    return (
      <div>
        <Nav/>
        <Header/>
        <About/>
        <Project jobs = {jobs}/>
        <Footer/>
        
        
      </div>
    );
  }
  
}

export default App;
