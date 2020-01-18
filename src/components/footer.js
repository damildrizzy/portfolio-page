import React, {Component} from 'react';


class Footer extends Component{
    render(){
        return(
            <div className="pt-5 #contact">
                <h1 className="text-uppercase text-info">Contact Me</h1>

                <p> Want me to handle your next project? Got some questions you want to ask me? Send me a  
                    <a className="text-info" href="mailto:damilolasamadekoya@gmail.com" target="_blank"> mail </a> 
                    and we can do these and more.
                </p>
            
               
                <div className="social-wrapper">
                    <ul>
                    <li>
                        <a href="https://twitter.com/parselfinger" target="_blank">
                        <i className="fa fa-twitter fa-3x twitter-icon" aria-hidden="true"></i></a>
                      
                    </li>
                    <li>
                        <a href="https://github.com/damildrizzy" target="_blank">
                         <i className="fa fa-github fa-3x" aria-hidden="true"></i>   </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/damidrizzy" target="_blank">
                        <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>    </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@damiloladrizzy" target="_blank">
                        <i className="fa fa-medium fa-3x" aria-hidden="true"></i>    </a>
                    </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;