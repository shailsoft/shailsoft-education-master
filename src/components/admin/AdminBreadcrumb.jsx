import { Link, useNavigate } from 'react-router-dom';

export default function AdminBreadcrumb({ title }) {
  const navigate = useNavigate();
  return (
    <div className="sb2-2-2">
      <ul>
        <li>
          <Link to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
        </li>
        <li className="active-bre"><a href="#" onClick={(e) => e.preventDefault()}> {title}</a></li>
        <li className="page-back">
          <a href="#" onClick={(e) => { e.preventDefault(); navigate(-1); }}>
            <i className="fa fa-backward" aria-hidden="true"></i> Back
          </a>
        </li>
      </ul>
    </div>
  );
}
