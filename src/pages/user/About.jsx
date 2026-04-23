import PageBanner from '../../components/common/PageBanner.jsx';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <PageBanner title="About us" crumbs={[{ label: 'About us' }]} />

      <section>
        <div className="container com-sp pad-bot-70">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/h-about.jpg" alt="About Education Master" className="img-responsive" />
            </div>
            <div className="col-md-6">
              <div className="abt-con">
                <h3>Welcome to <span>Education Master</span></h3>
                <p>We are committed to educational excellence, offering a wide range of programs that prepare students to become leaders in their fields. Our campus combines world-class faculty, modern facilities, and a vibrant community.</p>
                <p>With more than 40 years of tradition, Education Master has become one of the leading institutions for undergraduate and graduate studies.</p>
                <ul className="abt-list">
                  <li><i className="fa fa-check" /> Nationally accredited programs</li>
                  <li><i className="fa fa-check" /> Industry-experienced faculty</li>
                  <li><i className="fa fa-check" /> Scholarships and financial aid</li>
                  <li><i className="fa fa-check" /> Global student community</li>
                </ul>
                <Link to="/admission" className="bann-btn-1">Apply for Admission</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pop-cour">
        <div className="container com-sp pad-bot-70">
          <div className="row">
            <div className="con-title">
              <h2>Our <span>Mission</span></h2>
              <p>To empower students with knowledge, skills, and values that enable them to contribute meaningfully to society.</p>
            </div>
          </div>
          <div className="row">
            {[
              { icon: 'fa-book', title: 'Quality Education', text: 'Curriculum designed to meet international standards.' },
              { icon: 'fa-users', title: 'Global Community', text: 'Diverse student body from over 60 countries.' },
              { icon: 'fa-graduation-cap', title: 'Career Ready', text: 'Dedicated placement cell with top employers.' },
              { icon: 'fa-trophy', title: 'Awards & Honors', text: 'Consistently ranked among top institutions.' },
            ].map((card) => (
              <div key={card.title} className="col-md-3 col-sm-6">
                <div className="abt-feat">
                  <i className={`fa ${card.icon}`} aria-hidden="true" />
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
