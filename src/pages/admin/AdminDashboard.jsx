import { Link } from 'react-router-dom';
import AdminBreadcrumb from '../../components/admin/AdminBreadcrumb.jsx';
import { DASHBOARD_STATS, STUDENTS } from '../../data/adminData.js';

export default function AdminDashboard() {
  return (
    <>
      <AdminBreadcrumb title="Dashboard" />

      <div className="sb2-2-1">
        <h2>Admin Dashboard</h2>
        <p>An overview of courses, admissions, students, and current enquiries.</p>
        <div className="db-2">
          <ul>
            {DASHBOARD_STATS.map((s) => (
              <li key={s.label}>
                <div className={`dash-book ${s.className}`}>
                  <h5>{s.label}</h5>
                  <h4>{s.value}</h4>
                  <a href="#" onClick={(e) => e.preventDefault()}>View more</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sb2-2-3">
        <div className="row">
          <div className="col-md-12">
            <div className="box-inn-sp">
              <div className="inn-title">
                <h4>Student Details</h4>
                <p>Recent student records including name, ID, phone, and status.</p>
              </div>
              <div className="tab-inn">
                <div className="table-responsive table-desi">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>ID</th>
                        <th>Date of birth</th>
                        <th>Status</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {STUDENTS.map((s, idx) => (
                        <tr key={idx}>
                          <td><span className="list-img"><img src={s.img} alt="" /></span></td>
                          <td>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              <span className="list-enq-name">{s.name}</span>
                              <span className="list-enq-city">{s.city}</span>
                            </a>
                          </td>
                          <td>{s.phone}</td>
                          <td>{s.email}</td>
                          <td>{s.country}</td>
                          <td>{s.sid}</td>
                          <td>{s.dob}</td>
                          <td><span className="label label-success">{s.status}</span></td>
                          <td>
                            <Link to="/admin/student-details" className="ad-st-view">View</Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
