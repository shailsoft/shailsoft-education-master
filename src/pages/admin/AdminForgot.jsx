import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminForgot() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="ad-login-wrap" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f6fa' }}>
      <div className="log-in-pop" style={{ maxWidth: 900, width: '100%' }}>
        <div className="log-in-pop-left">
          <h1>Forgot password?</h1>
          <p>Enter your admin email and we'll send you a reset link.</p>
          <ul>
            <li><Link to="/admin/login"><i className="fa fa-sign-in" /> Back to login</Link></li>
            <li><Link to="/"><i className="fa fa-home" /> Back to website</Link></li>
          </ul>
        </div>
        <div className="log-in-pop-right">
          <h4>Reset password</h4>
          <p>{sent ? 'If that email is registered, a reset link has been sent.' : 'We will email you a reset link.'}</p>
          {!sent && (
            <form className="s12" onSubmit={handleSubmit}>
              <div><div className="input-field s12">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Admin email</label>
              </div></div>
              <div><div className="input-field s4">
                <input type="submit" value="Send link" className="waves-effect waves-light log-in-btn" />
              </div></div>
            </form>
          )}
          <p><Link to="/admin/login">Remembered? Login</Link></p>
        </div>
      </div>
    </div>
  );
}
