import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
    }
    return ( 
            <div className="app-header">
                <div className="container d-flex justify-content-between text-white">
                    <div className="p-2">
                        <img src="/cashplus.png" alt="" className="cp-logo mx-3 align-middle"/>
                        <h2 className="d-inline align-middle">Money Service</h2>
                    </div>

                    <div className="p-2 secondary">
                        <span className="fw-bold align-middle logout" onClick={handleLogout}>logout</span>
                    </div>
                </div>
            </div>
     );
}
 
export default Header;