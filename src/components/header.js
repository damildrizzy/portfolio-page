import React, {Component} from 'react';
import illustration from '../img/coding.png';

class Header extends Component{
    render(){
        return(
            <div>
            <section className="home_banner_area py-5">
                <div className="banner-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner-content py-5">
                                    
                                    <h1 className="pt-5 display-4">Hi. I'm <span> Dami.</span></h1>
                                    <h4 className="">Web Developer</h4>
                                    <div className="align-items-center py-3">
                                        <a className="btn btn-primary btn-lg" href=""><span> Get Resume</span></a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="home_right_img py-5">
                                    <img className="img-fluid" src={illustration} alt="coder"/>
                                    
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