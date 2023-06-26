import NoKYCPage from "./home/NoKYC";
import KYCPage from "./home/KYC";
import Navbar from './Navbar';
import Header from './Header';
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    return ( 
        <div>
            <Header />
            <Navbar />
            <div className="container p-4">
                {location.pathname === '/home/nokyc-products' && <NoKYCPage />}
                {location.pathname === '/home/kyc-products' && <KYCPage />}
            </div>
        </div>
    );
}
 
export default Home;