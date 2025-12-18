import React, { useState } from 'react';
import subtitleIcon from '../../assets/images/subtitle-icon.png';

// // Import Frontend Technologies
// import ReactIcon from '../../assets/images/technology/react.png';
// import AngularIcon from '../../assets/images/technology/angular.png';
// import VueIcon from '../../assets/images/technology/vue.png';

// // Import Backend Technologies
// import NodeIcon from '../../assets/images/technology/node.png';
// import PythonIcon from '../../assets/images/technology/python.png';
// import JavaIcon from '../../assets/images/technology/java.png';

// // Import Mobile Technologies
// import FlutterIcon from '../../assets/images/technology/flutter.png';
// import ReactNativeIcon from '../../assets/images/technology/react-native.png';
// import KotlinIcon from '../../assets/images/technology/kotlin.png';

// // Import Database Technologies
// import MongoDBIcon from '../../assets/images/technology/mongodb.png';
// import MySQLIcon from '../../assets/images/technology/mysql.png';
// import PostgreSQLIcon from '../../assets/images/technology/postgresql.png';
import DataScience from '../../assets/images/svg/services/ai.png'

const ToolsStack = () => {
  const [activeTab, setActiveTab] = useState('frontend');


  const techCategories = {
    frontend: [DataScience, DataScience, DataScience,DataScience, DataScience, DataScience],
    backend: ['tech52.png', 'tech53.png', 'tech54.png', 'tech55.png', 'tech56.png'],
    mobile: ['tech45.png', 'tech46.png', 'tech47.png', 'tech48.png', 'tech49.png'],
    database: ['tech7.png', 'tech8.png', 'tech9.png', 'tech10.png', 'tech11.png'],
    cloud: ['tech42.png', 'tech43.png', 'tech44.png'],
    devops: ['tech36.png', 'tech37.png', 'tech38.png', 'tech39.png', 'tech40.png'],
    crm: ['tech31.png', 'tech32.png', 'tech33.png', 'tech34.png', 'tech35.png'],
    cms: ['tech24.png', 'tech25.png', 'tech26.png', 'tech27.png', 'tech28.png']
  };

  return (
    <section className="space-ptb bg-dark">
      <div className="container" data-aos="fade-up">
        <div className="techno-head text-center mb-10">
          <h3 className="text-white">
            Tailored Technologies to Conquer <br/> Your Development Challenges
          </h3>
          <p className="subtitle text-white-50">
            Harness the power of our advanced technologies to elevate user interaction and drive engagement.
          </p>
        </div>

        <div className="tech-expertise-flex">
          <div className="tech-expertise-left">
            <nav>
              <div className="nav nav-tabs d-flex position-relative gap-25" id="myTab" role="tablist">
                {Object.keys(techCategories).map((category) => (
                  <button
                    key={category}
                    className={`nav-link position-relative ${activeTab === category ? 'active' : ''}`}
                    onClick={() => setActiveTab(category)}
                  >
                    <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          <div className="tech-expertise-right mt-4">
            <div className="tab-content">
              <div className="tab-pane active">
                <div className="d-flex flex-wrap justify-content-center gap-15 tab-solution">
                  {techCategories[activeTab].map((tech, index) => (
                    <div key={index} className="technologyBlock-item">
                      <div className="tech-icon-wrapper p-4">
                        <img 
                          src={tech} 
                          alt={`Technology ${index + 1}`} 
                          className="img-fluid" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsStack;