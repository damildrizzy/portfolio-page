import React, {Component} from 'react';
import django from '../img/django.png';
import flask from '../img/flask.png';
import express from '../img/express.png';
import drf from '../img/drf.png';
import sql from '../img/sql.png';


class About extends Component{
    render(){
        return(
            <div className="pt-4">
                <h1 className="text-center">Skills</h1>
                <div className="container">
                    
                    <div className="row justify-content-around pt-5">
                        <h2 className="col-lg-12 text-center">Languages</h2>
                        <div className="col-lg-6 col-sm-6 text-center">
                            <img src="https://img.icons8.com/color/96/000000/python.png" alt="python"/>
                            <p> Python 3</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 text-center">
                            <img src="https://img.icons8.com/color/96/000000/javascript.png" alt="js"></img>
                            <p>JavaScript</p>
                        </div>
                        {/* <div className="col-lg-3 col-md-4 text-center">          
                            <img src="https://img.icons8.com/color/96/000000/html-5.png"></img>
                            <p> HTML 5</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img src="https://img.icons8.com/color/96/000000/css3.png"/>
                            <p> CSS 3</p>
                        </div> */}
                    </div>
                    <div className="row justify-content-around pt-5">
                        <h2 className="col-lg-12 text-center">Tools</h2>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img className="django" src={django} alt="django"></img>
                            <p> Django</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img className="flask" src={flask} alt="flask"></img>
                            <p>Flask</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img className="drf" src={drf} alt="drf"></img>
                            <p>Django Rest Framework</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="react"></img>
                            <p> React</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="node"/>
                            <p>Nodejs</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img className="express" src={express} alt="express"></img>
                            <p>Express</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img className="sql" src={sql} alt="sql"></img>
                            <p>SqlAlchemy</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                        <img src="https://img.icons8.com/color/96/000000/docker.png" alt="docker"/>
                            <p>Docker</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img src="https://img.icons8.com/color/96/000000/git.png" alt="git"></img>
                            <p>Git</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img src="https://img.icons8.com/color/96/000000/redis.png" alt="redis"/>
                            <p>Redis</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                        <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="mongo"/>
                            <p>MongoDB</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                        <img src="https://img.icons8.com/color/96/000000/postgreesql.png" alt="postgres"/>
                            <p>Postgres</p>
                        </div>
                    </div>
                    <div className="row justify-content-around py-5">
                        <h2 className="col-lg-12 text-center">Other Skills</h2>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img src="https://img.icons8.com/color/96/000000/heroku.png" alt="heroku"/>
                            <p>Heroku</p>
                        </div>
                        <div className="col-lg-3 col-md-4 text-center">
                            <img src="https://img.icons8.com/color/96/000000/amazon-web-services.png" alt="aws"/>
                            <p>AWS</p>
                        </div>
                    </div>
                       

                     
                </div>
            
                
            </div>
        )
    }
}

export default About;