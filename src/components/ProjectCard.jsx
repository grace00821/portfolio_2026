export const ProjectCard = (project) => {
    return `
        <div class="card">
            <span class="institution">${project.institution}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${project.link}" class="btn">View Details</a>
        </div>
    `;
};