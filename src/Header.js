const Header = () => {
    return ( 
            <div className="app-header">
                <div className="container d-flex justify-content-between text-white">
                    <div className="p-2">
                        <img src="cashplus.png" className="cp-logo mx-3 align-middle"/>
                        <h2 className="d-inline align-middle">Money Service</h2>
                    </div>

                    <div className="p-2 secondary">
                        <span className="fw-bold align-middle">logout</span>
                    </div>
                </div>
            </div>
     );
}
 
export default Header;