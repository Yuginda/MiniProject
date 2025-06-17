import './Portfolio.css'

function Portfolio() {
    const featuredProject = {
        title: "Yuginda's Portfolio Website",
        description: "This webpage is a website that provides the contact, portfolio and details about me and it is built using React Js.",
        technologies: ["React Js", "VS code"],
        github: "https://github.com/Yuginda/MiniProject",
        demo: "https://yuginda.github.io/MiniProject/",
        image: "💼"
    }

    const allSkills = [
        { name: 'JavaScript', icon: '⚡', category: 'lang' },
        { name: 'C++', icon: '⚙️', category: 'lang' },
        { name: 'React', icon: '⚛️', category: 'web' },
        { name: 'HTML/CSS', icon: '🎨', category: 'web' },
    ]

    return (
        <div className='portfolio' id='portfolio'>
            <div className='portfolio-container'>
                <h2>Portfolio & Skills</h2>
                
                <div className='portfolio-content'>
                    {/* Featured Project Section */}
                    <div className='featured-project'>
                        <div className='project-header'>
                            <div className='project-icon'>{featuredProject.image}</div>
                            <div className='project-title-section'>
                                <h3>{featuredProject.title}</h3>
                                <div className='project-links'>
                                    <a 
                                        href={featuredProject.github} 
                                        className='project-link'
                                        target="_blank" /* To open in new tab or keeps openeing in same tab */
                                        rel="noopener noreferrer"
                                    >
                                        <span className='link-icon'>💻</span>
                                        GitHub
                                    </a>
                                    <a 
                                        href={featuredProject.demo} 
                                        className='project-link demo'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className='link-icon'>🚀</span>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <p className='project-description'>{featuredProject.description}</p>
                        
                        <div className='project-tech'>
                            <h4>Technologies Used</h4>
                            <div className='tech-grid'>
                                {featuredProject.technologies.map((tech, index) => (
                                    <span key={index} className='tech-tag'>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className='skills-section'>
                        <h3>Technical Skills</h3>
                        <div className='skills-grid'>
                            {allSkills.map((skill, index) => (
                                <div key={index} className='skill-chip'>
                                    <span className='skill-icon'>{skill.icon}</span>
                                    <span className='skill-text'>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className='skills-footer'>
                            <p>Would love to learn and explore new technologies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio