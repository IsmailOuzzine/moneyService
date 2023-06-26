import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './home/login';
import Home from './Home';
import KYCPage from './home/KYC';
import NoKYCPage from './home/NoKYC';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path='/' element={<LoginPage />} />
          <Route path='/home/' element={<Home />}>
            <Route path='nokyc-products' element={<NoKYCPage />} />
            <Route path='kyc-products' element={<KYCPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
