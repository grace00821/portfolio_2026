import projects from './data/projects.json';
import { ProjectCard } from './components/ProjectCard';

const renderPortfolio = () => {
    const projectGrid = document.querySelector('#project-grid');
    
    // Maps through your JSON and converts it into HTML components
    projectGrid.innerHTML = projects
        .map(project => ProjectCard(project))
        .join('');
};

// Initialize the site
document.addEventListener('DOMContentLoaded', renderPortfolio);