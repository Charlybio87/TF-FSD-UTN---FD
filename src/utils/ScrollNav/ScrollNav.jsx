import React, { useEffect, useState } from 'react'

const ScrollNav = () => {
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) { // ajusta el valor según sea necesario
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return {
    scrolled: scrolled
  }
}

export default ScrollNav