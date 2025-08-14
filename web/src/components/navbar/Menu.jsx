import { NavLink } from "react-router-dom"
import { navList } from "../../utils/links"

const Menu = () => {
    return (
        <div>
            <ul className="sm:flex hidden items-center gap-8">
                {
                    navList.map((list, index) => (
                        <li key={index}>
                            <NavLink 
                                to={list.path}
                                className={({isActive}) =>
                                    isActive? "secondary font-semibold" : ""
                                }
                            >
                                {list.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Menu