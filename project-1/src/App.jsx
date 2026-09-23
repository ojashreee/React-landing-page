import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("Welcome to the website");
  }, []);
  
  useEffect(() => {
    alert(`Login count: ${count}`)
  }, [count]);

  const handleLoginClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>Login count: {count}</div>
      <div>
        <Navigation onLoginClick={handleLoginClick} />
        <HeroSection />
        <Navbar you go="you go" />
      </div>
    </>
  );
};

export default App;