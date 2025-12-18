import { Code, Server, Globe, Shield, Database, Cloud, Layout, Terminal, Brain, Lock, Smartphone, Laptop } from 'lucide-react';

export const methodologyData = {
  webDev: {
    title: "Web Development",
    icon: <Code className="w-6 h-6 text-blue-600" />,
    steps: [
      {
        title: "Planning & Requirement Analysis",
        description: "Define the purpose and goals of the website. Identify the target audience and user needs. Conduct market research and competitor analysis and Plan the website architecture and features."
      },
      {
        title: "Design & Prototyping",
        description: "Create wireframes and mockups using tools like Figma, Adobe XD, or Sketch, design responsive and accessible UI/UX elements, and gather feedback for iterative improvements."
      },
      {
        title: "Development",
        description: "For frontend development, convert designs into HTML, CSS, and JavaScript (or frameworks like React, Vue, or Angular), ensure responsiveness with Tailwind CSS or Bootstrap, and add interactivity using JavaScript or TypeScript. For backend development, set up server-side logic with Node.js, Python (Django/Flask), PHP, or Ruby on Rails, develop REST or GraphQL APIs"
      },
      {
        title: "Testing & Debugging",
        description: "Perform unit, integration, and user acceptance testing using frameworks like Jest, Mocha, or Cypress, ensure cross-browser compatibility, and optimize the site for performance, security, and SEO"
      },
      {
        title: "Deployment & Hosting",
        description: "Choose a hosting provider like Vercel, Netlify, AWS, or Firebase, deploy the web application to a live server, set up CI/CD pipelines using GitHub Actions or Jenkins for automated deployment, and configure domain settings with SSL certificates"
      },
      {
        title: "Maintenance & Updates",
        description: "Monitor website performance, fix bugs, update content and features based on user feedback, apply security patches, and scale infrastructure as needed for increased traffic"
      }
    ]
  },
  devOps: {
    title: "DevOps",
    icon: <Server className="w-6 h-6 text-green-600" />,
    steps: [
      {
        title: "Infrastructure as Code",
        description: "Automated infrastructure provisioning and management using Terraform, AWS CloudFormation, and Ansible."
      },
      {
        title: "CI/CD Pipeline",
        description: "Automated build, test, and deployment pipelines using GitHub Actions, Jenkins, AWS CodePipeline, and GitLab CI/CD."
      },
      {
        title: "Monitoring & Logging",
        description: "Comprehensive system monitoring and log management using Prometheus, Grafana, ELK Stack, and AWS CloudWatch."
      },
      {
        title: "Security & Compliance (DevSecOps)",
        description: "Implementation of DevSecOps practices with Shift Left Security using tools like Snyk, Aqua Security, and HashiCorp Vault."
      },
      {
        title: "Performance Optimization",
        description: "Continuous system optimization and scaling using cloud-native approaches like microservices, containers, Kubernetes, and serverless computing with AWS Lambda or Azure Functions."
      },
      {
        title: "Service Models (SaaS, PaaS, IaaS)",
        description: "IaaS provides virtualized computing resources (e.g., AWS EC2, Azure VMs), PaaS offers managed development environments (e.g., Google App Engine, AWS Elastic Beanstalk), and SaaS delivers software applications over the internet (e.g., Google Workspace, Dropbox)."
      },
      {
        title: "Deployment Models",
        description: "Cloud computing models include Public Cloud (shared infrastructure managed by third parties), Private Cloud (dedicated infrastructure for single organizations), Hybrid Cloud (combining public and private clouds), and Multi-Cloud (utilizing multiple providers for flexibility and redundancy)."
      },
      {
        title: "Configuration Management",
        description: "Use tools like Chef, Puppet, and Ansible to standardize and automate system configurations."
      },
      {
        title: "Agile & Collaboration",
        description: "Use Agile project management methodologies like Scrum and Kanban, leveraging collaboration tools such as Jira, Slack, and Confluence."
      }
    ]
  },
  bigData: {
    title: "Big Data",
    icon: <Database className="w-6 h-6 text-purple-600" />,
    steps: [
      {
        title: "Data Acquisition & Collection",
        description: "Gathering structured, semi-structured, and unstructured data from multiple sources such as databases, IoT devices, social media, and web logs. This step involves APIs, streaming data, batch processing, and ETL pipelines."
      },
      {
        title: "Data Storage & Management",
        description: "Storing massive datasets in scalable storage solutions such as cloud storage, data lakes, and distributed databases (HDFS, Apache Hadoop, AWS S3). Ensuring data integrity, security, and accessibility is a key focus."
      },
      {
        title: "Data Processing & ETL",
        description: "Transforming raw data into structured, usable formats using Extract, Transform, Load (ETL) or ELT processes. Tools like Apache Spark, Apache Kafka, and Talend help in processing real-time and batch data efficiently."
      },
      {
        title: "Data Cleaning & Preprocessing",
        description: "Ensuring data quality by removing duplicates, handling missing values, standardizing formats, and detecting anomalies. This step improves data accuracy for further analysis."
      },
      {
        title: "Data Analysis & Machine Learning",
        description: "Applying statistical models, AI algorithms, and machine learning techniques to discover patterns, trends, and predictions. Tools like TensorFlow, PyTorch, and Scikit-learn are commonly used in this phase."
      },
      {
        title: "Data Visualization & Reporting",
        description: "Presenting insights through dashboards, charts, and reports using tools like Tableau, Power BI, and Matplotlib. This step helps businesses make data-driven decisions effectively."
      },
      {
        title: "Data Security & Governance",
        description: "Implementing data encryption, access controls, and compliance policies (GDPR, HIPAA, CCPA) to ensure privacy and security while handling sensitive data."
      },
      {
        title: "Data Scalability & Performance Optimization",
        description: "Optimizing data pipelines and infrastructure using distributed computing, caching mechanisms, and cloud-based solutions to handle growing data volumes efficiently."
      },
      {
        title: "Continuous Monitoring & Optimization",
        description: "Monitoring system performance, data accuracy, and model effectiveness to refine processes and enhance overall data-driven strategies."
      }
    ]
  },
 cyberSecurity: {
    title: "Cyber Security", 
    icon: <Lock className="w-6 h-6 text-red-600" />,
    steps: [
      {
        title: "Security Assessment",
        description: "A comprehensive evaluation of system security, including risk assessments, penetration testing, vulnerability scanning, and compliance checks to identify potential weaknesses and security gaps."
      },
      {
        title: "Threat Detection",
        description: "Implementation of advanced security monitoring systems such as Intrusion Detection Systems (IDS), Intrusion Prevention Systems (IPS), Security Information and Event Management (SIEM), and AI-based anomaly detection to identify and neutralize potential cyber threats in real time."
      },
      {
        title: "Prevention Strategy",
        description: "Development and enforcement of robust security policies, access controls, data encryption methods, endpoint protection, and firewall configurations to prevent unauthorized access, insider threats, and cyberattacks."
      },
      {
        title: "Incident Response",
        description: "Creation of a well-defined incident response plan (IRP), including threat containment, forensic analysis, root cause identification, mitigation strategies, recovery planning, and communication protocols to minimize damage and restore normal operations efficiently."
      },
      {
        title: "Security Training",
        description: "Conducting regular security awareness training programs for employees, covering topics such as phishing attack prevention, password hygiene, social engineering tactics, ransomware awareness, secure coding practices, and compliance requirements."
      },
      {
        title: "Continuous Monitoring",
        description: "Ongoing surveillance of network traffic, system logs, application behavior, and endpoint activity to detect anomalies, prevent data breaches, and enhance proactive cybersecurity management using AI-driven analytics and behavioral analysis."
      },
      {
        title: "Compliance & Governance",
        description: "Ensuring adherence to industry standards and regulatory frameworks such as GDPR, NIST, ISO 27001, HIPAA, SOC 2, and PCI-DSS by implementing governance policies, conducting security audits, risk assessments, and maintaining cybersecurity best practices."
      },

    
   
      {
        title: "Threat Intelligence & Hunting",
        description: "Leveraging global threat intelligence feeds, security analytics, and proactive threat-hunting techniques to identify and mitigate emerging cyber threats before they exploit vulnerabilities."
      },
      {
        title: "Penetration Testing & Red Teaming",
        description: "Conducting ethical hacking, simulated cyberattacks, and red teaming exercises to assess security defenses, identify exploitable vulnerabilities, and strengthen overall security posture against sophisticated cyber threats."
      }
    ]
  },

  dataScience: {
    title: "Data Science",
    icon: <Brain className="w-6 h-6 text-indigo-600" />,
    steps: [
      {
        title: "Problem Definition",
        description: "Identify the business or research problem. Define the objectives and scope of the analysis. Understand stakeholders' requirements"
      },
      {
        title: "Data Collection",
        description: "Gather relevant data from various sources (databases, APIs, web scraping, sensors, etc.) and Ensure data quality and completeness."
      },
      {
        title: "Data Cleaning & Preprocessing",
        description: "Handle missing values, outliers, and inconsistencies.Convert data into a usable format ,Normalize or standardize numerical features and Encode categorical variables."
      },
      {
        title: "Exploratory Data Analysis (EDA)",
        description: "Use statistical techniques and visualization tools (histograms, scatter plots, correlation matrices, etc.).Identify patterns, trends, and relationships and Check for anomalies or biases in data."
      },
     
      {
        title: "Feature Engineering",
        description: "Select relevant features to improve model performance .Create new features from existing data and Reduce dimensionality if needed (e.g., PCA, feature selection techniques)"
      },
      {
        title: "Model Selection & Training",
        description: "Choose appropriate machine learning models (supervised, unsupervised, reinforcement learning) . Train the model using training data and Tune hyperparameters for optimization."
      },
      {
        title: "Model Deployment",
        description: "Deploy the model into production (using APIs, cloud services, or embedded systems) and Ensure scalability and efficiency in a real-world environment."
      },
      {
        title: "Monitoring & Maintenance",
        description: "Continuously monitor model performance ,Retrain the model with new data if needed and Handle concept drift and adapt to changes in data patterns."
      },
      {
        title: "Communicating Results & Decision Making",
        description: "Present findings using visualizations, dashboards, and reports. Provide actionable insights to stakeholders and Make data-driven decisions."
      }
    ]
  },
  iotAutomation: {
    title: "IoT & Automation",
    icon: <Terminal className="w-6 h-6 text-yellow-600" />,
    steps: [
      {
        title: "Problem Definition & Requirement Analysis",
        description: "Identify the problem, define system requirements, objectives, constraints, and conduct feasibility studies and risk assessments."
      },
      {
        title: "System Architecture Design",
        description: "Define Perception, Network, Edge/Fog Computing, Cloud, and Application layers with suitable connectivity protocols."
      },
      {
        title: "Hardware & Sensor Selection",
        description: "Choose appropriate sensors, microcontrollers/microprocessors, and define power management strategies."
      },
      {
        title: "Communication & Networking",
        description: "Establish wired or wireless communication protocols while ensuring data security."
      },
      {
        title: "Data Processing & Edge Computing",
        description: "Implement local processing to reduce latency and use AI/ML models for real-time decision-making."
      },
      {
        title: "Cloud Integration & Big Data Analytics",
        description: "Store and analyze data using cloud platforms and visualization tools while applying AI/ML for automation."
      },
      {
        title: "Automation & Control Mechanisms",
        description: "Develop logic for automated responses, use actuators and relays, and implement feedback loops."
      },
      {
        title: "Security & Privacy Considerations",
        description: "Ensure secure communication, firmware updates, and compliance with data protection regulations."
      },
      {
        title: "Testing & Validation",
        description: "Perform functional, integration, and stress testing to validate system performance."
      },
      {
        title: "Deployment & Maintenance",
        description: "Deploy in the target environment, enable remote monitoring, and plan for scalability."
      }
    ]
  },  
  systemDesign: {
    title: "System Design",
    icon: <Cloud className="w-6 h-6 text-cyan-600" />,
    steps: [
      {
        title: "Requirements Analysis",
        description: "Gather functional and non-functional requirements by identifying stakeholders, understanding their needs, and defining use cases and user stories."
      },
      {
        title: "Level  Design (HLD) and Low-Level Design (LLD)",
        description: "Define the system architecture (monolithic, microservices, etc.), select technologies and frameworks, identify key components and their interactions, design APIs and database schema, specify detailed module specifications, create class diagrams, sequence diagrams, and data flow diagrams, and establish communication protocols and error handling"
      },
      {
        title: "Component Design",
        description: "Choose the appropriate database type (SQL vs. NoSQL), design the schema with normalization or denormalization, and define indexing and caching strategies for optimal performance."
      },
      {
        title: "Scalability and Performance Consideration",
        description: "Implement load balancing strategies like round-robin and least connections, optimize performance with caching mechanisms such as Redis and Memcached, enhance scalability through database replication and sharding."
      },
      {
        title: "Security Design",
        description: "Implement authentication and authorization using OAuth or JWT, enforce data encryption and hashing, design secure APIs with rate limiting and input validation, and ensure compliance with industry security standards like GDPR and HIPAA."
      },  {
        title: "Deployment Strategy",
        description: "Choose CI/CD pipelines for automation, utilize containerization with Docker and Kubernetes, and define rollback and blue-green deployment strategies for seamless deployments"
      },
      {
        title: "Monitoring & Maintenance",
        description: "Set up observability tools like Prometheus and Grafana, implement logging and alerts using the ELK stack or CloudWatch, and plan for system updates and maintenance."
      }
    ]
  },
  uiux: {
    title: "UI/UX Design",
    icon: <Layout className="w-6 h-6 text-pink-600" />,
    steps: [
      {
        title: "User Research",
        description: "Conduct qualitative and quantitative research to understand user needs, behaviors, and pain points. Methods include user interviews, surveys, competitor analysis, and data analytics to create user personas and define problem statements."
      },
      {
        title: "Information Architecture",
        description: "Organize content and define the structure of the product, ensuring intuitive navigation. This includes sitemaps, content hierarchy, and user flows to enhance the overall usability and experience."
      },
      {
        title: "Wireframing",
        description: "Create low-fidelity design mockups to define layout, functionality, and structure. Tools like Figma, Sketch, or Adobe XD help in developing blueprints of the user interface before adding visual elements."
      },
      {
        title: "Visual Design",
        description: "Develop high-fidelity UI designs with typography, colors, icons, and design components. Ensuring consistency with design systems and accessibility guidelines such as WCAG for an inclusive user experience."
      },
      {
        title: "Prototyping",
        description: "Build interactive prototypes to simulate user interactions and validate design concepts. Tools like Figma, InVision, and Adobe XD help test the usability and functionality of designs before development."
      },
      {
        title: "Usability Testing",
        description: "Conduct usability tests with real users to gather feedback and identify design issues. Use A/B testing, heatmaps, and session recordings to refine the design and improve the overall user experience."
      },
      {
        title: "Interaction Design",
        description: "Enhance user experience through animations, micro-interactions, and transition effects. This step ensures that interactions are engaging, guiding users seamlessly through the product."
      },
      {
        title: "Design Handoff & Implementation",
        description: "Collaborate with developers using tools like Figma Dev Mode or Zeplin to ensure smooth design-to-development handoff. Provide style guides, design specifications, and assets for a pixel-perfect implementation."
      },
      {
        title: "User Feedback & Iteration",
        description: "Continuously improve the design based on user feedback, analytics, and usability insights. This iterative process ensures the product remains user-friendly and aligned with evolving user needs."
      }
    ]
  },
  wordpressDev: {
    title: "WordPress Development",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    steps: [
      {
        title: "Planning & Requirement Analysis",
        description: "Define project goals and objectives, identify the target audience and user needs, choose between custom development or a theme/plugin-based approach, and plan the website architecture, including pages, navigation, and functionality."
      },
      {
        title: "Setting Up the Development Environment",
        description: "Install WordPress locally using tools like LocalWP, XAMPP, or Docker, set up version control with Git, configure a MySQL or MariaDB database, and choose a theme framework (custom, child theme, or pre-built)."
      },
      {
        title: "Design & Theme Development",
        description: "Create wireframes or mockups using tools like Figma or Adobe XD, develop or modify a custom theme, build templates with HTML, CSS, JavaScript, and PHP, implement responsive design using Tailwind or Bootstrap, and ensure accessibility and SEO-friendly design."
      },
      {
        title: "Plugin Selection & Development",
        description: "Identify and integrate necessary plugins for SEO, security, and performance, develop custom plugins if needed, follow WordPress coding standards with hooks (actions & filters), and test for conflicts and compatibility."
      },
      {
        title: "Content Management & Optimization",
        description: "Structure pages using the WordPress Block Editor (Gutenberg) or page builders, optimize images, cache settings, and database for performance, implement SEO best practices like meta tags, schema, and sitemaps, and ensure multilingual support if needed."
      },
      {
        title: "Performance Optimization",
        description: "Optimize site speed and performance through caching, content delivery networks (CDNs), image optimization, and database cleanups. Utilize tools like WP Rocket, LiteSpeed Cache, or Autoptimize to improve load times."
      },
      {
        title: "Testing & Debugging",
        description: "Test across different browsers and devices, debug issues using tools like WP_DEBUG for PHP, identify and fix security vulnerabilities, and optimize performance with Lighthouse or GTmetrix."
      },
      {
        title: "Deployment & Hosting Setup",
        description: "Choose a reliable hosting provider (Managed WP Hosting, VPS, or Shared Hosting), migrate the website from local to live using tools like WP Migrate DB, set up SSL, caching, and CDN for security and performance, and ensure backup and rollback mechanisms are in place."
      },
      {
        title: "Maintenance & Updates",
        description: "Regularly update WordPress core, themes, and plugins, monitor uptime and security threats, optimize the database by removing unused assets, and collect user feedback to continuously improve the website."
      }
    ]
  },
  appDev: {
    title: "App Development",
    icon: <Smartphone className="w-6 h-6 text-green-400" />,
    steps: [
      {
        title: "Planning & Research",
        description: "Define the app’s purpose, target audience, and business objectives. Conduct market research to analyze competitors and Identify key features and functionalities."
      },
      {
        title: "UI/UX Design",
        description: "Create wireframes and prototypes using tools like Figma or Adobe XD. Focus on user experience (UX) and intuitive navigation. Develop a design system with colors, typography, and components."
      },
      {
        title: "Development",
        description: "Frontend Development (React, Vue.js, Swift, Kotlin, etc.) ,Backend Development (Node.js, Django, Firebase, etc.) ,Database Management (MongoDB, PostgreSQL, Firebase, etc.), and Implement APIs and third-party integrations"
      },
      {
        title: "Testing",
        description: "Unit testing, integration testing, and user acceptance testing. Automated testing with Jest, Cypress, or Selenium and also  Performance and security testing"
      },
      {
        title: "Deployment",
        description: "Set up CI/CD pipelines (GitHub Actions, Jenkins, etc.) and Deploy on App Stores, Play Store, or Web Servers (Netlify, Vercel, AWS)."

      },
      {
        title: "Post-Launch Maintenance",
        description: "Monitor performance and analytic also Gather user feedback for updates and improvements. Release bug fixes and new features."
        
      }
    ]
  }
};

export default methodologyData;
