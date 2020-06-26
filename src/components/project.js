import React, { Component } from 'react';


class Project extends Component{
    
    render(){
        const {jobs} = this.props;
        return(
            <div className="pt-4">
                <h1 className="text-center pb-5">Projects</h1>
                <div className="card-columns">
                {
                    jobs.map(item => (
                    <div className="card" key = {item.id}>
                        <img className="card-img-top" src={item.image}></img>
                        <div className="card-body">
                            <h1 className="card-title">{item.name}</h1>
                            <h5 className="card-subtitle mb-2 text-muted">{item.type}</h5>
                            <p className="card-text">{item.description}</p>
                            <h5><strong>Built With</strong></h5>
                            <p>{item.tech}</p>
                            <a href={item.url} class="btn btn-primary stretched-link">View The Project</a>
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