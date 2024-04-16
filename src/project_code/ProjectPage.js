import React from 'react';
import { useParams } from 'react-router-dom';
//import '../styles/ProjectPage.css';

const ProjectPage = () => {
  const { projectId } = useParams();

  // Replace this with your actual project data
  const projectData = {
    id: projectId,
    title: 'Continuous Integration and Delivery Pipeline',
    description: 'A robust CI/CD pipeline for streamlining software delivery and ensuring code quality.',
    overview: {
      summary: 'This project aims to automate the software development lifecycle, enabling faster and more reliable deployments.',
      keyFeatures: [
        'Automated build and testing processes',
        'Containerized application deployments',
        'Integrated code quality checks',
        'Kubernetes integration for scalability',
      ],
    },
    visualRepresentation: {
      gifUrl: 'https://example.com/cicd-pipeline.gif',
      screenshots: [
        'https://example.com/screenshot1.png',
        'https://example.com/screenshot2.png',
      ],
    },
    technicalDetails: {
      technologiesUsed: ['Jenkins', 'Docker', 'Kubernetes', 'Git', 'Terraform'],
      architectureDiagram: 'https://example.com/architecture-diagram.png',
    },
    implementationHighlights: {
      pipelineOverview: 'The CI/CD pipeline is implemented using Jenkins and consists of stages for building, testing, and deploying the application to a Kubernetes cluster.',
      kubernetesIntegration: 'Kubernetes is used for managing containerized application deployments, enabling automatic scaling and load balancing.',
    },
    resultsAndImpact: {
      successMetrics: [
        'Deployment frequency increased from once per month to multiple times per day',
        'Reduced time to market by 50%',
        'Improved system reliability with automated testing and monitoring',
      ],
      businessImpact: 'The CI/CD pipeline has significantly improved productivity and enabled faster delivery of new features, resulting in increased customer satisfaction and competitive advantage.',
    },
    callToAction: {
      furtherExploration: 'Check out the project repository on GitHub: https://github.com/example/cicd-pipeline',
      contactInformation: 'For inquiries or collaboration opportunities, please contact us at hello@example.com.',
    },
  };

  return (
    <div>
      <h2>{projectData.title}</h2>
      <p>{projectData.description}</p>

      <section>
        <h3>Overview</h3>
        <p>{projectData.overview.summary}</p>
        <h4>Key Features</h4>
        <ul>
          {projectData.overview.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Visual Representation</h3>
        <img src={projectData.visualRepresentation.gifUrl} alt="Project GIF" />
        {projectData.visualRepresentation.screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
        ))}
      </section>

      <section>
        <h3>Technical Details</h3>
        <h4>Technologies Used</h4>
        <ul>
          {projectData.technicalDetails.technologiesUsed.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
        <img src={projectData.technicalDetails.architectureDiagram} alt="Architecture Diagram" />
      </section>

      <section>
        <h3>Implementation Highlights</h3>
        <p>{projectData.implementationHighlights.pipelineOverview}</p>
        <p>{projectData.implementationHighlights.kubernetesIntegration}</p>
      </section>

      <section>
        <h3>Results and Impact</h3>
        <h4>Success Metrics</h4>
        <ul>
          {projectData.resultsAndImpact.successMetrics.map((metric, index) => (
            <li key={index}>{metric}</li>
          ))}
        </ul>
        <p>{projectData.resultsAndImpact.businessImpact}</p>
      </section>

      <section>
        <h3>Call to Action</h3>
        <p>{projectData.callToAction.furtherExploration}</p>
        <p>{projectData.callToAction.contactInformation}</p>
      </section>
    </div>
  );
};

export default ProjectPage;