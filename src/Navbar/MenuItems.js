import Dropdown from "./Dropdown"
import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react"
const MenuItems= ({items}) =>{
    const [dropdown,setDropdown] = useState(false);
    const closeDropdown =() =>{
        dropdown && setDropdown(false);
    };
    let ref= useRef();
    useEffect(() =>{
        const handler = (event) =>{
            if(dropdown && ref.current && !ref.current.contains(event.target)){
                setDropdown(false)
            }
        }
        document.addEventListener("mousedown",handler);
        document.addEventListener("touchstart",handler)
        return() =>{
            document.removeEventListener("mousedown",handler)
            document.removeEventListener("touchstart",handler);
        };
    },[dropdown])

    const onMouseEnter =() =>{
        window.innerWidth>960 && setDropdown(true);
    };
    const onMouseLeave = () =>{
        window.innerWidth > 960 && setDropdown(false)
    }
    return(
        <>
        <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeDropdown}>
            
             {items.submenu ? (
                <>
                <button type="button" aria-haspopup="menu" className="button" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev)=> !prev)}>
                    {items.title}{' '}
                </button>
                <Dropdown submenus={items.submenu} dropdown={dropdown}></Dropdown>
                </>
            ) : (
                <Link to={items.url}>{items.title}</Link>
            )}
        </li>
        </>
    )
}

export default MenuItems