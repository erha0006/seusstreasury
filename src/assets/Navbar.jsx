import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/books" style={{ marginRight: '1rem' }}>Books</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  );
}

export default Navbar;
