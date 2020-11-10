import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <ul>
                    <li className="nav-item">

                        <Link className="nav-link" exact to="/Contact">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar