
const VerticalNavbar =() => {
    return(
        <ul className="bg-white flex flex-col gap-2 w-[20%] items-center pt-12 shadow-md">
            <li className=" hover:border-2 hover:text-white px-6 w-4/5 rounded-full text-lg font-medium flex items-center justify-center py-1 hover:bg-[#0F1420]">
                Home</li>
            <li className=" hover:border-2 hover:text-white px-6 w-4/5 rounded-full text-lg font-medium flex items-center justify-center py-1 hover:bg-[#0F1420]">
                Projects</li>
            <li className=" hover:border-2 hover:text-white px-6 w-4/5 rounded-full text-lg font-medium flex items-center justify-center py-1 hover:bg-[#0F1420]">
                Tasks</li>
            <li className=" hover:border-2 hover:text-white px-6 w-4/5 rounded-full text-lg font-medium flex items-center justify-center py-1 hover:bg-[#0F1420]">
                People</li>
            <li className=" hover:border-2 hover:text-white px-6 w-4/5 rounded-full text-lg font-medium flex items-center justify-center py-1 hover:bg-[#0F1420]">
                Hiring</li>
            <li className=" hover:border-2 hover:text-white px-6 w-4/5 rounded-full text-lg font-medium flex items-center justify-center py-1 hover:bg-[#0F1420]">
                Settings</li>
        </ul>
    )
}

export default VerticalNavbar;