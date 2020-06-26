import React, {Component} from 'react';
import me from '../img/samuel.JPG';

class Header extends Component{
    render(){
        return(
            <div>
            <section className="home_banner_area pb-5">
                <div className="banner-inner">
                    <div className="container py-5">
                        
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner-content">
                                    
                                    <h1 className="pt-5 display-4">Hi, I'm <span> Samuel.</span></h1>
                                    <h4 className="">Software Engineer with two years of experience 
                                                    building software solutions that work. A Creative thinker and enthusiastic problem solver </h4>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="home_right_img py-5">
                                    <img className="img-fluid profile-img" src={me} alt="coder"/>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
               
            </div>
        )
    }
}

export default Header