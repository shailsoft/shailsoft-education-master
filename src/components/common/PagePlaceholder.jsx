import { Link } from 'react-router-dom';
import PageBanner from './PageBanner.jsx';

/**
 * Generic placeholder used by pages scaffolded for routing that have not
 * yet been hand-converted. Renders a page banner plus a call-to-action
 * so the route works end-to-end and can be swapped for the real UI later.
 */
export default function PagePlaceholder({ title, description, crumbs, backTo = '/', backLabel = 'Back to home' }) {
  return (
    <>
      <PageBanner title={title} crumbs={crumbs || [{ label: title }]} />
      <section>
        <div className="container com-sp pad-bot-70">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>{title}</h2>
              <p style={{ maxWidth: 680, margin: '15px auto 25px' }}>
                {description || 'This page is part of the Education Master template. The route is wired and ready — add your final content and components here using the patterns established in Home, About, AllCourses, and CourseDetails.'}
              </p>
              <Link to={backTo} className="bann-btn-1">{backLabel}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
