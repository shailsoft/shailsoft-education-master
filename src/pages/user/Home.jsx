import { Link } from 'react-router-dom';
import HeroSlider from '../../components/common/HeroSlider.jsx';
import CourseCard from '../../components/common/CourseCard.jsx';
import { DISCOVER, POPULAR_COURSES, UPCOMING_EVENTS } from '../../data/courses.js';

const QUICK_LINKS = [
  { icon: 'h-ic1.png', label: 'Academy', to: '/awards' },
  { icon: 'h-ic2.png', label: 'Admission', to: '/admission' },
  { icon: 'h-ic4.png', label: 'Courses', to: '/all-courses' },
  { icon: 'h-ic3.png', label: 'Seminar', to: '/seminar' },
];

export default function Home() {
  const leftCourses = POPULAR_COURSES.slice(0, 4);
  const rightCourses = POPULAR_COURSES.slice(4, 8);

  return (
    <>
      <HeroSlider />

      {/* QUICK LINKS */}
      <section>
        <div className="container">
          <div className="row">
            <div className="wed-hom-ser">
              <ul>
                {QUICK_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="waves-effect waves-light btn-large wed-pop-ser-btn">
                      <img src={`/images/icon/${l.icon}`} alt="" /> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVER MORE */}
      <section>
        <div className="container com-sp pad-bot-70">
          <div className="row">
            <div className="con-title">
              <h2>Discover <span>More</span></h2>
              <p>Explore our programs, campus life, research initiatives and the breadth of opportunities we offer.</p>
            </div>
          </div>
          <div className="row">
            <div className="ed-course">
              {DISCOVER.map((d) => (
                <div key={d.label + d.img} className="col-md-3 col-sm-4 col-xs-12">
                  <div className="ed-course-in">
                    <Link className="course-overlay" to={d.to}>
                      <img src={d.img} alt="" />
                      <span>{d.label}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="pop-cour">
        <div className="container com-sp pad-bot-70">
          <div className="row">
            <div className="con-title">
              <h2>Popular <span>Courses</span></h2>
              <p>Our most-booked programs this semester, from engineering to design.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>{leftCourses.map((c) => <CourseCard key={c.id} course={c} />)}</div>
            </div>
            <div className="col-md-6">
              <div>{rightCourses.map((c) => <CourseCard key={c.id} course={c} />)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section>
        <div className="container com-sp pad-bot-70">
          <div className="row">
            <div className="con-title">
              <h2>Upcoming <span>Events</span></h2>
              <p>Stay up to date with seminars, admission tours, and on-campus conferences.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="home-event-list">
                <ul>
                  {UPCOMING_EVENTS.map((e) => (
                    <li key={e.title}>
                      <div className="ho-ev-date">
                        <span>{e.day}</span><span>{e.monthYear}</span>
                      </div>
                      <div className="ho-ev-link">
                        <Link to="/events"><h4>{e.title}</h4></Link>
                        <p>{e.desc}</p>
                        <span>{e.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
