import './About.css'

function About() {
    return (
        <div className='about' id='about'>
            <div className='about-container'>
                <h2>About Me</h2>
                <div className='about-content'>
                    <div className='about-text'>
                        <p>
                            Hi! I'm Yuginda Omithnaa Ranawaka Arachchi, a Computer Engineering student at Simon Fraser University. I started my journey into the world of programming at the beginning of 2023, and I'm excited to keep learning and improving every day.
                        </p>
                        <p>
                            Currently, I'm exploring front-end web development using tools like React Js, Git and GitHub. I'm also doing my best to learn how websites are built from the ground up and how to combine my ideas through coding to create websites.
                        </p>
                        <p>
                            Outside of coding, I enjoy martial arts, hiking or rockclimbing. I'm usually curious and open to try new things in life, especially if it helps me grow as a person and developer too.
                        </p>
                    </div>
                    <div className='about-stats'>
                        <div className='stat'>
                            <h3>2+</h3>
                            <p>Years Coding</p>
                        </div>
                        <div className='stat'>
                            <h3>2</h3>
                            <p>Projects Ongoing</p>
                        </div>
                        <div className='stat'>
                            <h3>3</h3>
                            <p>Learning Technologies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About 