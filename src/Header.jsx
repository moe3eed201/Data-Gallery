import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <Link to="/" >
      <img src="https://lh4.googleusercontent.com/proxy/3xL1IQq3mWceq4a4fuWbVS3o72D4aol8YPvCyyiZN3oTQlwNGUCDdNDSNFCeRE2gP_ZtPNxdnM6WypidytzkK3jzU6LCHQN7PvcNQ7bydC0" className="header-image" />
      <h2 className="header-h2">Bob’s Burgers Universe</h2>
      </Link>
    </header>
  );
};

export default Header;