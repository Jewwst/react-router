import { Link } from "react-router-dom"

export default function Nav(){
    return <nav>
        <Link to="/"Home></Link>
        <Link to="/users"All Users></Link>
    </nav>
}