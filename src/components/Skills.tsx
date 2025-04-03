
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  // Technical Skills with proficiency ratings
  const technicalSkills = [
    { name: "Network Design & Architecture", proficiency: 95 },
    { name: "Network Security", proficiency: 90 },
    { name: "Cisco Networking", proficiency: 95 },
    { name: "Juniper Networking", proficiency: 85 },
    { name: "Cloud Networking (AWS, Azure)", proficiency: 80 },
    { name: "Routing Protocols (BGP, OSPF, EIGRP)", proficiency: 90 },
    { name: "LAN/WAN Technologies", proficiency: 95 },
    { name: "Network Troubleshooting", proficiency: 95 },
    { name: "SD-WAN", proficiency: 85 },
    { name: "Network Automation", proficiency: 80 },
    { name: "Python", proficiency: 75 },
    { name: "Bash Scripting", proficiency: 85 },
  ];

  // Certifications
  const certifications = [
    { name: "Cisco Certified Network Professional (CCNP)", issuer: "Cisco", year: "2020" },
    { name: "Juniper Networks Certified Professional (JNCP)", issuer: "Juniper", year: "2019" },
    { name: "CompTIA Network+", issuer: "CompTIA", year: "2017" },
    { name: "ITIL Foundation", issuer: "Axelos", year: "2018" },
    { name: "AWS Certified Advanced Networking", issuer: "Amazon Web Services", year: "2021" },
    { name: "Certified Information Systems Security Professional (CISSP)", issuer: "ISC2", year: "2022" },
  ];

  // Tools and technologies
  const tools = [
    "Cisco IOS/NX-OS", "Juniper Junos", "Palo Alto", "Wireshark", "SolarWinds",
    "Splunk", "PRTG", "Ansible", "Nagios", "Grafana", "Git", "Jira", 
    "Python", "Bash", "Zabbix", "Cacti", "VMware NSX", "Terraform"
  ];

  return (
    <section id="skills" className="py-20 bg-tech-gray-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Skills & Certifications</h2>
          <p className="text-tech-gray max-w-3xl mx-auto">
            My technical expertise, professional certifications, and the technologies I work with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div>
            <h3 className="section-subheading">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-tech-gray-dark font-medium">{skill.name}</span>
                    <span className="text-tech-blue text-sm">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" 
                    indicatorClassName="bg-gradient-to-r from-tech-blue to-tech-teal" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <h3 className="section-subheading">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-tech-blue-dark">{cert.name}</h4>
                    <div className="flex justify-between mt-1">
                      <span className="text-tech-gray text-sm">{cert.issuer}</span>
                      <span className="text-tech-gray text-sm">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools and Technologies */}
            <div>
              <h3 className="section-subheading">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} className="bg-white text-tech-blue-dark border border-tech-blue/20">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
