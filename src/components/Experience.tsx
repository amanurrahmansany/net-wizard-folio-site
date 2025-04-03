
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Network Engineer",
      company: "Global Tech Solutions",
      period: "2020 - Present",
      description: "Lead a team of network engineers in managing and optimizing enterprise-grade network infrastructure for Fortune 500 clients. Reduced network downtime by 35% through implementation of advanced monitoring systems and proactive maintenance protocols.",
      achievements: [
        "Designed and implemented a redundant network architecture that improved uptime to 99.99%",
        "Led migration to SD-WAN technology across 50+ global locations",
        "Developed automated scripts for routine network diagnostics and issue resolution",
        "Managed network security strategy, reducing security incidents by 40%"
      ],
      technologies: ["Cisco", "Juniper", "Palo Alto", "VMware NSX", "Python", "Ansible"]
    },
    {
      title: "Network Operations Engineer",
      company: "DataStream Communications",
      period: "2017 - 2020",
      description: "Managed NOC operations for a telecommunications provider serving over 100,000 business customers. Responsible for troubleshooting complex network issues and ensuring 24/7 availability of critical services.",
      achievements: [
        "Orchestrated network operations during major service expansion to 5 new regions",
        "Implemented ITIL practices for incident and problem management",
        "Reduced mean time to repair (MTTR) by 25% through improved processes",
        "Trained and mentored junior engineers on network protocols and troubleshooting"
      ],
      technologies: ["MPLS", "BGP", "OSPF", "VPN", "Wireshark", "SolarWinds"]
    },
    {
      title: "Network Administrator",
      company: "FinTech Innovations",
      period: "2015 - 2017",
      description: "Maintained and supported network infrastructure for a financial technology company with strict compliance and security requirements. Ensured continuous availability of trading platforms and payment systems.",
      achievements: [
        "Managed migration from legacy systems to modern network infrastructure",
        "Implemented PCI-DSS compliant network segmentation",
        "Designed and deployed disaster recovery solutions for critical systems",
        "Created comprehensive network documentation and standard operating procedures"
      ],
      technologies: ["Cisco Meraki", "Firewall", "VLANs", "Load Balancing", "AWS Direct Connect"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-tech-gray-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Professional Experience</h2>
          <p className="text-tech-gray max-w-3xl mx-auto">
            My career journey in network engineering and operations, where I've solved complex challenges and delivered robust solutions.
          </p>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-1">
                <h3 className="text-xl font-bold text-tech-blue-dark">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="text-tech-blue font-medium">{exp.company}</span>
                  <span className="text-tech-gray text-sm">{exp.period}</span>
                </div>
              </div>
              
              <p className="text-tech-gray-dark my-3">{exp.description}</p>
              
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-tech-gray-dark mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1 text-tech-gray-dark text-sm">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-tech-blue/5 text-tech-blue border-tech-blue/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
