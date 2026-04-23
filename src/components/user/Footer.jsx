import { Link } from "react-router-dom";

const TOP_COURSES = [
  "Accounting/Finance",
  "Civil Engineering",
  "Art/Design",
  "Marine Engineering",
  "Business Management",
  "Journalism/Writing",
  "Physical Education",
  "Political Science",
];

const NEW_COURSES = [
  "Sciences",
  "Statistics",
  "Web Design/Development",
  "SEO",
  "Google Business",
  "Graphics Design",
  "Networking Courses",
  "Information technology",
];

export default function Footer() {
  return (
    <>
      <section>
        <div className="full-bot-book">
          <div className="container">
            <div className="row">
              <div className="bot-book">
                <div className="col-md-2 bb-img">
                  <img src="/images/3.png" alt="" />
                </div>
                <div className="col-md-7 bb-text">
                  <h4>Always free from repetition — learn at your own pace</h4>
                  <p>
                    Browse our course catalogue and book your seat today. New
                    batches start every month.
                  </p>
                </div>
                <div className="col-md-3 bb-link">
                  <Link to="/course-details">Book This Course</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wed-hom-footer">
        <div className="container">
          <div className="row wed-foot-link">
            <div className="col-md-4 foot-tc-mar-t-o">
              <h4>Top Courses</h4>
              <ul>
                {TOP_COURSES.map((c) => (
                  <li key={c}>
                    <Link to="/course-details">{c}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h4>New Courses</h4>
              <ul>
                {NEW_COURSES.map((c) => (
                  <li key={c}>
                    <Link to="/course-details">{c}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Help &amp; Support</h4>
              <ul>
                <li>
                  <a href="#">24x7 Live help</a>
                </li>
                <li>
                  <Link to="/contact-us">Contact us</Link>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Safety Tips</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row wed-foot-link-1">
            <div className="col-md-4 foot-tc-mar-t-o">
              <h4>Get In Touch</h4>
              <p>
                Address: Y-471 Lohamandi, Naraina Vihar , South West Delhi,
                India
              </p>
              <p>
                Phone: <a href="#!">+91-8009-583-477</a>
              </p>
              <p>
                Email: <a href="#!">shailsoftinfo@gmail.com</a>
              </p>
            </div>
            <div className="col-md-4">
              <h4>Download Our Free Mobile Apps</h4>
              <ul>
                <li>
                  <a href="#">
                    <span className="sprite sprite-android"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="sprite sprite-ios"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Social Media</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="wed-rights">
        <div className="container">
          <div className="row">
            <div className="copy-right">
              &copy; {new Date().getFullYear()} ShailSoft Education Master. All
              rights reserved.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
