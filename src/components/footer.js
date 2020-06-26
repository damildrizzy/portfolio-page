import React, {Component} from 'react';


class Footer extends Component{
    render(){
        return(
            <div>
                <footer className="site-footer pt-5">
                    <div className="container">
                        <div className="row justify-content-around text-center">
                            <h1 className="col-lg-12 text-center pb-5">Contact Me</h1>
                            <div className="col-sm-12 col-md-4">
                                <h6>Email <i class="fa fa-envelope" aria-hidden="true"></i> </h6>
                                <p className="">damilolasamadekoya@gmail.com</p>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <h6>Phone <i class="fa fa-phone" aria-hidden="true"></i></h6>
                                <p className="">+2348111328262</p>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <h6>Address <i class="fa fa-home" aria-hidden="true"></i></h6>
                                <p className="">Lagos, Nigeria</p>
                            </div>

                        </div>
                        <hr/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p class="copyright-text">&copy; 2020 All Rights Reserved by 
                                    Samuel Adekoya.
                                </p>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li>
                                        <a className="twitter" href="https://twitter.com/parselfinger"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a className="linkedin" href="https://www.linkedin.com/in/damidrizzy"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a className="medium" href="https://medium.com/@damiloladrizzy"><i class="fa fa-medium fa-2x" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a className="github" href="https://github.com/damildrizzy"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;