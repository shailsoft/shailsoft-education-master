import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export default function AdminLogin() {
  const { login } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name: form.username || 'Admin' }, 'admin');
    navigate('/admin');
  };

  return (
    <div className="ad-login-wrap" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f6fa' }}>
      <div className="log-in-pop" style={{ maxWidth: 900, width: '100%' }}>
        <div className="log-in-pop-left">
          <h1>Welcome</h1>
          <p>Admin panel — sign in with your credentials to manage the website.</p>
          <h4>Need help?</h4>
          <ul>
            <li><Link to="/admin/forgot"><i className="fa fa-key" /> Forgot password</Link></li>
            <li><Link to="/"><i className="fa fa-home" /> Back to website</Link></li>
          </ul>
        </div>
        <div className="log-in-pop-right">
          <h4>Admin Login</h4>
          <p>Enter your admin credentials below.</p>
          <form className="s12" onSubmit={handleSubmit}>
            <div><div className="input-field s12">
              <input type="text" value={form.username} onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))} />
              <label>Admin user name</label>
            </div></div>
            <div><div className="input-field s12">
              <input type="password" value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} />
              <label>Password</label>
            </div></div>
            <div><div className="input-field s4">
              <input type="submit" value="Login" className="waves-effect waves-light log-in-btn" />
            </div></div>
            <div><div className="input-field s12">
              <Link to="/admin/forgot">Forgot password?</Link>
            </div></div>
          </form>
        </div>
      </div>
    </div>
  );
}
