import { useState, useEffect } from 'react';
import cvData from '../data/cv-data.json';
import BallonImg from '../assets/Ballon_painting.jpg';

function CV() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Sätt data direkt eftersom vi importerar JSON-filen
    setData(cvData);
  }, []);

  if (!data) return <div>Laddar...</div>;

  return (
    <div className="cv-container">
      <h1>Mitt CV</h1>

      <div className='painting'>
        <img src={BallonImg} alt="img" />
      </div>

      <section className="education-section">
        <h2>Utbildning</h2>
        {data.education.map((edu) => (
          <div key={edu.id} className="cv-item">
            <h3>{edu.school}</h3>
            <p className="program">{edu.program}</p>
            <p className="period">{edu.period}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </section>

      <section className="experience-section">
        <h2>Arbetslivserfarenhet</h2>
        {data.experience.map((exp) => (
          <div key={exp.id} className="cv-item">
            <h3>{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="period">{exp.period}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CV; 