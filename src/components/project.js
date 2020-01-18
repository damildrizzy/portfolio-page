import React, { Component } from 'react';


class Project extends Component{
    
    render(){
        const {jobs} = this.props;
        return(
            <div className="pt-4">
                <h1 className="text-center pb-5">Projects</h1>
                {
                    jobs.map(item => (
                    <div className="pb-5" key = {item.id}>
                        <h1><a href={item.url} target="_blank">{item.name}</a></h1>
                        <h5 className="type">{item.type}</h5>
                        <p>{item.description}</p>
                        <h5><strong>Built With</strong></h5>
                        <p>{item.tech}</p>
                        <img src={item.image}></img>
                    </div>
                    ))
                }

            </div>
        )
    }
}

export default Project;