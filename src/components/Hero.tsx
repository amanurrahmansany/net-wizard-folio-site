
import React from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, Server, Cpu, ChartNetwork } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center network-grid relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <div>
              <span className="text-tech-teal font-medium">Senior Networking Engineer</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-tech-blue-dark">
                Building & Securing <br />
                <span className="text-tech-blue">Network Infrastructure</span>
              </h1>
            </div>
            
            <p className="text-lg text-tech-gray-dark max-w-lg">
              Expertise in designing, implementing, and troubleshooting complex network systems with a focus on performance, security, and reliability.
            </p>
            
            <div className="flex space-x-4 pt-2">
              <Button className="bg-tech-blue hover:bg-tech-blue-dark">
                View Projects
              </Button>
              <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue/10">
                Contact Me
              </Button>
            </div>

            <div className="flex items-center space-x-4 mt-8 text-tech-gray">
              <div className="flex items-center">
                <Cpu className="h-5 w-5 mr-2 text-tech-blue" />
                <span>NOC Operations</span>
              </div>
              <div className="flex items-center">
                <Server className="h-5 w-5 mr-2 text-tech-blue" />
                <span>Infrastructure</span>
              </div>
              <div className="flex items-center">
                <ChartNetwork className="h-5 w-5 mr-2 text-tech-blue" />
                <span>Networking</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/20 to-tech-teal/20 rounded-xl transform rotate-6 scale-105"></div>
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-4 border border-tech-gray-light">
                <div className="bg-tech-blue-dark rounded-lg p-3 text-white mb-3 flex items-center">
                  <Monitor className="mr-2 h-5 w-5" />
                  <span className="font-mono text-sm">network_monitoring.sh</span>
                </div>
                <div className="font-mono text-sm text-tech-gray-dark space-y-1">
                  <p><span className="text-green-500">●</span> Network Status: Operational</p>
                  <p><span className="text-tech-blue">$</span> Running diagnostics...</p>
                  <p><span className="text-amber-500">!</span> Optimizing traffic routing</p>
                  <p><span className="text-tech-blue">$</span> Packet loss: 0.01%</p>
                  <p><span className="text-tech-blue">$</span> Latency: 2.3ms</p>
                  <p><span className="text-green-500">●</span> Security protocols active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-tech-teal opacity-5 rounded-full filter blur-3xl"></div>
      <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-tech-blue opacity-5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
