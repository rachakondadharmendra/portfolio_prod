// ProjectsOverviewDashboard.js
import React from 'react';
import '../styles/ProjectsOverviewDashboard.css';

function ProjectsOverviewDashboard() {
  return (
    <div className="projects-overview-dashboard">
      <h2>Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Project A</td>
            <td>Upcoming</td>
            <td>Details about Project A</td>
          </tr>
          <tr>
            <td>Project B</td>
            <td>Ongoing</td>
            <td>Details about Project B</td>
          </tr>
          <tr>
            <td>Project C</td>
            <td>Done</td>
            <td>Details about Project C</td>
          </tr>
          {/* Add more rows for additional projects */}
        </tbody>
      </table>
      <div className="website-usage">
        <h2>Website Usage</h2>
        <p>Explore more about our website:</p>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">All Projects</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectsOverviewDashboard;
