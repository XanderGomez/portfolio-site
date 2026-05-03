import "../styles/Projects.css"

function Projects() {
    return (
        <main className="page">
            <section className="section">
                <h1>Personal Projects</h1>

                <div className="projects-container">
                    <div className="project-card">
                        <h2>Statistics Calculator</h2>

                        <p><strong>About:</strong> A statistics calculator that processes datasets and returns key metrics such as mean, median, and standard deviation.</p>
                        <p><strong>Tech:</strong> Python</p>
                        <p><strong>Purpose:</strong> Support for statistics coursework</p>
                        <p><strong>Status:</strong> Work in Progress</p>
                        <p><strong>Learning Experience:</strong> Improved ability to structure code into single-purpose functions and modular logic.</p>

                        <a href="https://github.com/XanderGomez/Statistics-Calculator" target="_blank">View Repository</a>
                    </div>

                    <div className="project-card">
                        <h2>MavMarketplace</h2>

                        <p><strong>About:</strong> A marketplace-style web application inspired by Facebook Marketplace, designed for UNO students to buy and sell items.</p>
                        <p><strong>Tech:</strong> TypeScript, React, Vite</p>
                        <p><strong>Purpose:</strong> Software Engineering course project</p>
                        <p><strong>Status:</strong> Potential future improvements</p>
                        <p><strong>Learning Experience:</strong> Gained experience building full web applications using React, including component structure and state management.</p>

                        <a href="https://github.com/CSCI4830-UNO/MavMarketplace" target="_blank">View Repository</a>
                    </div>

                    <div className="project-card">
                        <h2>Banking App</h2>
                        
                        <p><strong>About:</strong> A Java-based GUI banking application for tracking income, expenses, and account balance.</p>
                        <p><strong>Tech:</strong> Java</p>
                        <p><strong>Purpose:</strong> Object-Oriented Programming course project</p>
                        <p><strong>Status:</strong> Completed</p>
                        <p><strong>Learning Experience:</strong> Strengthened understanding of object-oriented design principles and class structure.</p>

                        <a href="https://github.com/XanderGomez/OOP-Bank-Project" target="_blank">View Repository</a>
                    </div>
                </div>              
            </section>
        </main>
    )
}

export default Projects;