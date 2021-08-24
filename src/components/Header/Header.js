import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, NavLink, Span } from './HeaderStyles';

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  useEffect(()=> {
    window.addEventListener('scroll', changeNavbarColor);
  }, [])
  
  return (
  <Container style={colorChange ? {backgroundColor: '#1a253b'} : null}>
    <Div1>
      <Link href="/">
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '28px'}}>
          <DiCssdeck size="3rem"/> <Span>Alkairis</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#technology'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#contact-me'>
          <NavLink>Contact Me</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
)}

export default Header;
