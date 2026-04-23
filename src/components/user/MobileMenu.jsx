import { useState } from 'react';
import { Link } from 'react-router-dom';

const COURSE_LINKS = [
  'Accounting/Finance', 'Civil Engineering', 'Art/Design', 'Marine Engineering',
  'Business Management', 'Journalism/Writing', 'Physical Education',
  'Political Science', 'Sciences', 'Statistics', 'Web Design/Development',
  'SEO', 'Google Business', 'Graphics Design', 'Networking Courses',
  'Information technology',
];

export default function MobileMenu({ onOpenAuth }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="ed-mob-menu">
      <div className="ed-mob-menu-con">
        <div className="ed-mm-left">
          <div className="wed-logo">
            <Link to="/"><img src="/images/logo.png" alt="" /></Link>
          </div>
        </div>
        <div className="ed-mm-right">
          <div className="ed-mm-menu">
            <a href="#!" className="ed-micon" onClick={(e) => { e.preventDefault(); setOpen(true); }}>
              <i className="fa fa-bars"></i>
            </a>
            <div className="ed-mm-inn" style={{ display: open ? 'block' : '' }}>
              <a href="#!" className="ed-mi-close" onClick={(e) => { e.preventDefault(); setOpen(false); }}>
                <i className="fa fa-times"></i>
              </a>
              <h4>All Courses</h4>
              <ul>
                {COURSE_LINKS.map((c) => (
                  <li key={c}><Link to="/course-details" onClick={() => setOpen(false)}>{c}</Link></li>
                ))}
              </ul>
              <h4>User Account</h4>
              <ul>
                <li><a href="#!" onClick={(e) => { e.preventDefault(); onOpenAuth('signin'); setOpen(false); }}>Sign In</a></li>
                <li><a href="#!" onClick={(e) => { e.preventDefault(); onOpenAuth('signup'); setOpen(false); }}>Register</a></li>
              </ul>
              <h4>All Pages</h4>
              <ul>
                <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setOpen(false)}>About us</Link></li>
                <li><Link to="/admission" onClick={() => setOpen(false)}>Admission</Link></li>
                <li><Link to="/all-courses" onClick={() => setOpen(false)}>All courses</Link></li>
                <li><Link to="/course-details" onClick={() => setOpen(false)}>Course details</Link></li>
                <li><Link to="/awards" onClick={() => setOpen(false)}>Awards</Link></li>
                <li><Link to="/seminar" onClick={() => setOpen(false)}>Seminar</Link></li>
                <li><Link to="/events" onClick={() => setOpen(false)}>Events</Link></li>
                <li><Link to="/event-details" onClick={() => setOpen(false)}>Event details</Link></li>
                <li><Link to="/event-register" onClick={() => setOpen(false)}>Event register</Link></li>
                <li><Link to="/contact-us" onClick={() => setOpen(false)}>Contact us</Link></li>
              </ul>
              <h4>User Profile</h4>
              <ul>
                <li><Link to="/dashboard" onClick={() => setOpen(false)}>User profile</Link></li>
                <li><Link to="/db-courses" onClick={() => setOpen(false)}>Courses</Link></li>
                <li><Link to="/db-exams" onClick={() => setOpen(false)}>Exams</Link></li>
                <li><Link to="/db-profile" onClick={() => setOpen(false)}>Profile</Link></li>
                <li><Link to="/db-time-line" onClick={() => setOpen(false)}>Timeline</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
