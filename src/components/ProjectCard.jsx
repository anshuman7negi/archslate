import { useSelector } from 'react-redux';
import eye from '../assets/eye.svg';
import profile from '../assets/profile.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProjectCard = () => {

    const task = useSelector(state => state.tasks.taskData);
    const [isViewVisible, setIsViewVisible] = useState(false);

    const toggleViewVisibility = () => {
        setIsViewVisible(!isViewVisible);
    };

    return (
        <section className="flex flex-col bg-white rounded-lg p-6 gap-8 z-0">
            <div className="flex justify-between">
                <h2 className="font-bold text-2xl">{task.title}</h2>
                <div className="flex gap-4">
                    <Link to="/task" className="border-black border-2 hover:text-white px-6 py-1 rounded-full font-medium text-lg hover:bg-[#0F1420]">Edit Task</Link>
                    <button className="border-black border-2 hover:text-white px-6 py-1 rounded-full font-medium text-lg hover:bg-[#0F1420]">End Task</button>
                </div>
            </div>
            <div className="flex gap-16">
                {
                    <ul className="flex flex-col gap-3 min-w-[300px]">
                        <li className="flex">
                            <span className="font-bold mr-3">Assigned to:</span>
                            <div className="flex flex-col">
                                {
                                    task.assign.map((assign, index) => (
                                        <a href="" key={index} className="font-bold text-lg text-[#494BAA] underline">{assign}</a>
                                    ))
                                }
                            </div>
                        </li>
                        <li>
                            <span className="font-bold mr-3">Assigned by:</span> <a href="" className="font-bold text-lg text-[#494BAA] underline">Suzette Goldstein</a>
                        </li>
                        <li>
                            <span className="font-bold mr-3">Due Date:</span> {task.date}
                        </li>
                        <li>
                            <span className="font-bold mr-3">Project:</span> {task.project}
                        </li>
                        <li>
                            <span className="font-bold mr-5">Status:</span>
                            <button className="bg-[#D7FEF0] border-2 border-[#21CEAF] px-6 py-1 w-[140px] rounded-full">{task.status}</button>
                        </li>
                        <li>
                            <span className="font-bold mr-3">Priority:</span>
                            <button className="bg-[#FFDAD2] border-2 border-[#FF7B7B] w-[140px] px-6 py-1 rounded-full">{task.priority}</button>
                        </li>
                        <li className="flex gap-1" 
                        onClick={toggleViewVisibility} 
                        >
                            <img src={eye} alt="eye icon" />
                            <p className="font-bold">{task.view.length}</p>
                        </li>
                    </ul>
                }

                <p className="flex flex-col gap-4 max-w-[634px]">
                    <span className="font-bold">Description:</span>
                    {task.description}
                </p>
            </div>

            {isViewVisible && (
                <div className="flex flex-col bg-white gap-2 border-2 shadow-lg py-4 px-6 rounded-lg absolute bottom-[25%] left-[25%] z-20">
                    <div className="flex gap-1 mb-2">
                        <img src={eye} alt="eye icon" />
                        <p className="font-bold">{task.view.length} people watching this task </p>
                    </div>
                    {task.view.map((view, index) => (
                        <div key={index} className="flex gap-4 items-center">
                            <img src={profile} alt="profile" className="w-9 h-9 rounded-full" />
                            <a href="" className="font-bold text-lg text-[#494BAA] underline">
                                {view}
                            </a>
                        </div>
                    ))}
                </div>
            )}

        </section>
    )
}

export default ProjectCard;