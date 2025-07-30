import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="p-4 bg-blue-500 text-white shadow-md">
        <div className="container mx-auto flex space-x-4">
          <Link to="/" className="hover:underline">Books</Link>
          <Link to="/quotes" className="hover:underline">Quotes</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-4 container mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
