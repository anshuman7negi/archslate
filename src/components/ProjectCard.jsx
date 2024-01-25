import eye from '../assets/eye.svg'

const ProjectCard = () => {
    return (
        <section className="flex flex-col bg-white rounded-lg p-6 gap-8">
            <div className="flex justify-between">
                <h2 className="font-bold text-2xl">Create Architectural Concepts</h2>
                <div className="flex gap-4">
                    <button className="border-black border-2 hover:text-white px-6 py-1 rounded-full font-medium text-lg hover:bg-[#0F1420]">Edit Task</button>
                    <button className="border-black border-2 hover:text-white px-6 py-1 rounded-full font-medium text-lg hover:bg-[#0F1420]">End Task</button>
                </div>
            </div>
            <div className="flex gap-16">
                <ul className="flex flex-col gap-3 min-w-[300px]">
                    <li>
                        <span className="font-bold mr-3">Assigned to:</span> <a href="" className="font-bold text-lg text-[#494BAA] underline">Brian Jenek</a>
                    </li>
                    <li>
                        <span className="font-bold mr-3">Assigned by:</span> <a href="" className="font-bold text-lg text-[#494BAA] underline">Suzette Goldstein</a>
                    </li>
                    <li>
                        <span className="font-bold mr-3">Due Date:</span> 11/03/2023
                    </li>
                    <li>
                        <span className="font-bold mr-3">Project:</span> New York High Rise
                    </li>
                    <li>
                        <span className="font-bold mr-5">Status:</span>
                        <button className="bg-[#D7FEF0] border-2 border-[#21CEAF] px-6 py-1 w-[140px] rounded-full">In Progress</button>
                    </li>
                    <li>
                        <span className="font-bold mr-3">Priority:</span>
                        <button className="bg-[#FFDAD2] border-2 border-[#FF7B7B] w-[140px] px-6 py-1 rounded-full">High</button>
                    </li>
                    <li className="flex gap-1">
                        <img src={eye} alt="eye icon" />
                        <p className="font-bold">2</p>
                    </li>
                </ul>

                <p className="flex flex-col gap-4 max-w-[634px]">
                    <span className="font-bold">Description:</span>
                    Conduct extensive research to gather inspiration from various sources.
                    This research can include studying historical precedents, exploring architectural trends, and seeking innovative design solutions.
                    Based on the information gathered from the client, site analysis, and research, senior architects begin the process of developing a design concept.
                    This is the foundational idea that will guide the entire project. The concept should align with the client's objectives, site conditions, and the firm's design philosophy.
                </p>
            </div>
        </section>
    )
}

export default ProjectCard;