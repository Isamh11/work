import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AssignmentPage = () => {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAssignments = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get('http://localhost:3000/api/assignments');
                setAssignments(data.assignments);
            } catch (error) {
                console.error('Failed to fetch assignments', error);
            }
            setLoading(false);
        };

        fetchAssignments();
    }, []);

    return (
        <div>
            <h2>Assignments</h2>
            {loading ? <p>Loading...</p> : (
                <table>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Project Code</th>
                            <th>Start Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map((assign) => (
                            <tr key={assign._id}>
                                <td>{assign.employee_id}</td>
                                <td>{assign.project_code}</td>
                                <td>{new Date(assign.start_date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AssignmentPage;
