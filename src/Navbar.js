import React from "react"
import { Route, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <Route>
                <Link to="/register"><li>Register</li></Link>
                <Link to="/dashboard"><li>Dashboard</li></Link>
            </Route>
        </div>
    )
}
export default NavBar;