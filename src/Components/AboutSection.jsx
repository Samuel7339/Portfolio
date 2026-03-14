import {Brain,Briefcase,Layers, Server} from 'lucide-react';
import resume from "../assets/Resume.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About<span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <h3 className="text-2xl font-semibold">Passionate Software Developer</h3>

               <p className="text-muted-foreground">I am an aspiring Full Stack Developer passionate about
                 building scalable and efficient web applications.
                 I have hands-on experience with, Node.js, Express, React, and MongoDB,
                  along with strong foundations in HTML, CSS, and programming.</p>

                <p className="text-muted-foreground">I enjoy developing real-world projects, solving problems with code,
                   and continuously learning
                   modern technologies to improve my development skills and grow as a software developer.</p>

                   <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a  href="#contacts" className="cosmic-button">
                      Get in Touch
                    </a>

                    <a href={resume} download className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                      Download CV
                    </a>
                   </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-10">
              <div className="gradient-border p-5 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                      <Layers className='h-6 w-6 text-primary'/>
                  </div>
                  <div className='text-left'>
                      <h4 className='font-semibold text-lg'>Full Stack Development</h4>
                      <p className='text-muted-foreground'>Building modern web applications using JavaScript,
                         Node.js, React, and MongoDB.</p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-5 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                      <Server className='h-6 w-6 text-primary'/>
                  </div>
                  <div className='text-left'>
                      <h4 className='font-semibold text-lg'>Backend Development</h4>
                      <p className='text-muted-foreground'>I build secure and efficient backend APIs using
                         Node.js, Express, and MongoDB.</p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-5 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                      <Brain className='h-6 w-6 text-primary'/>
                  </div>
                  <div className='text-left'>
                      <h4 className='font-semibold text-lg'> Problem Solving</h4>
                      <p className='text-muted-foreground'>
                       I enjoy solving problems by thinking clearly and finding simple, effective solutions.</p>
                  </div>
                </div>
              </div>

            </div>
        </div>
      </div>
    </section>
  )
}
