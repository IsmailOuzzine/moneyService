const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-md bg-light">
            <div className="container-lg">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-lock-fill mx-1"></i>
                                Admin
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-file-earmark-text mx-1"></i>
                                View
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Procedures</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-arrow-left-right mx-1"></i>
                                Transctions
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Alimentation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-send mx-1"></i>
                                Versement
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Journal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Odoo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">interagence</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;