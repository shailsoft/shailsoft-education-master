import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const COURSES = [
  'Accounting/Finance', 'Civil Engineering', 'Art/Design', 'Marine Engineering',
  'Business Management', 'Journalism/Writing', 'Physical Education',
  'Political Science', 'Sciences', 'Statistics', 'Web Design/Development',
  'SEO', 'Google Business', 'Graphics Design', 'Networking Courses',
  'Information technology',
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [showList, setShowList] = useState(false);
  const wrapRef = useRef(null);

  const filtered = query
    ? COURSES.filter((c) => c.toLowerCase().includes(query.toLowerCase()))
    : COURSES;

  useEffect(() => {
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setShowList(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div className="search-top" onMouseLeave={() => setShowList(false)}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="search-form" ref={wrapRef}>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="sf-type">
                  <div className="sf-input">
                    <input
                      type="text"
                      id="sf-box"
                      placeholder="Search course and discount courses"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onFocus={() => setShowList(true)}
                    />
                  </div>
                  <div className="sf-list" style={{ display: showList ? 'block' : 'none' }}>
                    <ul>
                      {filtered.map((c) => (
                        <li key={c}>
                          <Link to="/course-details" onClick={() => setShowList(false)}>{c}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sf-submit">
                  <input type="submit" value="Search Course" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
