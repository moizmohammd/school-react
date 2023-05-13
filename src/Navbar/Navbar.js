import { Items } from '../menuItems'
import MenuItems from './MenuItems'
 import './Navbar.css'
function Navbar(){

    return(
        <>
        <nav className='nav'>
            <ul className="menus">
            {Items.map((Menu,index)=>{
                return(
                  <MenuItems items={Menu} key={index}></MenuItems>
                )
            })}
            </ul>
        </nav>
        </>
    )
}

export default Navbar