import { Link } from "react-router-dom";
import Seperator from "./seperator";

export default function AppNavBar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">React with JPMC</Link>
                    <Seperator />
                    <Link to="/home" className="navbar-brand">Home</Link>
                    <Seperator />
                    <Link to="/useState" className="navbar-brand">UseState Demo</Link>
                    <Seperator />
                    <Link to="/useEffect" className="navbar-brand">UseEffect Demo</Link>
                    <Seperator />
                    <Link to="/customers" className="navbar-brand">Customers</Link>
                    <Seperator />
                    <Link to="/fetchDemo" className="navbar-brand">Fetch Demo</Link>
                    <Seperator />
                    <Link to="/about" className="navbar-brand">About</Link>
                    <Seperator />
                    <Link to="/users" className="navbar-brand">Users</Link>
                    <Seperator />
                    <Link to="/useMemo" className="navbar-brand">UseMemo Demo</Link>
                    <Seperator />
                    <Link to="/reactMemo" className="navbar-brand">React.memo()</Link>
                    <Seperator />
                    <Link to="/propsDrilling" className="navbar-brand">Context</Link>
                    <Seperator />
                    <Link to="/reduxToDoList" className="navbar-brand">To Do List</Link>
                    <Seperator />
                    <Link to="/todoList" className="navbar-brand">Display To DO</Link>
                </div>
            </div>
        </nav>
    )

}