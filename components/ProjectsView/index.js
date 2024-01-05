import React, { Component } from 'react';
import { AppContext} from '../../Context/AppContext';

class ProjectsView extends Component {
  static contextType = AppContext;

  render() {
    // 
    // const { projects } = this.props.location.state || { projects: [] };
    const { projects } = this.context;
   

    if (!projects || projects.length === 0) {
      return <div>No projects added yet.</div>;
    }
    return (
      <div className='main-container'>
        <h1>Projects</h1>
        
        {/* Display added projects */}
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>Link: {project.link}</p>
            <p>Description: {project.description}</p>
          </div>
        ))}

        
      </div>
    );
  }
}

export default ProjectsView;
