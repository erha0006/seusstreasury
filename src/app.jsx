import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="p-4 bg-blue-300">
        <Link to="/" className="mr-4">Books</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
