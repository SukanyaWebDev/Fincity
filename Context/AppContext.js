// AppContext.js
import React, { createContext, Component } from 'react';

const AppContext = createContext();

class AppProvider extends Component {
  state = {
    projects: [],
    navigate: () => {},
  };

  setProjects = (projects) => {
    this.setState({ projects });
  };

  setNavigate = (navigate) => {
    this.setState({ navigate });
  };

  render() {
    const { children } = this.props;
    const { projects, navigate } = this.state;

    const contextValue = {
      projects,
      setProjects: this.setProjects,
      navigate,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
  }
}

export { AppContext, AppProvider };
