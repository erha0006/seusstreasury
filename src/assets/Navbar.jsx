import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <NavLink to="/books" style={{ marginRight: '1rem' }}>
        Books
      </NavLink>
      <NavLink to="/quotes">Quotes</NavLink>
    </nav>
  );
}

export default Navbar;
