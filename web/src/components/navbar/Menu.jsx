import { NavLink } from "react-router-dom"
import { navList } from "../../utils/links"
import { useState } from "react"
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    return (
        <div>
            <ul className="sm:flex hidden items-center gap-8">
                {
                    navList.map((list, index) => (
                        <li key={index}>
                            <NavLink
                                to={list.path.toLowerCase()}
                                className={({ isActive }) =>
                                    isActive ? "text-blue-900 font-bold" : ""
                                }
                            >
                                {list.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <div className="flex items-center sm:hidden">
                <button onClick={toggleMenu} className="flex items-center px-3 py-4 bg-white rounded text-md text-gray-500 hover:text-gray-900">
                    {
                        isMenuOpen ? <IoMdClose className="size-6" /> : <TiThMenu className="size-6" />
                    }
                </button>
            </div>
            {
                isMenuOpen && (
                    <ul className="fixed top-[80px] left-0 w-full pb-5 bg-white shadow-md z-50">
                        {
                            navList.map((list, index) => (
                                <li key={index} className="mt-3 px-4">
                                    <NavLink
                                        to={list.path.toLowerCase()}
                                        className={({ isActive }) =>
                                            isActive ? "text-blue-900 font-bold" : ""
                                        }    
                                    >
                                        {list.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>

    )
}

export default Menu