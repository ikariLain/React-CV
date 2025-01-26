import { useState, useEffect } from 'react'
import './Portfolie.css'

const Portfolie = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchGitHubProjects = async () => {
            try {
                // Ersätt 'DITT_GITHUB_ANVÄNDARNAMN' med ditt GitHub användarnamn
                const response = await fetch('https://api.github.com/users/ikariLain/repos')
                if (!response.ok) throw new Error("Kunde inte hämta projekt.")
                const data = await response.json()
                
                // Filtrera för att bara få publika repon och sortera efter senast uppdaterade
                const publicRepos = data
                    .filter(repo => !repo.private)
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                
                setProjects(publicRepos)
                setLoading(false)
            } catch (error) {
                setError("Ett fel uppstod vid laddning av projekt.")
                setLoading(false)
                console.error(error)
            }
        }

        fetchGitHubProjects()
    }, [])

    if (loading) return <div className="loading">Laddar projekt...</div>
    if (error) return <div className="error">{error}</div>

    return (
        <div className="portfolio-container">
            <h2>Mina GitHub Projekt</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description || "Ingen beskrivning tillgänglig"}</p>
                        <div className="project-details">
                            {project.language && (
                                <span className="language">
                                    {project.language}
                                </span>
                            )}
                            <span className="stars">
                                ⭐ {project.stargazers_count}
                            </span>
                        </div>
                        <a 
                            href={project.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="visit-button"
                        >
                            Besök projektet
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolie; 