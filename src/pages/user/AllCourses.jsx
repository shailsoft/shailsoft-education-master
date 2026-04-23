import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/common/PageBanner.jsx';
import { ALL_COURSES } from '../../data/courses.js';

export default function AllCourses() {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = q ? ALL_COURSES.filter((c) => c.title.toLowerCase().includes(q)) : ALL_COURSES;
    list = [...list].sort((a, b) => {
      if (sortBy === 'seats') return b.seats - a.seats;
      return a.title.localeCompare(b.title);
    });
    return list;
  }, [query, sortBy]);

  return (
    <>
      <PageBanner title="All Courses" crumbs={[{ label: 'All Courses' }]} />

      <section>
        <div className="container com-sp pad-bot-70">
          <div className="row" style={{ marginBottom: 20 }}>
            <div className="col-md-8">
              <input
                type="text"
                placeholder="Search courses..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="form-control"
                style={{ padding: 10 }}
              />
            </div>
            <div className="col-md-4">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="form-control" style={{ padding: 10 }}>
                <option value="title">Sort by name</option>
                <option value="seats">Sort by seats available</option>
              </select>
            </div>
          </div>

          <div className="row">
            {filtered.length === 0 && (
              <div className="col-md-12">
                <p>No courses match your search.</p>
              </div>
            )}
            {filtered.map((c) => (
              <div key={c.id} className="col-md-4 col-sm-6 col-xs-12">
                <div className="all-cour-box">
                  <Link to={`/course-details/${c.id}`}>
                    <img src={c.img} alt={c.title} onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg'; }} />
                  </Link>
                  <div className="all-cour-box-con">
                    <Link to={`/course-details/${c.id}`}><h4>{c.title}</h4></Link>
                    <ul>
                      <li><i className="fa fa-clock-o" aria-hidden="true" /> {c.duration}</li>
                      <li><i className="fa fa-dollar" aria-hidden="true" /> {c.fee}</li>
                      <li><i className="fa fa-users" aria-hidden="true" /> {c.seats} seats</li>
                    </ul>
                    <Link to={`/course-details/${c.id}`} className="bann-btn-1">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
