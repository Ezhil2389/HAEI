import { notFound } from 'next/navigation';
import JobDetailContent from './JobDetailContent';

// Job openings data
const jobOpeningsData = [
  {
    id: "sr-software-engineer-cloud-infrastructure",
    title: "Sr. Software Engineer, Cloud Infrastructure",
    location: "Bangalore, India",
    type: "Full-time",
    department: "Engineering",
    description: "Join our Cloud Infrastructure team to design and implement scalable, resilient cloud solutions for enterprise applications.",
    responsibilities: [
      "Design and implement cloud infrastructure components using AWS, Azure, or GCP",
      "Develop automation scripts and infrastructure as code using tools like Terraform or CloudFormation",
      "Implement and maintain CI/CD pipelines for infrastructure deployment",
      "Collaborate with development teams to optimize application performance on cloud platforms",
      "Troubleshoot infrastructure issues and implement solutions to prevent recurrence",
      "Stay up-to-date with emerging cloud technologies and best practices"
    ],
    requirements: [
      "5+ years of experience in software engineering with at least 3 years in cloud infrastructure",
      "Strong experience with at least one major cloud provider (AWS, Azure, or GCP)",
      "Experience with infrastructure as code tools (Terraform, CloudFormation, etc.)",
      "Knowledge of containerization technologies (Docker, Kubernetes)",
      "Strong scripting skills (Python, Bash, PowerShell)",
      "Good understanding of networking concepts and security principles",
      "Bachelor's degree in Computer Science or a related field"
    ],
    preferred: [
      "Experience with microservices architecture",
      "Knowledge of observability and monitoring tools",
      "Certifications from major cloud providers",
      "Experience with database technologies (SQL and NoSQL)",
      "Understanding of DevOps practices and culture"
    ]
  },
  {
    id: "product-manager-connected-mobility",
    title: "Product Manager, Connected Mobility",
    location: "Detroit, USA",
    type: "Full-time",
    department: "Product",
    description: "Lead the product development for our connected mobility solutions, working at the intersection of automotive and digital technologies.",
    responsibilities: [
      "Define and drive the product strategy for connected mobility solutions",
      "Work with engineering teams to translate business requirements into technical specifications",
      "Collaborate with design teams to create intuitive and engaging user experiences",
      "Conduct market research and competitive analysis to identify opportunities",
      "Gather and analyze user feedback to inform product decisions",
      "Create and maintain product roadmaps and backlog"
    ],
    requirements: [
      "3+ years of experience in product management",
      "Experience in mobility, transportation, or automotive industries",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management abilities",
      "Experience with agile development methodologies",
      "Bachelor's degree in Business, Engineering, or related field"
    ],
    preferred: [
      "MBA or Master's degree",
      "Experience with connected vehicle technologies",
      "Knowledge of IoT platforms and technologies",
      "Understanding of UX design principles",
      "Background in technology and software development"
    ]
  },
  {
    id: "data-scientist-ai-research",
    title: "Data Scientist, AI Research",
    location: "Berlin, Germany",
    type: "Full-time",
    department: "Research",
    description: "Develop cutting-edge machine learning models and algorithms to solve complex problems in the automotive and mobility domains.",
    responsibilities: [
      "Research and develop novel machine learning algorithms and models",
      "Apply deep learning techniques to solve complex problems in mobility",
      "Collaborate with engineering teams to implement models in production systems",
      "Analyze large datasets to identify patterns and insights",
      "Create prototypes to demonstrate new capabilities",
      "Stay current with the latest research in AI and machine learning"
    ],
    requirements: [
      "Ph.D. or Master's degree in Computer Science, Machine Learning, or related field",
      "Strong background in machine learning and deep learning techniques",
      "Experience with ML frameworks (TensorFlow, PyTorch)",
      "Proficiency in Python and data analysis libraries",
      "Good understanding of statistics and mathematical concepts",
      "Track record of implementing ML models to solve real-world problems"
    ],
    preferred: [
      "Experience in computer vision or natural language processing",
      "Publications in top-tier ML conferences or journals",
      "Experience in the automotive or mobility domain",
      "Knowledge of distributed computing frameworks",
      "Experience with ML model deployment and MLOps"
    ]
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    location: "Munich, Germany",
    type: "Full-time",
    department: "Engineering",
    description: "Join our DevOps team to build and maintain our CI/CD pipelines, infrastructure, and deployment automation for our cutting-edge mobility solutions.",
    responsibilities: [
      "Design, implement and maintain CI/CD pipelines using tools like Jenkins, GitHub Actions, or GitLab CI",
      "Automate infrastructure provisioning and configuration using IaC tools",
      "Implement monitoring, logging, and alerting solutions",
      "Collaborate with development teams to optimize deployment workflows",
      "Troubleshoot and resolve infrastructure and deployment issues",
      "Implement and maintain security best practices in the CI/CD pipeline"
    ],
    requirements: [
      "3+ years of experience in DevOps or Site Reliability Engineering",
      "Strong experience with CI/CD tools and practices",
      "Proficiency in containerization technologies (Docker, Kubernetes)",
      "Experience with infrastructure as code (Terraform, CloudFormation, Ansible)",
      "Strong scripting skills (Bash, Python)",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Bachelor's degree in Computer Science or equivalent experience"
    ],
    preferred: [
      "Experience with microservices architecture",
      "Knowledge of observability tools (Prometheus, Grafana, ELK stack)",
      "Experience with database management and operations",
      "Security certifications or experience with DevSecOps",
      "Experience in the automotive or mobility industry"
    ]
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Designer",
    location: "Bangalore, India",
    type: "Full-time",
    department: "Design",
    description: "Create intuitive and engaging user experiences for our enterprise software products and mobility applications.",
    responsibilities: [
      "Design user-centered interfaces for web and mobile applications",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Collaborate with product managers and engineers to implement designs",
      "Develop and maintain design systems and UI component libraries",
      "Stay current with UX/UI design trends and best practices"
    ],
    requirements: [
      "3+ years of experience in UX/UI design for digital products",
      "Strong portfolio demonstrating user-centered design process",
      "Proficiency with design and prototyping tools (Figma, Sketch, Adobe XD)",
      "Experience with responsive design and mobile-first approaches",
      "Understanding of accessibility standards and practices",
      "Bachelor's degree in Design, HCI, or related field"
    ],
    preferred: [
      "Experience in automotive or mobility industry",
      "Knowledge of frontend development (HTML, CSS, JavaScript)",
      "Experience with design systems and component libraries",
      "Background in user research and testing methodologies",
      "Understanding of data visualization principles"
    ]
  },
  {
    id: "technical-program-manager",
    title: "Technical Program Manager",
    location: "Tokyo, Japan",
    type: "Full-time",
    department: "Engineering",
    description: "Coordinate complex technical programs across multiple teams and ensure successful delivery of strategic initiatives.",
    responsibilities: [
      "Lead cross-functional technical programs from conception to launch",
      "Develop project plans, timelines, and resource requirements",
      "Identify dependencies, risks, and mitigation strategies",
      "Facilitate communication and collaboration between teams",
      "Track program progress and provide regular status updates",
      "Drive issue resolution and remove obstacles to program success"
    ],
    requirements: [
      "5+ years of experience in technical program management",
      "Strong understanding of software development lifecycle",
      "Experience managing complex, cross-functional initiatives",
      "Excellent communication and stakeholder management skills",
      "Strong analytical and problem-solving abilities",
      "Bachelor's degree in Computer Science, Engineering, or related field"
    ],
    preferred: [
      "PMP, Scrum Master, or other project management certifications",
      "Experience in automotive or mobility industry",
      "Technical background in software development or engineering",
      "Experience with agile and lean methodologies",
      "Knowledge of Japanese language and business culture"
    ]
  }
];

// Generate static params for each job posting
export async function generateStaticParams() {
  return jobOpeningsData.map((job) => ({
    jobId: job.id,
  }));
}

export default function JobDetailPage({ params }: { params: { jobId: string } }) {
  const jobId = params.jobId;
  
  // Find the job matching the jobId
  const job = jobOpeningsData.find(job => job.id === jobId);
  
  // If no job found, return 404
  if (!job) {
    notFound();
  }

  return <JobDetailContent job={job} relatedJobs={jobOpeningsData.filter(j => j.id !== jobId)} />;
} 