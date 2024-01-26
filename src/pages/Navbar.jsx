import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import bell from '../assets/bell.svg'
import arrow from '../assets/drop-arrow.svg'
import profile from '../assets/profile.svg'

const Navbar = () => {
    return (
        <ul className="sticky top-0 bg-white flex items-center justify-between px-12 py-2 shadow-md z-20">
            <li className='flex gap-4 items-center font-semibold text-3xl'>
                <img src={logo} alt="logo" />
                <h1>Archslate</h1>
            </li>

            <li className="flex gap-4 items-center border-2 w-[40%] p-1 px-8 rounded-full bg-[#EEF0F3]">
                <img src={search} alt="search icon" />
                <input type="text" placeholder='Search' className="w-full bg-[#EEF0F3] text-[#575D6B]" />
            </li>

            <li className="flex items-center gap-3">
                <img src={bell} alt="bell icon" />
                <img src={profile} alt="profile" className="w-9 h-9 rounded-full" />
                <span>
                    <h3 className="font-medium text-base">
                        Suzette Goldstein
                    </h3>
                    <p className="font-medium">Admin</p>
                </span>
                <img src={arrow} alt="drop arrow" className="self-start mt-2" />
            </li>
        </ul>
    )
}

export default Navbar;