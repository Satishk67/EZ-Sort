import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Details from './Details'
import SortingHero from './SortingHero'
import AlgorithmDescription from './AlgorithmDescription'
import Contact from './Contact'
import { useRef } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [isLogin, setLogin] = useState(false);
  const setlogin = () => {
    setLogin(true);
  };

  useEffect(() => { AOS.init(); }, []);
  AOS.init({duration: 1000, delay: 5000});

  const sidebarRef = useRef(null); // ref for side menu
  // propfunction
  const toggleSidebar = () => {
    const sidebar = sidebarRef.current;
    sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
  };

  const [Sort, setSort] = useState(null);
  // propfunction
  const setSortName = (sortName) => {
    setSort(sortName);
  };

  return (
    <>
    <Navbar toggleSidebar={toggleSidebar} sidebarRef={sidebarRef} whichSort={setSortName} login={setlogin} islogin={isLogin}/>
    {!Sort ? <Hero/> : <SortingHero sortName={Sort}/>}
    {!Sort ? <Details toggleSidebar={toggleSidebar} setSortName={setSortName}/> : <AlgorithmDescription sortName={Sort} login={setlogin} islogin={isLogin}/>}
    <Contact/>
    </>
  )
}

export default App