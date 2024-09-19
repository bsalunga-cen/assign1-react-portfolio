import React from 'react';
import services1 from '../src/assets/services1.png';

const Services = () => (
  <div className='services-section'>
    <h2 className='h2-section'>Services.</h2>
    <img className='services-photo1' src={services1} alt="Services photo" />

    <table className="services-table">
        <thead>
          <tr>
            <th>Software Testing & Quality Assurance</th>
            <th>Programming & Development</th>
            <th>Tools & Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manual Testing</td>
            <td>Web Development (HTML, CSS, JavaScript)</td>
            <td>Jira, Confluence, TestRail, Redmine, Github, Miroboard, VersionOne (Test Management).</td>
          </tr>
          <tr>
            <td>Automated Testing (Cypress, Selenium)</td>
            <td>Database management (SQL)</td>
            <td>JMeter
            (Load Testing), Postman (API Testing)</td>
          </tr>
          <tr>
            <td>Performance Testing</td>
            <td>Application development (C#, Java, Python)</td>
            <td>BrowserStack (Device Testing).</td>
          </tr>
          <tr>
            <td>Usability testing</td>
            <td></td>
            <td>MS Office Suite, MS Teams, Slack (Communication)</td>
          </tr>
          <tr>
            <td>Smoke testing, Regression & Functional testing</td>
            <td></td>
            <td>Canva (Design Collaboration)</td>
          </tr>
          <tr>
            <td>Performance testing</td>
            <td></td>
            <td>Docker, Kubernetes, Microsoft Azure, and AWS (Cloud Technologies)</td>
          </tr>
          <tr>
            <td>AI-Powered testing</td>
          </tr>
        </tbody>
      </table>
  </div>
);

export default Services;