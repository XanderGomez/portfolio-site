import "../styles/Projects.css"

function Projects() {
    return (
        <main className="page">
            <section className="section">
                <h1>Personal Projects</h1>

                <div className="projects-container">
                    <div className="project-card">
                        <h2>Project 1: Stats Project</h2>

                        <p><strong>Tech:</strong> Python</p>
                        <p><strong>Purpose:</strong> Aid for statistics course work</p>
                        <p><strong>Status:</strong> Work in Progress</p>

                        <a href="https://github.com/XanderGomez/Statistics-Calculator" target="_blank">View Repository</a>
                    </div>
                    <div className="project-card">
                        <h2>Project 2: MavMarketplace</h2>

                        <p><strong>Tech:</strong> React</p>
                        <p><strong>Purpose:</strong> Software Engineering Course Project</p>
                        <p><strong>Status:</strong> Possible Visit to Add Finishing Touches</p>

                        <a href="https://github.com/CSCI4830-UNO/MavMarketplace" target="_blank">View Repository</a>
                    </div>
                </div>              
            </section>
        </main>
    )
}

export default Projects;