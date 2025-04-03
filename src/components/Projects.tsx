
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Server, ChartNetwork, Database, Router, ShieldCheck } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Network Redesign",
      description: "Completely rebuilt a multinational corporation's network infrastructure to improve performance, security, and reliability.",
      icon: Router,
      outcomes: [
        "50% reduction in network latency",
        "Implemented redundant systems with 99.99% uptime",
        "Enhanced security posture with zero-trust architecture"
      ],
      technologies: ["Cisco Nexus", "Palo Alto Firewalls", "BGP", "OSPF", "MPLS"],
      link: "#"
    },
    {
      title: "Cloud Migration Strategy",
      description: "Developed and executed a comprehensive plan to migrate on-premises infrastructure to hybrid cloud environment.",
      icon: Server,
      outcomes: [
        "Seamless migration with zero service interruptions",
        "40% cost reduction in infrastructure maintenance",
        "Increased scalability to support business growth"
      ],
      technologies: ["AWS Direct Connect", "Azure ExpressRoute", "SD-WAN", "IPsec VPN"],
      link: "#"
    },
    {
      title: "NOC Monitoring Overhaul",
      description: "Redesigned monitoring systems and alerting protocols to improve incident response times and proactive issue detection.",
      icon: ChartNetwork,
      outcomes: [
        "Reduced MTTR from 45 minutes to 12 minutes",
        "Implemented predictive analytics for potential failures",
        "Created comprehensive dashboards for real-time visibility"
      ],
      technologies: ["Grafana", "Prometheus", "Elasticsearch", "Zabbix", "Python"],
      link: "#"
    },
    {
      title: "Security Incident Response System",
      description: "Developed an automated system for detecting, analyzing, and responding to network security threats in real-time.",
      icon: ShieldCheck,
      outcomes: [
        "85% of security incidents automatically remediated",
        "Reduced threat detection time by 60%",
        "Created comprehensive security playbooks"
      ],
      technologies: ["Splunk", "Cisco ISE", "Ansible", "Bash", "Python"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-tech-gray max-w-3xl mx-auto">
            A selection of networking projects that demonstrate my expertise in designing,
            implementing, and optimizing complex network solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="p-2 rounded-lg bg-tech-blue/10 text-tech-blue">
                    <project.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="text-xl text-tech-blue-dark mt-3">{project.title}</CardTitle>
                <CardDescription className="text-tech-gray-dark">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-tech-gray-dark">Key Outcomes:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-tech-gray-dark text-sm">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-tech-blue/5 text-tech-blue border-tech-blue/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="text-tech-blue">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Case Study
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
