import {Component, useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navber from './Navbar/Navber'
import MainLayer from './main/MainLayer'
import About from './About/About'
import Experience from './main/Experience/Experience'
import Footer from './Footer/Footer'




export default function Home() {

  // document.addEventListener('scroll', () => {
  //   const scrolled = window.scrollY;

  //   console.log(scrolled);
  // });

  
 

  return (
    <div className={styles.container}>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`${styles.header}`}>
        <Navber/>
        
      </header>
      <main className={styles.main}>
        <MainLayer />
        <About />
        <Experience id="Experience"/>
      </main>

      <footer className={styles.footer}>
        <Footer />
        <p style={ {fontSize:"1.6rem",margin:"auto",textAlign:"center",padding:".7rem",background:"whitesmoke",color:"#222222"}}> &copy; 2020 airbnd clone! no right reserve || this is a demo || redesign by Ashab Uddin  ||<strong>Power By</strong>  <a href="https://sufit.net/"><img
          style={{position:"relative",padding:".5rem 0 0 .8rem",bottom:"0"}}
          src="./Images/sufit-icon.png" width="80px" height="30px"
          alt="Sufit"
          /></a> </p>
      </footer>
    </div>
  )
}
