import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const url = 'http://cashplus.ma:8080';

    const data = new URLSearchParams();
    data.append('username', username);
    data.append('password', password);

    axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded;charset=utf-8';

    axios
      .post(`${url}/authenticate`, data, { withCredentials: true })
      .then((response) => {
        if (response.data.isAuth) {
          // login successful
          // Save user data to local storage
          localStorage.setItem('currentUser', JSON.stringify({ user: response.data.user }));

          // Redirect to home page or update the state to render the home page component
          navigate('home/nokyc-products');
        } else {
          setMessage(true);
          setError('Login/Mdp incorrect');
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setMessage(true);
          setError('Login/Mdp incorrect');
        }
      });
  };

  return ( 
    <div className="bg-cashplus">
      <div className="container login-page">
        <div className="card card-login">
          <div className="card-header bg-light text-center align-middle">
            <h2>Authentification Money Service</h2>
          </div>

          <div className="card-body bg-white">
            <div className="row">
              <div className="col-md text-center">
                <img src="shop.png" alt="Cash Plus" className="image image-login"/>
              </div>
              <div className="col-md form-login p-5">
                <form>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input 
                      type="text" 
                      name="username" 
                      id="usernameInput" 
                      className="form-input" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                      type="password" 
                      name="password" 
                      id="passwordInput" 
                      className="form-input" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="button" className="btn" onClick={handleLogin}>Login</button>
                </form>
                {message && <p>{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default LoginPage;