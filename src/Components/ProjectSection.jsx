import { ArrowRight, BusFront, ExternalLink, Github, GithubIcon, ShoppingBagIcon, ShoppingBasketIcon, ShoppingCart ,BusFrontIcon, Mic} from "lucide-react"
import BusReservation from '../assets/BusReservation_Image.png'
import ECommerce from '../assets/ECommerce_Image.png'
import EmployeeManagement from '../assets/EmployeeManagement_Image.png'
const projects=[
    {
        id:1,
        title:"Bus Reservation System",
        description:"Bus reservation system built using Java and JDBC with CRUD operations for booking and managing tickets.",
        // image:"/Project/Busreservation.png",
        image:BusReservation,
        tags:["Java","JDBC"],
        demoUrl:"#",
        githubUrl:"https://github.com/Samuel7339/BusReservation_Jdbc",
    },
    {
        id:2,
        title:"E-Commerse-Website",
        description:"E-commerce website built with React and Tailwind CSS for browsing and viewing products.",
        // image:"/Project/Ecommerse.webp",
        image:ECommerce,
        tags:["React","Tailwind CSS"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:3,
        title:"Employee Management",
        description:"Full-stack employee management system with CRUD operations and JWT-based authentication.",
        // image:"/Project/Text-to-Speech.jpg",
        image:EmployeeManagement,
        tags:["React","Express" ,"MongoDB "],
        demoUrl:"#",
        githubUrl:"#",
    },
]
export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Featured <span className="text-primary">Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully built to provide a better user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=>(
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        
                        <div className="h-48 overflow-hidden flex items-center justify-center bg-primary/10">
                           <img src={project.image} alt={project.title} className="w-[90%] h-[90%] transition-transform-duration-500 group-hover:scale-110"/>
                           {/* <ShoppingBasketIcon size={40}/> */}
                           {/* {project.image} */}
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-3 py-2 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        

                        <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-5">{project.description}</p>
                    
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} target="blank"  className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <ExternalLink size={20}/>
                                </a>

                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github size={20}/>
                                </a>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className="text-center mt-13">
                <a href="https://github.com/Samuel7339" target="_blank" rel="noopener noreferrer" className="cosmic-button w-fit flex items-center mx-auto gap-2" >
                    Check My Github<ArrowRight size={16}/></a>
            </div>
        </div>
    </section>
  )
}
