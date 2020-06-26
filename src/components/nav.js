import React, {Component} from 'react';
import logo from '../img/logo.png';

class Nav extends Component{
    render(){
        return(
            <header className="container">
                <nav className="navbar navbar-expand-lg navbar-dark" >
                    <a className="navbar-brand">
                        <img className="logo" src={logo} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>       
                    <div class="collapse navbar-collapse text-center" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" target="_blank" href="#">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://github.com/damildrizzy">Github</a>
                            </li> 
                        </ul>
                    </div> 
            
                </nav> 
            </header>
        )
    }
}

export default Nav;