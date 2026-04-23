import { Link } from 'react-router-dom';

/**
 * Standard inner-page banner used by most user-facing pages.
 */
export default function PageBanner({ title, crumbs = [] }) {
  return (
    <section>
      <div className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>{title}</h2>
              <ul className="inn-breadcumbs">
                <li><Link to="/">Home</Link></li>
                {crumbs.map((c, i) => (
                  <li key={i}>
                    {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
