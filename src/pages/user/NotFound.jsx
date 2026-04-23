import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ fontSize: 72, margin: 0 }}>404</h1>
      <h3>Page not found</h3>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="bann-btn-1">Go to Home</Link>
    </div>
  );
}
