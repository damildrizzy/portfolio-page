import React, {Component} from 'react';
import django from '../img/django.png';
import flask from '../img/flask.png';


class About extends Component{
    render(){
        return(
            <div className="pt-4">
                <h1 className="text-center pb-2">About Me</h1>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-7">
                            <p className="pt-5">Hi there, I'm Samuel Adekoya. My friends call me Dami 
                                (Oh, Why? Send a  <a className="text-info" href="mailto:damilolasamadekoya@gmail.com" target="_blank"> message </a> and i'll tell you the full story). 
                                
                                
                                
                            </p>
                            <p>
                            I'm a 22 year old who happens to 
                                spend a ton of time talking to a computer in a secret language. My favourite language? Python. Python is my first love and 
                                sometimes, I go as far as calling myself a parselfinger (Catch my drift?).
                            </p>
                            <p>
                            Currently, 
                                I build web apps mainly with Django and Flask but I recently picked up React (Built this webpage with it) and Node.js
                            </p>
                            <p>
                            When i'm not coding and the daughters of Mnemosyne smile on me, 
                                I pick up my pen and write cool stories and articles. You can check out my writeups on my Medium Blog.
                            </p>
                        </div>
                        <div className="col-lg-5 border-primary">
                            <div className="container-fluid">
                                <h2 className="text-center">Skills</h2>

                                <div className="row text-center">

                                    <div className="col-4">          
                                    <img src="https://img.icons8.com/color/96/000000/html-5.png"></img>
                                    <p> HTML 5</p>
                                    </div>

                                    <div className="col-4">
                                    
                                    <img src="https://img.icons8.com/color/96/000000/css3.png"/>
                                    <p> CSS 3</p>
                                    </div>

                                    <div className="col-4">
                                    
                                    <img src="https://img.icons8.com/color/96/000000/python.png"/>
                                    <p> Python 3</p>
                                    </div>

                                    <div className="col-4">
                                   
                                    <img className="django" src={django}></img>
                                    <p> Django</p>
                                    </div>

                                    <div className="col-4">
                                    
                                    <img className="flask" src={flask}></img>
                                    <p> Flask</p>
                                    </div>

                                    <div className="col-4">
                                    
                                    <img src="https://img.icons8.com/color/96/000000/javascript.png"></img>
                                    <p>JavaScript</p>
                                    </div>

                                    <div className="col-4">
                                    
                                    <img src="https://img.icons8.com/color/96/000000/react-native.png"></img>
                                    <p> React</p>
                                    </div>

                                    <div className="col-4">
                                    
                                    <img src="https://img.icons8.com/color/96/000000/git.png"></img>
                                    <p>Git</p>
                                    </div>

                                    <div className="col-4">
                                  
                                    <img src="https://img.icons8.com/color/96/000000/bootstrap.png"></img>
                                    <p> Bootstrap</p>
                                    </div>
                                </div>
                            
                            </div>
                        </div>

                     
                    </div>
                </div>
            
                
            </div>
        )
    }
}

export default About;