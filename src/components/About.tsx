
import React from 'react';
import { Server, Wifi, Clock, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">About Me</h2>
          <p className="text-tech-gray max-w-3xl mx-auto">
            A dedicated Network Operations Center (NOC) Engineer with over 10 years of experience
            in monitoring, maintaining, and optimizing complex network infrastructures.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="prose max-w-none">
              <p className="text-tech-gray-dark">
                I specialize in designing and implementing robust network solutions that ensure business
                continuity and optimal performance. My experience spans across various industries including
                telecommunications, finance, and healthcare, where I've successfully led teams in managing
                critical infrastructure.
              </p>
              <p className="text-tech-gray-dark mt-4">
                My approach combines proactive monitoring with rapid problem resolution, ensuring 
                minimal downtime and maximum efficiency. I'm passionate about keeping up with emerging
                technologies and implementing them to improve network reliability and security.
              </p>
              <p className="text-tech-gray-dark mt-4">
                When I'm not troubleshooting network issues, I enjoy contributing to open-source
                projects and mentoring junior engineers in the field. I believe in knowledge sharing
                as a way to strengthen the IT community and drive innovation.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h3 className="section-subheading">Core Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-tech-gray-light bg-opacity-30 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Server className="h-6 w-6 text-tech-blue mr-3" />
                  <h4 className="font-semibold text-tech-blue-dark">Network Infrastructure</h4>
                </div>
                <p className="text-tech-gray-dark text-sm">
                  Design and implementation of scalable and resilient network architectures using Cisco, Juniper, and other enterprise solutions.
                </p>
              </div>
              
              <div className="bg-tech-gray-light bg-opacity-30 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <ShieldCheck className="h-6 w-6 text-tech-blue mr-3" />
                  <h4 className="font-semibold text-tech-blue-dark">Network Security</h4>
                </div>
                <p className="text-tech-gray-dark text-sm">
                  Implementation of security protocols, firewalls, and intrusion detection systems to safeguard critical network assets.
                </p>
              </div>
              
              <div className="bg-tech-gray-light bg-opacity-30 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Wifi className="h-6 w-6 text-tech-blue mr-3" />
                  <h4 className="font-semibold text-tech-blue-dark">Connectivity Solutions</h4>
                </div>
                <p className="text-tech-gray-dark text-sm">
                  Expertise in WAN, LAN, MPLS, SD-WAN, and VPN technologies for seamless and secure connectivity.
                </p>
              </div>
              
              <div className="bg-tech-gray-light bg-opacity-30 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Clock className="h-6 w-6 text-tech-blue mr-3" />
                  <h4 className="font-semibold text-tech-blue-dark">24/7 NOC Operations</h4>
                </div>
                <p className="text-tech-gray-dark text-sm">
                  Round-the-clock monitoring, incident management, and rapid problem resolution to minimize downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
