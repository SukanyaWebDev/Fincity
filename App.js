import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact'
import ProjectsView from './components/ProjectsView'
import { AppProvider } from './Context/AppContext';

class App extends Component {
  render(){
  return (
    <AppProvider>
    <Router>
      <Routes>
        {/* Route for Home component */}
        <Route path="/" element={<Home />} />

        {/* Routes for other sections */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects-view" element={<ProjectsView projects={[]} />} />
      </Routes>
    </Router>
    </AppProvider>
  );
}
}

export default App;
