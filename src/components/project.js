import React, { Component } from 'react';


class Project extends Component{
    
    render(){
        const {jobs} = this.props;
        return(
            <div className="container py-5">
                <h1 className="text-center pb-5">Projects</h1>
                <div className="card-columns">
                {
                    jobs.map(item => (
                    <div className="card mx-auto" key = {item.id}>
                        <img className="card-img-top" src={item.image} alt="Project"></img>
                        <div className="card-body">
                            <h1 className="card-title">{item.name}</h1>
                            <h5 className="card-subtitle mb-2 text-muted">{item.type}</h5>
                            <p className="card-text">{item.description}</p>
                        <strong>Stack <i class="fa fa-code" aria-hidden="true"></i><span> <p>{item.tech}</p></span></strong>
                            <a href={item.url} class="btn btn-primary stretched-link">View Project</a>
                        </div>
                        
                        
                    </div>
                    ))
                }
                </div>
                

            </div>
        )
    }
}

export default Project;