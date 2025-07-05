import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-4">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">Fundify</Link>
        <div className="space-x-4">
          <Link to="/create" className="text-sm">Create Campaign</Link>
          <Link to="/admin" className="text-sm">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
