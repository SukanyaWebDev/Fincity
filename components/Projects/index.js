import React, { Component } from 'react';
import ProjectsView from '../ProjectsView';
import './index.css'

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectName: '',
      projectLink: '',
      projectDescription: '',
      projects: [],
      // redirectToProjectsView: false,
      redirectToProjectsView: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddProject = () => {
    const { projectName, projectLink, projectDescription } = this.state;

    if (!projectName || !projectLink || !projectDescription) {
      alert('Please fill in all fields.');
      return;
    }


    const newProject = {
      name: projectName,
      link: projectLink,
      description: projectDescription,
    };

    this.setState((prevState) => ({
      projects: [...prevState.projects, newProject],
      projectName: '',
      projectLink: '',
      projectDescription: '',
      // redirectToProjectsView: true,
      redirectToProjectsView: true,
    }));
  };
  
  render() {
    //  const { redirectToProjectsView, projects } = this.state;

    // if (redirectToProjectsView) {
    //   return <Redirect to={{ pathname: '/projects-view', state: { projects } }} />;
    // }
    const { redirectToProjectsView, projects } = this.state;
    
    // if (redirectToProjectsView) {
    //   return <Redirect to={{ pathname: '/projects-view', state: { projects } }} />;
    // }


    return (
      <div className='main-container'>
        <h2>Add Projects</h2>
        <form className='form-container'>
          <div className='input-container'>
            <label htmlFor='projectName'>Project Name </label>
            <input
              type="text"
              name="projectName"
              value={this.state.projectName}
              onChange={this.handleInputChange}
              id="projectName"
            />

          </div>
          <div  className='input-container'>
            <label htmlFor='projectLink'>
              Project Link  </label>
              <input
                type="text"
                name="projectLink"
                value={this.state.projectLink}
                onChange={this.handleInputChange}
                id = "projectLink"
              />
          </div>
          <div  className='input-container'>
            <label htmlFor='projectDescription'>
              Project Description  </label>
              <textarea
                name="projectDescription"
                value={this.state.projectDescription}
                onChange={this.handleInputChange}
                id = "projectDescription"
              />
           
          </div>

          <div className='btn-container'>
          <button onClick={this.handleAddProject} className='add-btn'>Add</button>
        </div>
        </form>
        <ProjectsView projects = {projects}/>
       
      </div>
    );
  }
}

export default Projects;
