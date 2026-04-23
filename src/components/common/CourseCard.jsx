import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <div className="home-top-cour">
      <div className="col-md-3">
        <img src={course.img} alt={course.title} />
      </div>
      <div className="col-md-9 home-top-cour-desc">
        <Link to={`/course-details/${course.id}`}>
          <h3>{course.title}</h3>
        </Link>
        <h4>{course.category}</h4>
        <p>Classes starting soon — {course.available} seats remaining. Enrol today.</p>
        <span className="home-top-cour-rat">{course.rating.toFixed(1)}</span>
        <div className="hom-list-share">
          <ul>
            <li>
              <Link to={`/course-details/${course.id}`}>
                <i className="fa fa-bar-chart" aria-hidden="true"></i> Book Now
              </Link>
            </li>
            <li>
              <Link to={`/course-details/${course.id}`}>
                <i className="fa fa-eye" aria-hidden="true"></i> {course.available} Available
              </Link>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <i className="fa fa-share-alt" aria-hidden="true"></i> {course.shares}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
