import Head from 'next/head'
import { useEffect, useState} from 'react'
import styles from '../styles/Home.module.scss'
import Navber from './Navbar/Navber'
import MainLayer from './main/MainLayer'
import About from './About/About'
import Experience from './main/Experience/Experience'
import Footer from './Footer/Footer'
import Router from 'next/router'
import NProgress from 'nprogress'
// import RingLoader from "react-spinners/RingLoader";




export default function Home() {

  // const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true)
  //     setTimeout(() => {
  //       setLoading(false)
  //     }, 100);
  // },[])

  Router.onRouteChangeStart = url => {
    NProgress.start();
    console.log(url);
  }
  

  Router.onRouteChangeComplete = () => NProgress.done();
  
  Router.onRouteChangeError = () => NProgress.done();
  
 


  return (
    <div className={styles.container}>
      {/* {loading ? (
        <div className={ styles.loading}>
      
    <RingLoader  color="#F58A23" loading={loading} size={80} />
    </div>
  )
    :( <> */}
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
      </Head>
      <header className={`${styles.header}`}>
        <Navber />
        
      </header>
      <main className={styles.main}>
        <MainLayer />
        <About />
        <Experience id="Experience" />
      </main>

      <footer className={styles.footer}>
        <Footer />
        <p style={{ fontSize: "1.6rem", margin: "auto", textAlign: "center", padding: ".7rem", background: "whitesmoke", color: "#222222" }}> &copy; 2020 airbnd clone! no right reserve || this is a demo || redesign by Ashab Uddin  ||<strong>Power By</strong>  <a href="https://sufit.net/"><img
          style={{ position: "relative", padding: ".5rem 0 0 .8rem", bottom: "0" }}
          src="./Images/sufit-icon.png" width="80px" height="30px"
          alt="Sufit"
        /></a> </p>
      </footer>
      {/* </>
    )} */}
    </div>
  )

}