
const Navigation = ({ onLoginClick }) => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button onClick={onLoginClick}>login</button>
    </nav>
  );
};

export default Navigation;