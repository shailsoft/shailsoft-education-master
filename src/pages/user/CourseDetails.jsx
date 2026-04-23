import { useParams, Link } from 'react-router-dom';
import PageBanner from '../../components/common/PageBanner.jsx';
import { ALL_COURSES } from '../../data/courses.js';

export default function CourseDetails() {
  const { slug } = useParams();
  const courseId = Number(slug);
  const course = ALL_COURSES.find((c) => c.id === courseId) || ALL_COURSES[0];

  return (
    <>
      <PageBanner
        title={course.title}
        crumbs={[{ label: 'All Courses', to: '/all-courses' }, { label: course.title }]}
      />

      <section>
        <div className="container com-sp pad-bot-70">
          <div className="row">
            <div className="col-md-8">
              <div className="cour-det-main">
                <img src={course.img} alt={course.title} onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg'; }} />
                <h2>{course.title}</h2>
                <p>A comprehensive program blending theoretical foundations with hands-on practice. Graduates are prepared for real-world challenges and opportunities in their chosen field.</p>

                <h4>Course Overview</h4>
                <p>This program spans {course.duration} and covers foundational principles, specialised modules, internships, and a capstone project. Students benefit from small class sizes, industry mentorship, and modern lab facilities.</p>

                <h4>Highlights</h4>
                <ul className="abt-list">
                  <li><i className="fa fa-check" /> Industry-aligned curriculum</li>
                  <li><i className="fa fa-check" /> Internship with partner organisations</li>
                  <li><i className="fa fa-check" /> Capstone research project</li>
                  <li><i className="fa fa-check" /> Placement support and career counselling</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cour-det-side">
                <h4>Quick Facts</h4>
                <ul>
                  <li><strong>Duration:</strong> {course.duration}</li>
                  <li><strong>Fee:</strong> {course.fee}</li>
                  <li><strong>Seats available:</strong> {course.seats}</li>
                  <li><strong>Mode:</strong> Full-time, On-campus</li>
                </ul>
                <Link to="/event-register" className="bann-btn-1">Apply Now</Link>
              </div>

              <div className="cour-det-side" style={{ marginTop: 20 }}>
                <h4>Other Courses</h4>
                <ul>
                  {ALL_COURSES.filter((c) => c.id !== course.id).slice(0, 5).map((c) => (
                    <li key={c.id}>
                      <Link to={`/course-details/${c.id}`}>{c.title}</Link>
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
