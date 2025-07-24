import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold tracking-tight"
            style={{ color: '#FF6F61' }}>ArtCraft</Link>
      <div className="space-x-6 text-neutral-700">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}