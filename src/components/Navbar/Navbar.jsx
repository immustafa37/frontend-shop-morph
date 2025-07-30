import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Logo will go here */}
        <h1>GlassShop</h1>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;