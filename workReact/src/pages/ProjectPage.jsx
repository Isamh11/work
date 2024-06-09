import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get('http://localhost:3000/api/projects');
                setProjects(data.projects);
            } catch (error) {
                console.error('Failed to fetch projects', error);
            }
            setLoading(false);
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            {loading ? <p>Loading...</p> : (
                <table>
                    <thead>
                        <tr>
                            <th>Project Code</th>
                            <th>Project Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((proj) => (
                            <tr key={proj._id}>
                                <td>{proj.project_code}</td>
                                <td>{proj.project_name}</td>
                                <td>{proj.project_description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Project0Page;
