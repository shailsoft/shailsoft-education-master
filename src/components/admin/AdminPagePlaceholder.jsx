import AdminBreadcrumb from './AdminBreadcrumb.jsx';

export default function AdminPagePlaceholder({ title, description }) {
  return (
    <>
      <AdminBreadcrumb title={title} />
      <div className="sb2-2-1">
        <h2>{title}</h2>
        <p>{description || 'This admin module is scaffolded and routed. Add the final form, table, or dashboard widgets here using the patterns from AdminDashboard and AdminMainMenu.'}</p>
      </div>
      <div className="sb2-2-3">
        <div className="row">
          <div className="col-md-12">
            <div className="box-inn-sp">
              <div className="inn-title">
                <h4>Coming soon</h4>
                <p>This section is ready for content. Use `AdminDashboard.jsx` as a reference for widgets, and the existing Materialize + Bootstrap classes for tables and forms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
