import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useApp } from '../../context/AppContext.jsx';

export default function AdminTopbar({ onToggleSidebar }) {
  const { auth, logout } = useApp();
  const navigate = useNavigate();
  const [accountOpen, setAccountOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="container-fluid sb1">
      <div className="row">
        <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
          <a href="#" className="btn-close-menu" onClick={(e) => { e.preventDefault(); onToggleSidebar(false); }}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </a>
          <a href="#" className="atab-menu" onClick={(e) => { e.preventDefault(); onToggleSidebar(); }}>
            <i className="fa fa-bars tab-menu" aria-hidden="true"></i>
          </a>
          <Link to="/" className="logo">
            <img src={`${baseUrl}images/logo1.png`} alt="Admin" />
          </Link>
        </div>

        <div className="col-md-6 col-sm-6 mob-hide">
          <form className="app-search" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search..." className="form-control" />
            <a href="#"><i className="fa fa-search"></i></a>
          </form>
        </div>

        <div className="col-md-2 tab-hide">
          <div className="top-not-cen">
            <Link className="waves-effect btn-noti" to="/admin/all-enquiry" title="All enquiry messages">
              <i className="fa fa-commenting-o" aria-hidden="true"></i><span>5</span>
            </Link>
            <Link className="waves-effect btn-noti" to="/admin/course-enquiry" title="Course booking messages">
              <i className="fa fa-envelope-o" aria-hidden="true"></i><span>5</span>
            </Link>
            <Link className="waves-effect btn-noti" to="/admin/admission-enquiry" title="Admission enquiry">
              <i className="fa fa-tag" aria-hidden="true"></i><span>5</span>
            </Link>
          </div>
        </div>

        <div className="col-md-2 col-sm-3 col-xs-6" style={{ position: 'relative' }}>
          <a
            className="waves-effect dropdown-button top-user-pro"
            href="#"
            onClick={(e) => { e.preventDefault(); setAccountOpen((v) => !v); }}
          >
            <img src={`${baseUrl}images/user.jpg`} alt="" />
            {auth.user?.name || 'My Account'} <i className="fa fa-angle-down" aria-hidden="true"></i>
          </a>
          {accountOpen && (
            <ul className="dropdown-content top-menu-sty" style={{ display: 'block', position: 'absolute', right: 0, top: '100%', zIndex: 1000, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,.15)' }}>
              <li><Link to="/admin/panel-setting" className="waves-effect" onClick={() => setAccountOpen(false)}><i className="fa fa-cogs" aria-hidden="true"></i> Admin Setting</Link></li>
              <li className="divider"></li>
              <li>
                <a href="#" className="ho-dr-con-last waves-effect" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                  <i className="fa fa-sign-in" aria-hidden="true"></i> Logout
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
