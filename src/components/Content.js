import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { postData } from '../utils/CrudApi'; 
import '../styles/main.css';
import ProjectCard from './ProjectCard';


const imageUrl = `${process.env.REACT_APP_IMAGE_FOLDER_PATH}`;

// Content Component
function Content() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Ask for confirmation
    const confirmed = window.confirm('Are you sure you want to submit the form?');
  
    // Proceed only if confirmed
    if (confirmed) {
      try {
        // Send data to the backend using postData function
        await postData({ ...formData, status: true });
        console.info('Message sent successfully');
        // Clear form fields after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        // Set submission status to "success"
        setSubmissionStatus('success');
      } catch (error) {
        console.error('Error sending message:', error);
        // Set submission status to "error"
        setSubmissionStatus('error');
      }
    }
  };
  
  return (
    <main>
      <section id="home">
        <div className="profile">
          <h1>Welcome to my  <span className="portfolio-static">Portfolio!</span></h1>
          <p>I am <span className="portfolio-static">Rachakonda Dharmendra</span>, a skilled DevOps engineer with a passion for automating and streamlining the software development and deployment lifecycle. I specialize in implementing and managing continuous integration and deployment pipelines, infrastructure automation, and configuration management to help teams build, test, and release software quickly and reliably.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/rachakonda-dharmendra/" target="_blank" rel="noreferrer">
              <FaLinkedin /> 
            </a>
            <a href="https://github.com/rachakondadharmendra" target="_blank" rel="noreferrer">
              <FaGithub /> 
            </a>
            <a href="mailto:rachakondadharmendrainfo@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope /> 
            </a>
          </div>       
        </div>
        <div className="tech-stack">
          <h3>Tech Stack</h3>
          <div className="tech-stack-icons">
            <img src= {`${imageUrl}/aws.png`} alt="AWS" title="AWS" />
            <img src={`${imageUrl}/terraform.png`} alt="Terraform" title="Terraform" />
            <img src={`${imageUrl}/git.png`} alt="Git" title="Git" />
            <img src={`${imageUrl}/jenkins.png`} alt="Jenkins" title="Jenkins" />
            <img src={`${imageUrl}/docker.png`} alt="Docker" title="Docker" />
            <img src={`${imageUrl}/kubernetes.png`} alt="Kubernetes" title="Kubernetes" />
            <img src={`${imageUrl}/ansible.png`} alt="Ansible" title="Ansible" />
            <img src={`${imageUrl}/jmeter.png`} alt="Jmeter" title="Jmeter" />
            <img src={`${imageUrl}/helm.png`} alt="Helm" title="Helm" />
            <img src={`${imageUrl}/istio.png`} alt="Istio" title="Istio" />
            <img src={`${imageUrl}/linux.png`} alt="Linux" title="Linux" />
            <img src={`${imageUrl}/bash.png`} alt="Bash Scripting" title="Bash Scripting" />
            <img src={`${imageUrl}/postgresql.png`} alt="Postresql" title="Postresql" />
            <img src={`${imageUrl}/argocd.png`} alt="ArgoCD" title="ArgoCD" />
            <img src={`${imageUrl}/sonarqube.svg`} alt="Sonar Qube" title="Sonar Qube" />
            <img src={`${imageUrl}/jira.png`} alt="Jira Software" title="Jira Software" />
          </div>
        </div>
      </section>

      <section id="about">
    <h2>About Me</h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-circle-left"></div>
        <div className="timeline-content">
          <h3>DevOps Engineer (Freelance)</h3>
          <p>May 2023 – Apr 2024<br />Self-Employed, Hyderabad</p>
          <ul>
            <li>Delivered impactful automation solutions for clients in the US and India, leading to significant improvements in their deployment processes.</li>
            <li>Integrated Bitbucket, Ansible, and Jenkins to achieve a 50% reduction in manual deployments for a US client.</li>
            <li>Restructured 70% of the infrastructure for an Indian client using Terraform, reshaping their AWS architecture and reducing expenses by 14%.</li>
            <li>Implemented Ansible automation to optimize operational workflows, reducing manual effort by 5-7%.</li>
            <li>Built automated infrastructure for clients using Ansible and Terraform, reducing manual effort by 50%.</li>
          </ul>
        </div>
      </div>
      <div className="timeline-item right">
        <div className="timeline-circle-right"></div>
        <div className="timeline-content">
          <h3>DevOps Engineer</h3>
          <p>Feb 2023 - Apr 2023<br />Decimal Point Analytics, Nashik</p>
          <ul>
            <li>Implemented New Relic for infrastructure and application performance monitoring.</li>
            <li>Reduced manual deployments by 5% through the implementation of automated CI/CD pipelines in Jenkins.</li>
          </ul>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-circle-left"></div>
        <div className="timeline-content">
          <h3>SDE DevOps 1</h3>
          <p>Jun 2022 - Jan 2023<br />Careerlabs Technologies Pvt. Ltd. (Product Company), Bangalore</p>
          <ul>
            <li>Designed and implemented Jenkins CI/CD pipelines leveraging Docker and Kubernetes.</li>
            <li>Gained expertise in AWS services and cloud infrastructure.</li>
            <li>Demonstrated Kubernetes proficiency by creating performant clusters.</li>
            <li>Optimized infrastructure utilization, decreasing costs by 25% by re-platforming Kubernetes workloads into Docker Compose.</li>
          </ul>
        </div>
      </div>
      <div className="timeline-item right">
        <div className="timeline-circle-right"></div>
        <div className="timeline-content">
          <h3>SDE DevOps Intern</h3>
          <p>Dec 2021 - May 2022<br />Careerlabs Technologies Pvt. Ltd. (Product Company), Tirunelveli</p>
          <ul>
            <li>Expanded Linux administration skills through working with various distributions, including Ubuntu, RHEL, and CentOS.</li>
            <li>Optimized application performance using JMeter and addressed database connection issues.</li>
            <li>Gained exposure to full CI/CD pipelines, integrating Git, Jenkins, Docker, and Kubernetes.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

<section id="projects">
<h2>
Projects&nbsp;
<a href="https://github.com/rachakondadharmendra/Projects-Overview/blob/main/README.md" target="_blank" rel="noreferrer">
(Explore All Projects)
</a>
</h2>
  <div className="project-grid">
    <ProjectCard
      title="Jenkins DevSecOps CI Pipeline"
      summary="This project sets up a Jenkins pipeline that integrates various DevSecOps tools like OWASP, ESLint, Checkov, SonarQube, Trivy, and more for a comprehensive CI process."
      techStack="Jenkins, Github, OWASP, ESLint, Checkov, Sonarqube, Trivy, Docker, AWS"
      githubUrl="https://github.com/rachakondadharmendra/Jenkins-CAC/tree/main/Jenkins-DevSecOps-CI-Pipeline"
    />
    <ProjectCard
      title="AWS ECS Cluster with CI/CD Pipeline"
      summary="This project sets up an AWS ECS cluster and an in-house CI/CD pipeline using Terraform for deploying and running an application."
      techStack="AWS, Terraform, CI/CD"
      githubUrl="https://github.com/rachakondadharmendra/Terraform-ECS-Setup"
    />
    <ProjectCard
      title="EKS Cluster Creation using Terraform"
      summary="This project covers everything related to creating and using an EKS cluster on AWS using Terraform, including concepts like RBAC and Kubernetes."
      techStack="Terraform, EKS, Kubernetes, RBAC, AWS"
      githubUrl="https://github.com/rachakondadharmendra/EKS-Cluster-Terraform"
    />
    <ProjectCard
      title="Jenkins Server Setup with Configuration as Code"
      summary="This project helps you set up an entire Jenkins server with all the necessary plugins and configurations, ready to use right away."
      techStack="Jenkins, Configuration as Code"
      githubUrl="https://github.com/rachakondadharmendra/Jenkins-CAC"
    />
    <ProjectCard
      title="Monitoring Setup with Prometheus and Grafana"
      summary="This project includes scripts, configurations, and a Docker Compose file for setting up monitoring components like Node Exporter, Grafana, Prometheus, and Alert Manager."
      techStack="Prometheus, Grafana, Node Exporter, Alert Manager, Docker"
      githubUrl="https://github.com/rachakondadharmendra/Monitoring-Setup"
    />
    <ProjectCard
      title="3-Tier Application for DevOps Projects"
      summary="This project brings together the frontend (React.js), backend (Golang), and database (MongoDB) components to create a full-stack application for DevOps projects."
      techStack="Reactjs, Go lang, MongoDB, Docker-compose, Docker"
      githubUrl="https://github.com/rachakondadharmendra/3-Tier-Application"
      demoUrl="https://rachakondadharmendra.info/"
    />
    <ProjectCard
      title="NGINX Configuration for Production"
      summary="This project provides guides and configurations to set up NGINX as a secure reverse proxy for Jenkins, with SSL integration and optional caching for better performance."
      techStack="Nginx, SSL, Networking, Linux"
      githubUrl="https://github.com/rachakondadharmendra/Nginx-Prod-Configuration"
    />
    <ProjectCard
      title="Uptime Kuma Monitoring Setup"
      summary="This project sets up the Uptime Kuma monitoring tool to monitor the status of various services, including the portfolio website."
      techStack="Uptime Kuma, Monitoring"
      demoUrl="https://uptime-kuma.rachakondadharmendra.info/status/portfolio"
    />
    <ProjectCard
      title="Error Code Templates"
      summary="This repository provides pre-made and customizable error code templates using React.js, ideal for developers to use in their projects."
      techStack="Reactjs, HTML, CSS, JavaScript"
      githubUrl="https://github.com/rachakondadharmendra/Error-Code-Templates"
      demoUrl="https://rachakondadharmendra.github.io/Error-Code-Templates/"
    />
    <ProjectCard
      title="Portfolio Website v1.0"
      summary="This is a static portfolio website built using HTML, CSS, and JavaScript, offering a straightforward user experience. [Note: To view website, please use incognito mode]"
      techStack="HTML, CSS, JavaScript (Static Website)"
      githubUrl="https://github.com/rachakondadharmendra/Portfolio-v1.0"
      demoUrl="https://rachakondadharmendra.github.io/Portfolio-v1.0/"
    />
    {/* Add more ProjectCard components for other projects */}
  </div>
</section>


      <section id="contact">
        <div className="contact-container">
          <div className="contact-image">
            <img src={`${imageUrl}/getintouch_image.jpg`} alt="ContactImage" />
          </div>
          {/* Conditional rendering based on submission status */}
          {submissionStatus !== 'success' ? (
          <div className="contact-form">
            <h2 className="section-title animate-text">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder=" " value={formData.name} onChange={handleChange} required />
                <label htmlFor="name" className="form-label">
                  <i className="fas fa-user"></i>
                  Name
                </label>
              </div>

              <div className="form-group">
                <input type="email" id="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} required />
                <label htmlFor="email" className="form-label">
                  <i className="fas fa-envelope"></i>
                  Email
                </label>
              </div>

              <div className="form-group">
                <textarea id="message" name="message" placeholder=" " value={formData.message} onChange={handleChange} required></textarea>
                <label htmlFor="message" className="form-label">
                  <i className="fas fa-pencil-alt"></i>
                  Message
                </label>
              </div>

              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
         ) : (
          <div className="success-message">
            <i className="fas fa-check-circle"></i>
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
         )}
        </div>
      </section>
    </main>
  );
}

export default Content;
