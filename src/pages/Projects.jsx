import DocumentCard from "../components/DocumentCard";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return(
        <div className="bg-[#EEF0F3] w-full flex flex-col p-8 gap-8">
            <h1 className="text-3xl">New York High Rise / Task</h1>
            <ProjectCard />
            <DocumentCard />
        </div>
    )
}

export default Projects;