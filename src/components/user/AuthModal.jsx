import { useApp } from '../../context/AppContext.jsx';

/**
 * Modal shell replacing original Bootstrap modals.
 * `mode` can be 'signin' | 'signup' | 'forgot' | null.
 */
export default function AuthModal({ mode, setMode }) {
  const { login } = useApp();
  const open = Boolean(mode);

  if (!open) return null;

  const close = () => setMode(null);
  const stop = (e) => e.stopPropagation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = form.get('username') || 'Student';
    login({ name: username }, 'user');
    close();
  };

  return (
    <div
      className="modal fade in"
      role="dialog"
      style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}
      onClick={close}
    >
      <div className="log-in-pop" onClick={stop}>
        <div className="log-in-pop-left">
          <h1>Hello...</h1>
          <p>Don't have an account? Create your account. It takes less than a minute.</p>
          <h4>Login with social media</h4>
          <ul>
            <li><a href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fa fa-google"></i> Google+</a></li>
            <li><a href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
          </ul>
        </div>
        <div className="log-in-pop-right">
          <a href="#" className="pop-close" onClick={(e) => { e.preventDefault(); close(); }}>
            <img src="/images/cancel.png" alt="" />
          </a>

          {mode === 'signin' && (
            <>
              <h4>Login</h4>
              <p>Welcome back. Please enter your credentials to continue.</p>
              <form className="s12" onSubmit={handleLogin}>
                <div><div className="input-field s12"><input name="username" type="text" className="validate" /><label>User name</label></div></div>
                <div><div className="input-field s12"><input name="password" type="password" className="validate" /><label>Password</label></div></div>
                <div><div className="s12 log-ch-bx"><p><input type="checkbox" id="remember" /><label htmlFor="remember">Remember me</label></p></div></div>
                <div><div className="input-field s4"><input type="submit" value="Login" className="waves-effect waves-light log-in-btn" /></div></div>
                <div>
                  <div className="input-field s12">
                    <a href="#" onClick={(e) => { e.preventDefault(); setMode('forgot'); }}>Forgot password</a>
                    {' | '}
                    <a href="#" onClick={(e) => { e.preventDefault(); setMode('signup'); }}>Create a new account</a>
                  </div>
                </div>
              </form>
            </>
          )}

          {mode === 'signup' && (
            <>
              <h4>Create an Account</h4>
              <p>Join our community of learners. It only takes a minute.</p>
              <form className="s12" onSubmit={(e) => { e.preventDefault(); close(); }}>
                <div><div className="input-field s12"><input type="text" className="validate" /><label>User name</label></div></div>
                <div><div className="input-field s12"><input type="email" className="validate" /><label>Email id</label></div></div>
                <div><div className="input-field s12"><input type="password" className="validate" /><label>Password</label></div></div>
                <div><div className="input-field s12"><input type="password" className="validate" /><label>Confirm password</label></div></div>
                <div><div className="input-field s4"><input type="submit" value="Register" className="waves-effect waves-light log-in-btn" /></div></div>
                <div>
                  <div className="input-field s12">
                    <a href="#" onClick={(e) => { e.preventDefault(); setMode('signin'); }}>Already a member? Login</a>
                  </div>
                </div>
              </form>
            </>
          )}

          {mode === 'forgot' && (
            <>
              <h4>Forgot password</h4>
              <p>Enter your email and we'll send you a reset link.</p>
              <form className="s12" onSubmit={(e) => { e.preventDefault(); close(); }}>
                <div><div className="input-field s12"><input type="text" className="validate" /><label>User name or email id</label></div></div>
                <div><div className="input-field s4"><input type="submit" value="Submit" className="waves-effect waves-light log-in-btn" /></div></div>
                <div>
                  <div className="input-field s12">
                    <a href="#" onClick={(e) => { e.preventDefault(); setMode('signin'); }}>Already a member? Login</a>
                    {' | '}
                    <a href="#" onClick={(e) => { e.preventDefault(); setMode('signup'); }}>Create a new account</a>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
