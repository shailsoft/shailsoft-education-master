import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Main website header: logo + primary nav with mega-menus.
 * The original template toggled mega-menus via jQuery (custom.js); in React
 * we drive the open/close state directly so `display:none` from style.css
 * is overridden on hover for the active menu only.
 */
export default function Header() {
  const [open, setOpen] = useState(null); // 'about' | 'admi' | 'cour' | null
  const show = (key) => () => setOpen(key);
  const hide = () => setOpen(null);
  const mmStyle = (key) => ({ display: open === key ? 'block' : 'none' });

  return (
    <div className="top-logo">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="wed-logo">
              <Link to="/"><img src="/images/logo.png" alt="Education Master" /></Link>
            </div>
            <div className="main-menu">
              <ul>
                <li><Link to="/">Home</Link></li>

                <li className="about-menu" onMouseEnter={show('about')} onMouseLeave={hide}>
                  <Link to="/about" className="mm-arr">About us</Link>
                  <div className="mm-pos">
                    <div className="about-mm m-menu" style={mmStyle('about')}>
                      <div className="m-menu-inn">
                        <div className="mm1-com mm1-s1">
                          <div className="ed-course-in">
                            <Link className="course-overlay menu-about" to="/admission">
                              <img src="/images/h-about.jpg" alt="" />
                              <span>Academics</span>
                            </Link>
                          </div>
                        </div>
                        <div className="mm1-com mm1-s2">
                          <p>Want to change the world? At Berkeley we're doing just that. Join our community and help shift the global conversation every single day.</p>
                          <Link to="/about" className="mm-r-m-btn">Read more</Link>
                        </div>
                        <div className="mm1-com mm1-s3">
                          <ul>
                            <li><Link to="/all-courses">All Courses</Link></li>
                            <li><Link to="/course-details">Course details</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/admission">Admission</Link></li>
                            <li><Link to="/awards">Awards</Link></li>
                          </ul>
                        </div>
                        <div className="mm1-com mm1-s4">
                          <ul>
                            <li><Link to="/dashboard">Student profile</Link></li>
                            <li><Link to="/db-courses">Dashboard courses</Link></li>
                            <li><Link to="/db-exams">Dashboard exams</Link></li>
                            <li><Link to="/db-profile">Dashboard profile</Link></li>
                            <li><Link to="/db-time-line">Dashboard timeline</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="admi-menu" onMouseEnter={show('admi')} onMouseLeave={hide}>
                  <Link to="/admission" className="mm-arr">Admission</Link>
                  <div className="mm-pos">
                    <div className="admi-mm m-menu" style={mmStyle('admi')}>
                      <div className="m-menu-inn">
                        {[
                          { img: 'h-about1.jpg', label: 'Academics', to: '/about' },
                          { img: 'h-adm1.jpg', label: 'Admission', to: '/admission' },
                          { img: 'h-cam1.jpg', label: 'History & awards', to: '/awards' },
                          { img: 'h-res1.jpg', label: 'Seminar 2024', to: '/seminar' },
                        ].map((item) => (
                          <div key={item.label} className="mm2-com mm1-com mm1-s1">
                            <div className="ed-course-in">
                              <Link className="course-overlay" to={item.to}>
                                <img src={`/images/${item.img}`} alt="" />
                                <span>{item.label}</span>
                              </Link>
                            </div>
                            <p>Discover our programs and opportunities across academics, admissions, and campus life.</p>
                            <Link to={item.to} className="mm-r-m-btn">Read more</Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                <li><Link to="/all-courses">All Courses</Link></li>

                <li className="cour-menu" onMouseEnter={show('cour')} onMouseLeave={hide}>
                  <a href="#!" className="mm-arr" onClick={(e) => e.preventDefault()}>All Pages</a>
                  <div className="mm-pos">
                    <div className="cour-mm m-menu" style={mmStyle('cour')}>
                      <div className="m-menu-inn">
                        <div className="mm1-com mm1-cour-com mm1-s3">
                          <h4>Frontend pages</h4>
                          <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/all-courses">All Courses</Link></li>
                            <li><Link to="/course-details">Course Details</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/admission">Admission</Link></li>
                            <li><Link to="/awards">Awards</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/blog-details">Blog details</Link></li>
                            <li><Link to="/contact-us">Contact us</Link></li>
                            <li><Link to="/departments">Departments</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/event-details">Event details</Link></li>
                            <li><Link to="/event-register">Event register</Link></li>
                          </ul>
                        </div>
                        <div className="mm1-com mm1-cour-com mm1-s3">
                          <h4>More frontend</h4>
                          <ul>
                            <li><Link to="/facilities">Facilities</Link></li>
                            <li><Link to="/facilities-detail">Facilities detail</Link></li>
                            <li><Link to="/research">Research</Link></li>
                            <li><Link to="/seminar">Seminar</Link></li>
                            <li><Link to="/gallery-photo">Gallery</Link></li>
                          </ul>
                          <h4 className="ed-dr-men-mar-top">User Dashboard</h4>
                          <ul>
                            <li><Link to="/dashboard">Student profile</Link></li>
                            <li><Link to="/db-courses">Dashboard courses</Link></li>
                            <li><Link to="/db-exams">Dashboard exams</Link></li>
                            <li><Link to="/db-profile">Dashboard profile</Link></li>
                            <li><Link to="/db-time-line">Dashboard timeline</Link></li>
                          </ul>
                        </div>
                        <div className="mm1-com mm1-cour-com mm1-s3">
                          <h4>Admin panel</h4>
                          <ul>
                            <li><Link to="/admin">Admin dashboard</Link></li>
                            <li><Link to="/admin/add-courses">Add new course</Link></li>
                            <li><Link to="/admin/all-courses">All courses</Link></li>
                            <li><Link to="/admin/student-details">Student details</Link></li>
                            <li><Link to="/admin/user-add">Add new user</Link></li>
                            <li><Link to="/admin/user-all">All users</Link></li>
                            <li><Link to="/admin/setting">Admin setting</Link></li>
                            <li><Link to="/admin/slider">Slider setting</Link></li>
                            <li><Link to="/admin/login">Admin login</Link></li>
                          </ul>
                        </div>
                        <div className="mm1-com mm1-cour-com mm1-s3">
                          <h4>Admin events & exams</h4>
                          <ul>
                            <li><Link to="/admin/event-add">Event add</Link></li>
                            <li><Link to="/admin/event-all">Event all</Link></li>
                            <li><Link to="/admin/event-edit">Event edit</Link></li>
                            <li><Link to="/admin/exam-add">Exam add</Link></li>
                            <li><Link to="/admin/exam-all">Exam all</Link></li>
                            <li><Link to="/admin/exam-edit">Exam edit</Link></li>
                            <li><Link to="/admin/export-data">Export data</Link></li>
                            <li><Link to="/admin/import-data">Import data</Link></li>
                            <li><Link to="/admin/job-add">Add new job</Link></li>
                            <li><Link to="/admin/page-add">Add new page</Link></li>
                          </ul>
                        </div>
                        <div className="mm1-com mm1-cour-com mm1-s4">
                          <h4>Admin enquiry & menus</h4>
                          <ul>
                            <li><Link to="/admin/quick-link">Quick link</Link></li>
                            <li><Link to="/admin/seminar-add">Add seminar</Link></li>
                            <li><Link to="/admin/seminar-all">All seminars</Link></li>
                            <li><Link to="/admin/all-enquiry">All enquiry</Link></li>
                            <li><Link to="/admin/view-enquiry">Enquiry view</Link></li>
                            <li><Link to="/admin/event-enquiry">Event enquiry</Link></li>
                            <li><Link to="/admin/admission-enquiry">Admission enquiry</Link></li>
                            <li><Link to="/admin/common-enquiry">Common enquiry</Link></li>
                            <li><Link to="/admin/course-enquiry">Course enquiry</Link></li>
                            <li><Link to="/admin/main-menu">Menu - Main</Link></li>
                            <li><Link to="/admin/about-menu">Menu - About</Link></li>
                            <li><Link to="/admin/admission-menu">Menu - Admission</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li><Link to="/events">Events</Link></li>
                <li><Link to="/dashboard">Student</Link></li>
                <li><Link to="/contact-us">Contact us</Link></li>
              </ul>
            </div>
          </div>
          <div className="all-drop-down-menu"></div>
        </div>
      </div>
    </div>
  );
}
