
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, GitHub, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Contact Me</h2>
          <p className="text-tech-gray max-w-3xl mx-auto">
            Interested in collaborating or have a network challenge to solve? Reach out to discuss how I can help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="section-subheading">Let's Connect</h3>
            <p className="text-tech-gray-dark mb-6">
              I'm always open to discussing new projects, interesting networking challenges, 
              or opportunities to contribute my expertise to your team.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-tech-blue/10 text-tech-blue mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm text-tech-gray">Email</h4>
                  <p className="text-tech-gray-dark">contact@networkportfolio.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-tech-blue/10 text-tech-blue mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm text-tech-gray">Phone</h4>
                  <p className="text-tech-gray-dark">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-tech-blue/10 text-tech-blue mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm text-tech-gray">Location</h4>
                  <p className="text-tech-gray-dark">San Francisco, CA, USA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm font-medium text-tech-gray mb-3">Connect on social</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-3 rounded-full bg-tech-gray-light hover:bg-tech-blue/10 text-tech-gray-dark hover:text-tech-blue transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-tech-gray-light hover:bg-tech-blue/10 text-tech-gray-dark hover:text-tech-blue transition-colors">
                  <GitHub className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="section-subheading">Send Me a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-tech-gray-dark">Full Name</label>
                  <Input id="name" placeholder="John Doe" className="border-tech-gray-light" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-tech-gray-dark">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="border-tech-gray-light" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-tech-gray-dark">Subject</label>
                <Input id="subject" placeholder="How can I help you?" className="border-tech-gray-light" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-tech-gray-dark">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your project or inquiry..." 
                  className="min-h-[150px] border-tech-gray-light" 
                />
              </div>
              
              <Button className="w-full sm:w-auto bg-tech-blue hover:bg-tech-blue-dark">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
