import { Facebook, Github, Instagram, Linkedin, Mail, Send, Twitch, Twitter } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import {cn} from '../lib/utlis';
import { ArrowUp } from "lucide-react";
export const ContactSection = () => {

    // const handleSubmit=(e)=>{
    //     e.preventDefault()

    //     setTimeout(()=>{

    //     },1500)
    // }
  return (
    <section id="contacts" className="pt-30 pb-20 px-4 relative bg-secondary/30 ">
        <div className="container mx-auto max-w-5xl h-[90%] flex flex-col items-center">
            <h2 className="text-3xl md:4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to new opportunities and interesting conversations. 
                Feel free to send a message through the form below.
            </p>

            <div className="w-full  md:w-[45%] gap-12 ">
                {/* <div className="space-y-10 bg-card pt-5 flex justify-center items-center flex-col mb-8">
                    <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center ">
                        <div className="flex items-end-safe space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a target="blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    sr6851@gmail.com
                                    </a>
                            </div>
                        </div>

                         <div className="flex items-end-safe space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a target="blank" href="tel:+911234567" className="text-muted-foreground hover:text-primary transition-colors">
                                    +91 7339244892
                                    </a>
                            </div>
                        </div>

                         <div className="flex items-end-safe space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Address</h4>
                                <a target="blank" href="mailto:sr6851201@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    Coimbatore,TamilNadu
                                    </a>
                            </div>
                        </div>

                    </div>

                    
                </div> */}

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                    <form action="" className="space-y-6">
                      <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input type="text" id="name" name="name"
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary"
                            placeholder="samuel"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input type="email" id="email" name="email"
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary"
                            placeholder="samuel73@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <input type="textarea" id="message" name="message"
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary resize-none"
                            placeholder="Hello, I'd like to talk about... "
                            />
                        </div>

                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                            
                        )}>Send Message<Send size={16}/></button>

                    </form>
                </div>

                <div className="mt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/samuel-raj07/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                <Linkedin />
                            </a>
                            <a href="tel:+917339244892" className="hover:text-primary">
                                <Phone size={25}/>
                            </a>
                            <a href="mailto:sr6851201@gmail.com" className="hover:text-primary">
                               <Mail />
                            </a>
                            <a href="https://github.com/Samuel7339" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                <Github/>
                            </a>
                            <a href="" className="hover:text-primary">
                                <Facebook/>
                            </a>
                        </div>
                        
                    </div>

            </div>
        </div>
        <div className="p-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce border rounded-full bg-primary/20">
        <a href="#hero"> <ArrowUp className="h-5 w-5 text-primary"/></a>
       
           
        

        </div>
    </section>
  )
}
